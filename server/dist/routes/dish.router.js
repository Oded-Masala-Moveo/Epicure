"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const DishRouter = (0, express_1.Router)();
DishRouter.get("/", controllers_1.DishController.getAllDishes);
DishRouter.get("/:id", controllers_1.DishController.getDish);
DishRouter.get("/restaurant_dishes/:id", controllers_1.DishController.getDishByRestaurantId);
DishRouter.put("/:id", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.dish.update), controllers_1.DishController.updateDish);
DishRouter.post("/", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.dish.create), controllers_1.DishController.addDish);
DishRouter.post("/many", (0, middleware_1.ValidateObjectDataArray)([middleware_1.ValidationSchemas.dish.create]), controllers_1.DishController.addManyDishes);
DishRouter.delete("/:id", controllers_1.DishController.deleteDish);
exports.default = DishRouter;
//# sourceMappingURL=dish.router.js.map