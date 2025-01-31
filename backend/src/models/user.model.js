import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();
const userSchema = new Schema(
    { 
        fullName:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        password:{
            type:String,
            required:[true,"password must required"]
        },
        image:{
            type:String,
        },
        userType:{
            type:String,
            enum:["student","other"],
            required:true,
        },
        messages:[
            {
                type:Schema.Types.ObjectId,
                ref:"Message"
            }
        ],
        refreshToken:{
            type:String
        }


    },
    {
        timestamps:true
    }
    )

    
    userSchema.pre("save",async function(next){
        if(!this.isModified("password")) return next();
         
        this.password = await bcrypt.hash(this.password,10);
        next()
    });
    
    userSchema.methods.isPasswordCorrect = async function
        (password){
           return await bcrypt.compare(password,this.password);
        }

    userSchema.methods.generateAccessToken = async function(){
            return jwt.sign(
                {
                    _id:this._id,
                    email :this.email,

                },    
                   process.env.ACCESS_TOKEN_SECRET,
                {
                   expiresIn:process.env.ACCESS_TOKEN_EXPIRY
                }
            )

        }
    
    userSchema.methods.generateRefreshToken = async function(){
            return jwt.sign(
                {
                   _id:this._id

                },
                  process.env.REFRESH_TOKEN_SECRET,
                {
                  expiresIn:process.env.REFRESH_TOKEN_EXPIRY
                }

            )
         }

    const User = mongoose.model("User",userSchema);
    const studentSchema = new Schema(
        {
            class:{
                type:Number,
                required:true,
            
            },
            school:{
                type:String,
                required:true,
            }
        },
        {timestamps:true}
    )
    const Student = User.discriminator("Student",
             new Schema(
                {
                    class:{type:Number,required:true},
                    school:{type:String,required:true}

              },
              {timestamps:true}
             )
            );

    export {User,Student}
