import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { User } from "../models/user.model.js";

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
    return res.status(400).json(new ApiError(400, "All fields are required"));
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

  if ([email, password].some((field) => !field || field.trim() === "")) {
    return res.status(400).json(new ApiError(400, "All fields are required"));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json(new ApiError(404, "User does not exist! Please sign up"));
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    return res.status(401).json(new ApiError(401, "Invalid email or password"));
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const isProduction = process.env.NODE_ENV === "production";
  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "strict" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  console.log("this is user logged in ",loggedInUser);
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
      return res.status(404).json(new ApiError(404, "User not found"));
    }

    console.log("Fetched User:", user);
    return res.status(200).json(new ApiResponce(200, "User found",user));
  } catch (error) {
    console.error("Error in getUser:", error);
    return res.status(500).json(new ApiError(500, "An error occurred", error));
  }
});

const logoutUser =asyncHandler(async(req,res)=>{
  
      await User.findByIdAndUpdate(req.user._id,
      {
        $set:{
          refreshToken:undefined,
         }
    },
      {
        new:false,
      }
     )
     const isProduction = process.env.NODE_ENV === "production";
     const options={
      httpOnly:true,
      secure:isProduction
     }
     return res.status(202)
     .clearCookie("accessToken",req.accessToken,options)
     .clearCookie("accessToken",req.user.refreshToken,options)
     .json(new ApiResponce(202,"user logout Successfully",""));

  
});

export { registerUser, loginUser,getUser,logoutUser };
