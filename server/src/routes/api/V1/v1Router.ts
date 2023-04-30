import express from "express";
import chefRouter from "../../chefs.router";
const v1Router = express.Router();


v1Router.use("/chefs", chefRouter);

export default v1Router;