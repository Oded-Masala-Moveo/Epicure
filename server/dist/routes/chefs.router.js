"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const chefRouter = (0, express_1.Router)();
chefRouter.get("/", controllers_1.ChefController.getAllChefs);
chefRouter.get("/:id", controllers_1.ChefController.getChef);
chefRouter.put("/:id", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.chef.update), controllers_1.ChefController.updateChef);
chefRouter.post("/", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.chef.create), controllers_1.ChefController.addChef);
chefRouter.post("/many", (0, middleware_1.ValidateObjectDataArray)([middleware_1.ValidationSchemas.chef.create]), controllers_1.ChefController.addManyChefs);
chefRouter.delete("/:id", controllers_1.ChefController.deleteChef);
exports.default = chefRouter;
//# sourceMappingURL=chefs.router.js.map