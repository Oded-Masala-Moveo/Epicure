"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../../../routes");
const v1Router = express_1.default.Router();
v1Router.use("/chef", routes_1.chefsRouter);
v1Router.use("/restaurant", routes_1.restaurantRouter);
v1Router.use("/dish", routes_1.dishRouter);
v1Router.use("/search", routes_1.searchRouter);
v1Router.use("/user", routes_1.userRouter);
v1Router.use("/order", routes_1.orderRouter);
exports.default = v1Router;
//# sourceMappingURL=v1Router.js.map