import {app} from "./app.js"
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        // console.log("Error ",error);
        throw error;
    })
    app.listen(process.env.PORT,()=>{
        // console.log("app is live on http://localhost:8000");
    })

})
.catch((error)=>{
    // console.log("Database connection failed ",error);
    throw error;
})