import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

//Import internal files,modules,functions,routes

//app configs
const app = express();
const PORT = process.env.PORT || 9000; //assign server port
app.use(express.json());


//database connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/";
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
//api routes handler

//test api route 💻
app.get("/", (req: Request, res: Response) => {
  res.send(`server is running on port: ${PORT}`);
});

// General error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.status || 500).json({ message: err.message });
});

//handling .env errors
try {
  if (process.env.PORT) {
    console.log("Environement variable loaded from .env file ");
  } else {
    console.error(".env variables isn't loading ");
  }
} catch (error) {
  console.error("Error loading .env file:", error);
}



// Listening server in speicified port
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
