"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const RestaurantRouter = (0, express_1.Router)();
RestaurantRouter.get("/", controllers_1.RestaurantController.getAllRestaurants);
RestaurantRouter.get("/:id", controllers_1.RestaurantController.getRestaurant);
RestaurantRouter.get("/chef_restaurant/:id", controllers_1.RestaurantController.getRestaurantByChefId);
RestaurantRouter.put("/:id", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.restaurant.update), controllers_1.RestaurantController.updateRestaurant);
RestaurantRouter.post("/", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.restaurant.create), controllers_1.RestaurantController.addRestaurant);
RestaurantRouter.post("/many", (0, middleware_1.ValidateObjectDataArray)([middleware_1.ValidationSchemas.restaurant.create]), controllers_1.RestaurantController.addManyRestaurants);
RestaurantRouter.delete("/:id", controllers_1.RestaurantController.deleteRestaurant);
exports.default = RestaurantRouter;
//# sourceMappingURL=restaurant.router.js.map