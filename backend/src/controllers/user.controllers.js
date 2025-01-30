import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.model.js";
import { Message } from "../models/message.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

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

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, userType } = req.body;

  if ([fullName, email, password, userType].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required")
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json(new ApiError(409, "User already exists"));
  }

  const user = await User.create({ fullName, email, password, userType });
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    return res.status(500).json(new ApiError(500, "User registration failed due to server issues"));
  }

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
    const file = req.file; // Access the uploaded file

    if (!fullName || !userType) {
      return res.status(400).json(new ApiError(400, "Full Name and User Type are required"));
    }

    let imageUrl = ""; // Default to an empty string for the image URL
    if(file){
      imageUrl=file.path;
    }

    // if (file) {
    //   // const localFilePath = file.path; // Path to the uploaded file on the server
    //   // // console.log("File uploaded:", localFilePath);

    //   // // Upload the image to Cloudinary
    //   // const uploadResult = await uploadOnCloudinary(localFilePath);
    //   // if (!uploadResult) {
    //   //   return res.status(500).json(new ApiError(500, "Image upload failed on Cloudinary"));
    //   // }
    //   // imageUrl = uploadResult.secure_url;
    //   // console.log("Cloudinary image URL:", imageUrl);

    // }

    // Update the user in the database
    const updatedUser = await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $set: {
          fullName,
          userType,
          ...(imageUrl && { image: imageUrl }) // Add the image URL only if it exists
        },
      },
      { new: true } // Return the updated document
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json(new ApiError(404, "User not found"));
    }

    return res.status(202).json(
      new ApiResponce(202, "User details updated successfully", updatedUser)
    );
  } catch (error) {
    // console.error("Error in updating user profile:", error);
    return res.status(500).json(new ApiError(500, "An error occurred", error.message));
  }
});


const createMessage =asyncHandler(async (req,res)=>{
  try {
    const {fullName,email,content}=req.body;
    console.log("input data",req.body);
    if([fullName,email,content].some((field)=>field.trim==="")){
      return res.status(400).json(new ApiError(200,"All fields required"));
    }
    
    let userId="";
    let user="";
    if(req.user){
      userId=req.user._id;
    }else{
      user=await User.findOne({email}).select("-password");
      userId=user._id;
    }
    
    const message=await Message.create({
      content,
      fullName,
      email,
      ...(userId && {owner:userId})
    });
    if(!message){
      return res.status(505).json(new ApiError(505,"User not created"));
    }
    // console.log("message created",message);
    if(user){
      user.message=userId;
      await user.save();
    }
    return res.status(200).json(new ApiResponce(200,"message created successfully"));


  } catch (error) {
    return res.status(400).json(new ApiError(400,error.message||"error in message creation",error));
    
  }
})
export { registerUser, loginUser,getUser,logoutUser,updateUserProfile,createMessage };
