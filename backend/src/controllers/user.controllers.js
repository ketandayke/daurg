import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.model.js";
import { Message } from "../models/message.model.js";
import { email_Sender } from "../utils/emailSender.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Utility to generate tokens
const generateAccessAndRefreshTokens = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new ApiError(404, "User not found");

  const refreshToken =await user.generateRefreshToken();
  const accessToken =await user.generateAccessToken();

  if (!refreshToken || !accessToken) {
    throw new ApiError(500, "Failed to generate tokens");
  }

  user.refreshToken = refreshToken;
  await user.save(); // No need for `validateBeforeUpdate`

  return { accessToken, refreshToken };
};

const passwordGenerator=()=>{
   let num="1234567890";
   let alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let char="@#$*";
   let str=num+alpha+char;
   let password="";
   for(let i=0;i<8;i++){
     let ind=Math.floor(Math.random()*str.length);
     password+=str[ind];

   }
   return password;
   
}

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, userType } = req.body;

  if ([fullName, email, password, userType].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required")
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
     throw new ApiError(409, "User already exists");
  }
  
  const pass=password;
  const user = await User.create({ fullName, email, password, userType });
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    return res.status(500).json(new ApiError(500, "User registration failed due to server issues"));
  }
   
  console.log("user created successfully",createdUser);
  email_Sender({
    userEmail:createdUser.email,
    subject:"no reply your account details",
    text: `WELCOME TO D&G ACADEMY ${user.fullName}\n\nYour account has been created.\n\nEmail: ${user.email}\nPassword: ${newPassword}\n\nPlease change your password after logging in.`  });

  return res.status(201).json(
    new ApiResponce(201, "User registered successfully", createdUser)
  );
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("this is request of login",req.body);

  if ([email, password].some((field) => !field || field.trim() === "")) {
      throw new ApiError(400, "All fields are required")
  }

  const user = await User.findOne({ email });
  if (!user) {
    // return res.status(401).json(new ApiError(401,"User does not exist! Please sign up"));
    throw new ApiError(401,"user does not exist plesase signup");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const isProduction = process.env.NODE_ENV === "production";
  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  // console.log("this is user logged in ",loggedInUser);
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .cookie("accessToken", accessToken, cookieOptions)
    .json(
      new ApiResponce(
        200,
        "User logged in successfully",
        { user: loggedInUser, accessToken, refreshToken },

      )
    );
});

const getUser = asyncHandler(async (req, res) => {
  try {
    const user = req.user;
    console.log("this is  request",req);
    console.log("this is user getted form request",user);
    if (!user) {
          throw new ApiError(404, "User not found") 
           }

    console.log("Fetched User:", user);
    return res.status(200).json(new ApiResponce(200, "User found",user));
  } catch (error) {
    console.error("Error in getUser:", error);
    return res.status(500).json(new ApiError(500, "An error occurred", error));
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  // Clear refreshToken from database
  await User.findByIdAndUpdate(req.user._id, {
      $set: { refreshToken: null }
  }, { new: false });

  // Define cookie options
  const isProduction = process.env.NODE_ENV === "production";
  const options = {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax" // Important for cross-origin cookies
  };

  // Clear cookies properly
  res.clearCookie("accessToken", options);
  res.clearCookie("refreshToken", options);

  // Send response
  return res.status(202).json(new ApiResponce(202, "User logged out successfully", ""));
});


const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const { fullName, userType } = req.body;

    if (!fullName || !userType) {
      return res.status(400).json(new ApiError(400, "Full Name and User Type are required"));
    }

    let imageUrl = ""; // Default image URL

    if (req.file) { // Cloudinary automatically uploads the file
      imageUrl = req.file.path; // ✅ Cloudinary returns the image URL
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $set: {
          fullName,
          userType,
          ...(imageUrl && { image: imageUrl }) // ✅ Only update image if provided
        },
      },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json(new ApiError(404, "User not found"));
    }

    return res.status(202).json(new ApiResponce(202, "User details updated successfully", updatedUser));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "An error occurred", error.message));
  }
});

const createMessage = asyncHandler(async (req, res) => {
  try {
    const { fullName, email, content } = req.body;
    console.log("Input data:", req.body);

    if ([fullName, email, content].some((field) => !field||field.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }
    console.log("procceding futher");
    let user = await User.findOne({ email }).select("-password");

    // If user doesn't exist, create one (default type: "other")
    console.log("user exist",user);
    if (!user) {
      console.log("user not exist",user);
      const newPassword=passwordGenerator();
      console.log("this is new password",newPassword);
      user = await User.create({ 
        fullName, 
        email, 
        password:newPassword, // Set a secure password in real apps
        userType: "other" // Default userType if not provided
      });
      console.log("user created successfully in message",user);
      if(user){
        email_Sender({
          userEmail:user.email,
          subject:"noreply dandgacademy your account details",
          text: `WELCOME TO D&G ACADEMY <b>${user.fullName}</b>\n\nYour account has been created.\n\nEmail: ${user.email}\nPassword: ${newPassword}\n\nPlease change your password after logging in.`,
        })
      }
    }

    // Create the message and associate it with the user
    const message = await Message.create({
      content,
      fullName,
      email,
      owner: user._id, // Attach message to user
    });

    if (!message) {
      throw new ApiError(404,"message not created");
    }

    // Update user's messages array
    user.messages.push(message._id);
    await user.save(); // Save updated user

    return res.status(200).json(new ApiResponce(200, "Message created successfully"));
  } catch (error) {
    return res.status(400).json(new ApiError(400, error.message || "Error in message creation", error));
  }
});


export { registerUser, loginUser, getUser, logoutUser, updateUserProfile, createMessage };
