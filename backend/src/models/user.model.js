import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
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
            trim:true,
        },
        password:{
            type:String,
            required:["true","password must required"]
        },
        image:{
            type:String,
        },
        userType:{
            type:String,
            enum:["student","other"]
        }


    },
    {
        timestamps:true
    }
    )

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
    
    userSchema.pre("save",async function(next){
        if(!this.isModified("password")) return next();

        this.password = await bcrypt.hash(this.password,10);
        next()
    });
    
    const User = mongoose.model("User",userSchema);
    const Student = User.discriminator("Student",studentSchema);

    export {User,Student}
