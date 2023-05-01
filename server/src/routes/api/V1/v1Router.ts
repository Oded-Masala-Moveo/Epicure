import express from "express";
import { chefsRouter, restaurantRouter, dishRouter,searchRouter } from "../../../routes";

const v1Router = express.Router();

v1Router.use("/chef", chefsRouter);
v1Router.use("/restaurant", restaurantRouter);
v1Router.use("/dish", dishRouter);
v1Router.use("/search", searchRouter);

export default v1Router;
