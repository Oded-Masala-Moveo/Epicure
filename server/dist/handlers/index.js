"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHandler = exports.UserHandler = exports.SearchHandler = exports.DishHandler = exports.RestaurantHandler = exports.ChefHandler = void 0;
var Chef_handler_1 = require("./Chef.handler");
Object.defineProperty(exports, "ChefHandler", { enumerable: true, get: function () { return __importDefault(Chef_handler_1).default; } });
var restaurant_handler_1 = require("./restaurant.handler");
Object.defineProperty(exports, "RestaurantHandler", { enumerable: true, get: function () { return __importDefault(restaurant_handler_1).default; } });
var Dishes_handler_1 = require("./Dishes.handler");
Object.defineProperty(exports, "DishHandler", { enumerable: true, get: function () { return __importDefault(Dishes_handler_1).default; } });
var Search_handler_1 = require("./Search.handler");
Object.defineProperty(exports, "SearchHandler", { enumerable: true, get: function () { return __importDefault(Search_handler_1).default; } });
var User_handler_1 = require("./User.handler");
Object.defineProperty(exports, "UserHandler", { enumerable: true, get: function () { return __importDefault(User_handler_1).default; } });
var Order_handler_1 = require("./Order.handler");
Object.defineProperty(exports, "OrderHandler", { enumerable: true, get: function () { return __importDefault(Order_handler_1).default; } });
//# sourceMappingURL=index.js.map