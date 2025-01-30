
import multer from "multer"
import {CloudinaryStorage}from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
//storage configuration of multer

const storage =new CloudinaryStorage({
        cloudinary:cloudinary,
        params:{
          folder:"user_profiles",
          format:async(req,res)=>"jpeg",
          public_id:async(req,res)=>file.originalname.split(".")[0]

        }
})

export const upload=multer({storage:storage});
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./public/temp")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })
  
//   export const upload = multer({ storage: storage })
    
