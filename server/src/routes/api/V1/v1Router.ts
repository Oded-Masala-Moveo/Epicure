import express from "express";
import { chefsRouter } from "../../../routes";

const v1Router = express.Router();

v1Router.use("/chefs", chefsRouter)

export default v1Router;
