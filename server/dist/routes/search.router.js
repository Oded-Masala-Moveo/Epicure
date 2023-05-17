"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const searchRouter = (0, express_1.Router)();
searchRouter.get("/", controllers_1.SearchController.searchAll);
searchRouter.get("/chefs", controllers_1.SearchController.searchChefs);
searchRouter.get("/dishes", controllers_1.SearchController.searchDishes);
searchRouter.get("/restaurants", controllers_1.SearchController.searchRestaurants);
exports.default = searchRouter;
//# sourceMappingURL=search.router.js.map