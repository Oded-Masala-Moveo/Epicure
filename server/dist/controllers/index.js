"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = exports.UserController = exports.SearchController = exports.DishController = exports.RestaurantController = exports.ChefController = void 0;
var chef_controller_1 = require("./chef.controller");
Object.defineProperty(exports, "ChefController", { enumerable: true, get: function () { return __importDefault(chef_controller_1).default; } });
var restaurant_controller_1 = require("./restaurant.controller");
Object.defineProperty(exports, "RestaurantController", { enumerable: true, get: function () { return __importDefault(restaurant_controller_1).default; } });
var dish_controller_1 = require("./dish.controller");
Object.defineProperty(exports, "DishController", { enumerable: true, get: function () { return __importDefault(dish_controller_1).default; } });
var search_controller_1 = require("./search.controller");
Object.defineProperty(exports, "SearchController", { enumerable: true, get: function () { return __importDefault(search_controller_1).default; } });
var user_controller_1 = require("./user.controller");
Object.defineProperty(exports, "UserController", { enumerable: true, get: function () { return __importDefault(user_controller_1).default; } });
var order_controller_1 = require("./order.controller");
Object.defineProperty(exports, "orderController", { enumerable: true, get: function () { return __importDefault(order_controller_1).default; } });
//# sourceMappingURL=index.js.map