"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const OrderRouter = (0, express_1.Router)();
OrderRouter.get("/", middleware_1.authAdminUser, controllers_1.orderController.getAllOrders);
OrderRouter.get("/:id", middleware_1.authRegularUser, controllers_1.orderController.getOrder);
OrderRouter.get("/user/:userId", middleware_1.authRegularUser, controllers_1.orderController.getOrdersByUserId);
OrderRouter.get("/restaurant/:restaurantId", middleware_1.authRegularUser, controllers_1.orderController.getOrdersByRestaurantId);
OrderRouter.put("/:id", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.order.update), middleware_1.authRegularUser, controllers_1.orderController.updateOrder);
OrderRouter.post("/", (0, middleware_1.ValidateObjectData)(middleware_1.ValidationSchemas.order.create), middleware_1.authRegularUser, controllers_1.orderController.addOrder);
OrderRouter.delete("/:id", controllers_1.orderController.deleteOrder);
exports.default = OrderRouter;
//# sourceMappingURL=order.router.js.map