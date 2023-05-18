"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = exports.v1Router = exports.orderRouter = exports.userRouter = exports.searchRouter = exports.dishRouter = exports.restaurantRouter = exports.chefsRouter = void 0;
var chefs_router_1 = require("./chefs.router");
Object.defineProperty(exports, "chefsRouter", { enumerable: true, get: function () { return __importDefault(chefs_router_1).default; } });
var restaurant_router_1 = require("./restaurant.router");
Object.defineProperty(exports, "restaurantRouter", { enumerable: true, get: function () { return __importDefault(restaurant_router_1).default; } });
var dish_router_1 = require("./dish.router");
Object.defineProperty(exports, "dishRouter", { enumerable: true, get: function () { return __importDefault(dish_router_1).default; } });
var search_router_1 = require("./search.router");
Object.defineProperty(exports, "searchRouter", { enumerable: true, get: function () { return __importDefault(search_router_1).default; } });
var user_router_1 = require("./user.router");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return __importDefault(user_router_1).default; } });
var order_router_1 = require("./order.router");
Object.defineProperty(exports, "orderRouter", { enumerable: true, get: function () { return __importDefault(order_router_1).default; } });
var v1Router_1 = require("./api/V1/v1Router");
Object.defineProperty(exports, "v1Router", { enumerable: true, get: function () { return __importDefault(v1Router_1).default; } });
var apiRouter_1 = require("./api/apiRouter");
Object.defineProperty(exports, "apiRouter", { enumerable: true, get: function () { return __importDefault(apiRouter_1).default; } });
//# sourceMappingURL=index.js.map