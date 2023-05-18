"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("../handlers");
const exceptions_1 = require("../exceptions");
class OrderController {
    static getAllOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield handlers_1.OrderHandler.getAllOrders();
                res.status(exceptions_1.HttpStatusCode.OK).json(orders);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield handlers_1.OrderHandler.getOrder(req.params.id);
                if (!order) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).json(order);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getOrdersByUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield handlers_1.OrderHandler.getOrdersByUserId(req.params.userId);
                res.status(exceptions_1.HttpStatusCode.OK).json(orders);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getOrdersByRestaurantId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield handlers_1.OrderHandler.getOrdersByRestaurantId(req.params.restaurantId);
                res.status(exceptions_1.HttpStatusCode.OK).json(orders);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static updateOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedOrder = yield handlers_1.OrderHandler.updateOrder(req.params.id, req.body);
                if (!updatedOrder) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).json(updatedOrder);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static deleteOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedOrder = yield handlers_1.OrderHandler.deleteOrder(req.params.id);
                if (!deletedOrder) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).json(deletedOrder);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static addOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOrder = yield handlers_1.OrderHandler.addOrder(req.body);
                res.status(exceptions_1.HttpStatusCode.CREATED).json(newOrder);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = OrderController;
//# sourceMappingURL=order.controller.js.map