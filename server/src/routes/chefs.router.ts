import { Router } from "express";
import { ChefController } from "../controllers";
import { Schemas, ValidateSchema, ValidateSchemas } from "../middleware";

const chefRouter: Router = Router();
chefRouter.get("/", ChefController.getAllChefs);
chefRouter.get("/:id", ChefController.getChef);
chefRouter.put("/:id",ValidateSchema(Schemas.chef.update), ChefController.updateChef);
chefRouter.post("/",ValidateSchema(Schemas.chef.create), ChefController.addChef);
chefRouter.post("/many",ValidateSchemas([Schemas.chef.create]), ChefController.addManyChefs);
chefRouter.delete("/:id", ChefController.deleteChef);

export default chefRouter;