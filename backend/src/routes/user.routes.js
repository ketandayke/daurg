import { Router } from "express";
import { registerUser, loginUser, getUser,logoutUser,updateUserProfile,createMessage } from "../controllers/user.controllers.js";
import { verifyJwt } from "../middelwares/auth.middelware.js"
import { upload } from "../middelwares/multer.middelware.js";
const router = Router();

// Default route
router.route('/').get((req, res) => {
    return res.json({ message: "This is Ketan" }); // Updated for consistency
});

// User routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(verifyJwt,getUser); // Ensure `verifyJwt` works as intended
router.route("/logout").post(verifyJwt,logoutUser);
router.route("/profile").put(verifyJwt,upload.single("image"),updateUserProfile)
router.route("/message").post(createMessage);
export default router;
