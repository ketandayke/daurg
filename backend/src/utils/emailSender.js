import nodemailer from "nodemailer";
import dotenv from "dotenv"
import { asyncHandler } from "./asyncHandler.js";
dotenv.config();


let mailTransporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    }
});

export const email_Sender= asyncHandler(async ({userEmail,subject,text})=>{
    const mailDetails={
        from:process.env.EMAIL_USER,
        to:userEmail,
        subject:subject,
        text:text,
    }
    try {
        await mailTransporter.sendMail(mailDetails);
        console.log("email sent successfully");
    } catch (error) {
        console.log("Failed to send email",error);
        
    }
    })
