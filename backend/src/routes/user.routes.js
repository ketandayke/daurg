import { Router } from "express";
import { registerUser, loginUser, getUser,logoutUser } from "../controllers/user.controllers.js";
import { verifyJwt } from "../middelwares/auth.middelware.js"
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
export default router;
