import express from "express";
import { chefsRouter ,restaurantRouter} from "../../../routes";

const v1Router = express.Router();

v1Router.use("/chefs", chefsRouter)
v1Router.use("/restaurant", restaurantRouter)

export default v1Router;
