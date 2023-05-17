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
const models_1 = require("../models");
const mongoose_1 = require("mongoose");
const exceptions_1 = require("../exceptions");
class DishHandler {
    static getAllDishes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Dishes.find({});
            }
            catch (error) {
                console.error(`Error in getAllDishes method: ${error}`);
                throw error;
            }
        });
    }
    static getDish(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Dishes.findById(id);
            }
            catch (error) {
                console.error(`Error in getDish method: ${error}`);
                throw error;
            }
        });
    }
    static getDishByRestaurantId(restaurantId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Dishes.find({ restId: restaurantId });
            }
            catch (error) {
                console.error(`Error in getDishByRestaurantId method: ${error}`);
            }
        });
    }
    static updateDish(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Dishes.findByIdAndUpdate(id, obj);
            }
            catch (error) {
                console.error(`Error in updateDish method: ${error}`);
                throw error;
            }
        });
    }
    static deleteDish(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Dishes.findByIdAndRemove(id);
            }
            catch (error) {
                console.error(`Error in deleteDish method: ${error}`);
                throw error;
            }
        });
    }
    static addDish(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                obj.restId = obj.restId.toString();
                const existingDishes = yield models_1.Dishes.findOne({
                    name: obj.name,
                    restId: obj.restId,
                });
                if (existingDishes) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                }
                obj.restId = obj.restId.toString();
                const newDish = new models_1.Dishes({
                    restId: new mongoose_1.Types.ObjectId(obj.restId),
                    name: obj.name,
                    description: obj.description,
                    price: obj.price,
                    quantity: obj.quantity,
                    image: obj.image,
                    side: obj.side,
                    changesOptions: obj.changesOptions,
                    category: obj.category,
                    mealTime: obj.mealTime,
                    subcategory: obj.subcategory,
                    createdAt: obj.createdAt,
                    updatedAt: obj.updatedAt,
                });
                return yield newDish.save();
            }
            catch (error) {
                console.error(`Error in addDish method: ${error}`);
                throw error;
            }
        });
    }
    static addManyDishes(dishes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dishInstances = [];
                for (const dish of dishes) {
                    const existingDish = yield models_1.Dishes.findOne({
                        restId: dish.restId,
                        name: dish.name,
                    });
                    if (existingDish) {
                        throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                    }
                    dish.restId = dish.restId.toString();
                    const newDish = new models_1.Dishes({
                        restId: new mongoose_1.Types.ObjectId(dish.restId),
                        name: dish.name,
                        description: dish.description,
                        price: dish.price,
                        quantity: dish.quantity,
                        image: dish.image,
                        side: dish.side,
                        changesOptions: dish.changesOptions,
                        category: dish.category,
                        mealTime: dish.mealTime,
                        subcategory: dish.subcategory,
                        createdAt: dish.createdAt,
                        updatedAt: dish.updatedAt,
                    });
                    dishInstances.push(newDish);
                }
                return yield models_1.Dishes.insertMany(dishInstances);
            }
            catch (error) {
                console.error(`Error in addManyDishes method: ${error}`);
                throw error;
            }
        });
    }
}
exports.default = DishHandler;
//# sourceMappingURL=Dishes.handler.js.map