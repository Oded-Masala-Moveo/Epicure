"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const UserRouter = (0, express_1.Router)();
UserRouter.post("/register", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.user.create), controllers_1.UserController.registerUser);
UserRouter.post("/login", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.user.update), controllers_1.UserController.loginUser);
UserRouter.get("/", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.user.update), middleware_1.authAdminUser, controllers_1.UserController.getAllUsers);
UserRouter.post("/email", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.user.update), middleware_1.authRegularUser, controllers_1.UserController.getUserByEmail);
UserRouter.put("/email", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.user.update), middleware_1.authRegularUser, controllers_1.UserController.updateUserByEmail);
UserRouter.put("/password", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.user.update), middleware_1.authRegularUser, controllers_1.UserController.updatePasswordUserByEmail);
UserRouter.post("/logout", controllers_1.UserController.logoutUser);
exports.default = UserRouter;
//# sourceMappingURL=user.router.js.map