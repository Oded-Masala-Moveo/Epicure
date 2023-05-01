import { Router } from "express";
import { RestaurantController } from "../controllers";

const RestaurantRouter: Router = Router();

RestaurantRouter.get("/", RestaurantController.getAllRestaurants);
RestaurantRouter.get("/:id", RestaurantController.getRestaurant);
RestaurantRouter.get("/chef_restaurant/:id", RestaurantController.getRestaurantByChefId);
RestaurantRouter.put("/:id", RestaurantController.updateRestaurant);
RestaurantRouter.post("/", RestaurantController.addRestaurant);
RestaurantRouter.post("/many", RestaurantController.addManyRestaurants);
RestaurantRouter.delete("/:id", RestaurantController.deleteRestaurant);

export default RestaurantRouter;
