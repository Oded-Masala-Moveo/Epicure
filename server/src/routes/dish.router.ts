import { Router } from "express";
import { DishController } from "../controllers";
import { ValidationSchemas, ValidateSchema, ValidateSchemas } from "../middleware";

const DishRouter: Router = Router();

DishRouter.get("/", DishController.getAllDishes);
DishRouter.get("/:id", DishController.getDish);
DishRouter.get("/restaurant_dishes/:id", DishController.getDishByRestaurantId);
DishRouter.put("/:id",ValidateSchema(ValidationSchemas.dish.update), DishController.updateDish);
DishRouter.post("/",ValidateSchema(ValidationSchemas.dish.create), DishController.addDish);
DishRouter.post("/many",ValidateSchemas([ValidationSchemas.dish.create]), DishController.addManyDishes);
DishRouter.delete("/:id", DishController.deleteDish);

export default DishRouter;
