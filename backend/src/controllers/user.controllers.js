import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import {User,Student} from "../models/user.model.js"

const registerUser = asyncHandler(async (req,res)=>{
    const {fullName,email,password,userType}=req.body;

    if([fullName,email,password,userType].some((field)=>{field.trim()===""}))
       return new ApiError(401,"All fields required");
    
    existedUser=User.findOne({email:email});
    if(existedUser){
       return new ApiError(404,"User already exist");
    }
    

    const user = await User.create(
        {
            fullName,
            email,
            password,
            userType
        }
    );

    const createdUser = await User.findById(user._id).select("-password");
    if(!createdUser){
        return new ApiError(500,"User registration failed due to server issues");
    }
    return res.status(201).json(
        new ApiResponce(200,"user registered successfully",createdUser)
    );


});

export {registerUser}