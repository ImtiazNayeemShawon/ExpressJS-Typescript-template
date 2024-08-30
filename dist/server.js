"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
//Import internal files,modules,functions,routes
//app configs
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9000; //assign server port
app.use(express_1.default.json());
//database connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/";
mongoose_1.default
    .connect(DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
//api routes handler
//test api route 💻
app.get("/", (req, res) => {
    res.send(`server is running on port: ${PORT}`);
});
// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(err.status || 500).json({ message: err.message });
});
//handling .env errors
try {
    if (process.env.PORT) {
        console.log("Environement variable loaded from .env file ");
    }
    else {
        console.error(".env variables isn't loading ");
    }
}
catch (error) {
    console.error("Error loading .env file:", error);
}
// Listening server in speicified port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
