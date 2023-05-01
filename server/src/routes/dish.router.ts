import { Router } from "express";
import { DishController } from "../controllers";

const DishRouter: Router = Router();

DishRouter.get("/", DishController.getAllDishes);
DishRouter.get("/:id", DishController.getDish);
DishRouter.get("/restaurant_dishes/:id", DishController.getDishByRestaurantId);
DishRouter.put("/:id", DishController.updateDish);
DishRouter.post("/", DishController.addDish);
DishRouter.post("/many", DishController.addManyDishes);
DishRouter.delete("/:id", DishController.deleteDish);

export default DishRouter;
