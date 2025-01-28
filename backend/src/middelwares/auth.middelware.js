import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJwt = asyncHandler(async (req, res, next) => {
    try {
      const token = req.cookies?.accessToken || req.headers["authorization"]?.replace("Bearer ", "").trim();
      if (!token) {
        throw new ApiError(401, "Please log in first");
      }
  
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decodedToken._id);
      if (!user) {
        throw new ApiError(404, "User not found");
      }
  
      // console.log("Verified User:", user);
      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        throw new ApiError(401, "Token expired. Please log in again.");
      }
      throw new ApiError(401, "Invalid token")
    }
  });
  