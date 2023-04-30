import { Router } from "express";
import { ChefController } from "../controllers";

const router: Router = Router();
router.get("/", ChefController.getAllChefs);
router.get("/:id", ChefController.getChef);
router.put("/:id", ChefController.updateChef);
router.post("/", ChefController.addChef);
router.post("/many", ChefController.addManyChefs);
router.delete("/:id", ChefController.deleteChef);

export default router;
