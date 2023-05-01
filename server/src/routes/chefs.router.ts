import { Router } from "express";
import { ChefController } from "../controllers";

const chefRouter: Router = Router();
chefRouter.get("/", ChefController.getAllChefs);
chefRouter.get("/:id", ChefController.getChef);
chefRouter.put("/:id", ChefController.updateChef);
chefRouter.post("/", ChefController.addChef);
chefRouter.post("/many", ChefController.addManyChefs);
chefRouter.delete("/:id", ChefController.deleteChef);

export default chefRouter;
