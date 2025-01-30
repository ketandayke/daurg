
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js"; // Cloudinary config

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user_profiles", // Cloudinary folder name
    format: async (req, file) => "jpeg", // Convert all images to JPEG
    public_id: (req, file) => file.originalname.split(".")[0], // Keep original filename
  },
});

export const upload = multer({ storage: storage });



// export const upload=multer({storage:storage});
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./public/temp")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })
  
//   export const upload = multer({ storage: storage })
    
