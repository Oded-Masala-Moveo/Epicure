import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { apiRouter } from "./routes";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define your API routes here
app.use("/api", apiRouter);

import "./config/config";
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
