import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
import userRouter from './routes/user.routes.js';
import { errorHandler } from './middelwares/errorHandler.js';

app.use(
    cors({
      origin: [process.env.CORS_ORIGIN, 'http://localhost:5173'], // Use the env variable
      credentials: true,
    })
  );

app.use(cookieParser());
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use("/api/v1/users",userRouter);
app.use(errorHandler);


export {app}
