import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { ErrorHandler } from "./exceptions";
import { apiRouter } from "./routes";
dotenv.config();
import "./config/config";
import "./process";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use("/api", apiRouter);

// API handle Error in the app
app.use(ErrorHandler.handleError);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
