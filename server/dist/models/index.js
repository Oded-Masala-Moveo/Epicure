"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = exports.Users = exports.Dishes = exports.Restaurants = exports.Chefs = void 0;
var ChefsSchema_1 = require("./ChefsSchema");
Object.defineProperty(exports, "Chefs", { enumerable: true, get: function () { return __importDefault(ChefsSchema_1).default; } });
var RestaurantSchema_1 = require("./RestaurantSchema");
Object.defineProperty(exports, "Restaurants", { enumerable: true, get: function () { return __importDefault(RestaurantSchema_1).default; } });
var DishSchema_1 = require("./DishSchema");
Object.defineProperty(exports, "Dishes", { enumerable: true, get: function () { return __importDefault(DishSchema_1).default; } });
var UserSchema_1 = require("./UserSchema");
Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return __importDefault(UserSchema_1).default; } });
var OrderSchema_1 = require("./OrderSchema");
Object.defineProperty(exports, "Orders", { enumerable: true, get: function () { return __importDefault(OrderSchema_1).default; } });
//# sourceMappingURL=index.js.map