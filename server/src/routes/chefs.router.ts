import { Router } from "express";
import { ChefController } from "../controllers";
import { ValidationSchemas, ValidateSchema, ValidateSchemas } from "../middleware";

const chefRouter: Router = Router();
chefRouter.get("/", ChefController.getAllChefs);
chefRouter.get("/:id", ChefController.getChef);
chefRouter.put("/:id",ValidateSchema(ValidationSchemas.chef.update), ChefController.updateChef);
chefRouter.post("/",ValidateSchema(ValidationSchemas.chef.create), ChefController.addChef);
chefRouter.post("/many",ValidateSchemas([ValidationSchemas.chef.create]), ChefController.addManyChefs);
chefRouter.delete("/:id", ChefController.deleteChef);

export default chefRouter;