import { Router } from "express";
import { ChefController } from "../controllers";

const router: Router = Router();
router.get("/chefs", ChefController.getAllChefs);
router.get("/chefs/:id", ChefController.getChef);
router.put("/chefs/:id", ChefController.updateChef);
router.post("/chefs", ChefController.addChef);
router.delete("/chefs/:id", ChefController.deleteChef);

export default router;
