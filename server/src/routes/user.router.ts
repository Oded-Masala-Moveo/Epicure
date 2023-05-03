import { Router } from "express";
import { UserController } from "../controllers";
import { ValidationSchemas, ValidateObjectData, authAdminUser, authRegularUser } from "../middleware";

const UserRouter: Router = Router();
UserRouter.post("/register", UserController.registerUser);
UserRouter.post("/login",UserController.loginUser);
UserRouter.get("/", authAdminUser, UserController.getAllUsers);
UserRouter.post("/email", authRegularUser, UserController.getUserByEmail);
UserRouter.put("/email",authRegularUser, UserController.updateUserByEmail);
UserRouter.put("/password",authRegularUser, UserController.updatePasswordUserByEmail);
UserRouter.post("/logout",UserController.logoutUser);

export default UserRouter;
