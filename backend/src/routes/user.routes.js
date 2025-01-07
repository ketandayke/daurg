import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router();
router.route('/').get((req,res)=>{
    return res.json("this is ketan");
});
router.route("/register",registerUser).post

export default router;