import { Router } from "express";
import { UserController } from "../controllers";
import { ValidationSchemas, ValidateObjectData, authAdminUser, authRegularUser } from "../middleware";

const UserRouter: Router = Router();

UserRouter.get("/", authAdminUser, UserController.getAllUsers);
UserRouter.get("/:id", authAdminUser, UserController.getUserByEmail);
UserRouter.put("/:id",authRegularUser, UserController.updateUser);
UserRouter.post("/register", UserController.registerUser);
UserRouter.post("/login",UserController.registerUser);

export default UserRouter;
