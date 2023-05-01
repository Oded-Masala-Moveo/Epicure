import express from "express";
import { chefsRouter, restaurantRouter, dishRouter } from "../../../routes";

const v1Router = express.Router();

v1Router.use("/chef", chefsRouter);
v1Router.use("/restaurant", restaurantRouter);
v1Router.use("/dish", dishRouter);

export default v1Router;
