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
const mongoose_1 = require("mongoose");
const models_1 = require("../models");
const exceptions_1 = require("../exceptions");
function populateOrderFields(query) {
    return query.populate("user").populate("restaurant").populate("dishes.dish");
}
class OrderHandler {
    static getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield populateOrderFields(models_1.Orders.find({}));
            }
            catch (error) {
                console.error(`Error in getAllOrders method: ${error}`);
                throw error;
            }
        });
    }
    static getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield populateOrderFields(models_1.Orders.findById(id));
            }
            catch (error) {
                console.error(`Error in getOrder method: ${error}`);
                throw error;
            }
        });
    }
    static getOrdersByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield populateOrderFields(models_1.Orders.find({ user: userId }));
            }
            catch (error) {
                console.error(`Error in getOrdersByUserId method: ${error}`);
                throw error;
            }
        });
    }
    static getOrdersByRestaurantId(restaurantId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield populateOrderFields(models_1.Orders.find({ restaurant: restaurantId }));
            }
            catch (error) {
                console.error(`Error in getOrdersByRestaurantId method: ${error}`);
                throw error;
            }
        });
    }
    static updateOrder(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield populateOrderFields(models_1.Orders.findByIdAndUpdate(id, obj, { new: true }));
            }
            catch (error) {
                console.error(`Error in updateOrder method: ${error}`);
                throw error;
            }
        });
    }
    static deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Orders.findByIdAndRemove(id);
            }
            catch (error) {
                console.error(`Error in deleteOrder method: ${error}`);
                throw error;
            }
        });
    }
    static addOrder(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userPipeline = [
                    {
                        $match: {
                            _id: typeof obj.user === "string"
                                ? new mongoose_1.Types.ObjectId(obj.user)
                                : obj.user,
                        },
                    },
                ];
                const restaurantPipeline = [
                    {
                        $match: {
                            _id: typeof obj.restaurant === "string"
                                ? new mongoose_1.Types.ObjectId(obj.restaurant)
                                : obj.restaurant,
                        },
                    },
                ];
                const dishPipeline = [
                    {
                        $match: {
                            _id: {
                                $in: obj.dishes.map((item) => typeof item.dish === "string"
                                    ? new mongoose_1.Types.ObjectId(item.dish)
                                    : item.dish),
                            },
                        },
                    },
                ];
                const userResults = yield models_1.Users.aggregate(userPipeline);
                const restaurantResults = yield models_1.Restaurants.aggregate(restaurantPipeline);
                const dishResults = yield models_1.Dishes.aggregate(dishPipeline);
                if (userResults.length !== 1 ||
                    restaurantResults.length !== 1 ||
                    dishResults.length !== obj.dishes.length) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                const newOrder = new models_1.Orders({
                    user: obj.user,
                    restaurant: obj.restaurant,
                    dishes: obj.dishes,
                    totalAmount: obj.totalAmount,
                    address: obj.address,
                    status: obj.status,
                });
                return yield newOrder.save();
            }
            catch (error) {
                console.error(`Error in addOrder method: ${error}`);
                throw error;
            }
        });
    }
}
exports.default = OrderHandler;
//# sourceMappingURL=Order.handler.js.map