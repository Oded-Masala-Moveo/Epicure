import { Router } from "express";
import { DishController } from "../controllers";
import { Schemas, ValidateSchema, ValidateSchemas } from "../middleware";

const DishRouter: Router = Router();

DishRouter.get("/", DishController.getAllDishes);
DishRouter.get("/:id", DishController.getDish);
DishRouter.get("/restaurant_dishes/:id", DishController.getDishByRestaurantId);
DishRouter.put("/:id",ValidateSchema(Schemas.dish.update), DishController.updateDish);
DishRouter.post("/",ValidateSchema(Schemas.dish.create), DishController.addDish);
DishRouter.post("/many",ValidateSchemas([Schemas.dish.create]), DishController.addManyDishes);
DishRouter.delete("/:id", DishController.deleteDish);

export default DishRouter;
