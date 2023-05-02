import { Router } from "express";
import { RestaurantController } from "../controllers";
import { Schemas, ValidateSchema, ValidateSchemas } from "../middleware";

const RestaurantRouter: Router = Router();

RestaurantRouter.get("/", RestaurantController.getAllRestaurants);
RestaurantRouter.get("/:id", RestaurantController.getRestaurant);
RestaurantRouter.get("/chef_restaurant/:id", RestaurantController.getRestaurantByChefId);
RestaurantRouter.put("/:id",ValidateSchema(Schemas.restaurant.update), RestaurantController.updateRestaurant);
RestaurantRouter.post("/",ValidateSchema(Schemas.restaurant.create), RestaurantController.addRestaurant);
RestaurantRouter.post("/many",ValidateSchemas([Schemas.restaurant.create]), RestaurantController.addManyRestaurants);
RestaurantRouter.delete("/:id", RestaurantController.deleteRestaurant);

export default RestaurantRouter;
