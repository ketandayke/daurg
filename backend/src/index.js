import * as dotenv from 'dotenv'; // Updated import for ES modules
dotenv.config(); // Ensure environment variables are loaded

import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is live on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
    throw error;
  });
