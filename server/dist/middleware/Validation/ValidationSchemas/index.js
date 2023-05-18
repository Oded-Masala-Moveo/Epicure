"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationSchemas = exports.orderSchema = exports.userSchema = exports.dishSchema = exports.restaurantSchema = exports.chefsSchema = void 0;
var chef_1 = require("./chef");
Object.defineProperty(exports, "chefsSchema", { enumerable: true, get: function () { return chef_1.chefsSchema; } });
var restaurant_1 = require("./restaurant");
Object.defineProperty(exports, "restaurantSchema", { enumerable: true, get: function () { return restaurant_1.restaurantSchema; } });
var dish_1 = require("./dish");
Object.defineProperty(exports, "dishSchema", { enumerable: true, get: function () { return dish_1.dishSchema; } });
var user_1 = require("./user");
Object.defineProperty(exports, "userSchema", { enumerable: true, get: function () { return user_1.userSchema; } });
var order_1 = require("./order");
Object.defineProperty(exports, "orderSchema", { enumerable: true, get: function () { return order_1.orderSchema; } });
var SchemasCollector_1 = require("./SchemasCollector");
Object.defineProperty(exports, "ValidationSchemas", { enumerable: true, get: function () { return SchemasCollector_1.ValidationSchemas; } });
//# sourceMappingURL=index.js.map