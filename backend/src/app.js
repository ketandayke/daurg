import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
import userRouter from './routes/user.routes.js';
// import { errorHandler } from './middelwares/errorHandler.js';

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/api/v1/users",userRouter);
// app.use(errorHandler)


export {app}
