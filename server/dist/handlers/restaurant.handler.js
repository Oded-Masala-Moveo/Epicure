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
class RestaurantHandler {
    static getAllRestaurants() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Restaurants.find({});
            }
            catch (error) {
                console.error(`Error in getAllRestaurants method: ${error}`);
                throw error;
            }
        });
    }
    static getRestaurant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Restaurants.findById(id);
            }
            catch (error) {
                console.error(`Error in getRestaurant method: ${error}`);
                throw error;
            }
        });
    }
    static getRestaurantByChefId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Restaurants.find({ chefId: id });
            }
            catch (error) {
                console.error(`Error in getRestaurantByChefId method: ${error}`);
            }
        });
    }
    static updateRestaurant(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Restaurants.findByIdAndUpdate(id, obj);
            }
            catch (error) {
                console.error(`Error in updateRestaurant method: ${error}`);
                throw error;
            }
        });
    }
    static deleteRestaurant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Restaurants.findByIdAndRemove(id);
            }
            catch (error) {
                console.error(`Error in deleteRestaurant method: ${error}`);
                throw error;
            }
        });
    }
    static addManyRestaurants(restaurants) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const restaurantInstances = [];
                for (const restaurant of restaurants) {
                    const existingRestaurant = yield models_1.Restaurants.findOne({
                        name: restaurant.name,
                        chefId: restaurant.chefId,
                    });
                    if (existingRestaurant) {
                        throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                    }
                    restaurant.chefId = restaurant.chefId.toString();
                    const newRestaurant = new models_1.Restaurants({
                        name: restaurant.name,
                        chef: restaurant.chef,
                        image: restaurant.image,
                        image2: restaurant.image2,
                        chefId: new mongoose_1.Types.ObjectId(restaurant.chefId),
                        address: restaurant.address,
                        phone: restaurant.phone,
                        email: restaurant.email,
                        website: restaurant.website,
                        createdAt: restaurant.createdAt,
                        new: restaurant.new,
                        open: restaurant.open,
                        higherPrice: restaurant.higherPrice,
                        lowerPrice: restaurant.lowerPrice,
                        rate: restaurant.rate,
                    });
                    restaurantInstances.push(newRestaurant);
                }
                return yield models_1.Restaurants.insertMany(restaurantInstances);
            }
            catch (error) {
                console.error(`Error in addManyRestaurants method: ${error}`);
                throw error;
            }
        });
    }
    static addRestaurant(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                obj.chefId = obj.chefId.toString();
                const existingRestaurant = yield models_1.Restaurants.findOne({
                    name: obj.name,
                    chefId: obj.chefId,
                });
                if (existingRestaurant) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                }
                obj.chefId = obj.chefId.toString();
                const newRestaurant = new models_1.Restaurants({
                    name: obj.name,
                    chef: obj.chef,
                    image: obj.image,
                    image2: obj.image2,
                    chefId: new mongoose_1.Types.ObjectId(obj.chefId),
                    address: obj.address,
                    phone: obj.phone,
                    email: obj.email,
                    website: obj.website,
                    createdAt: obj.createdAt,
                    new: obj.new,
                    open: obj.open,
                    higherPrice: obj.higherPrice,
                    lowerPrice: obj.lowerPrice,
                    rate: obj.rate,
                });
                return yield newRestaurant.save();
            }
            catch (error) {
                console.error(`Error in addRestaurant method: ${error}`);
                throw error;
            }
        });
    }
}
exports.default = RestaurantHandler;
//# sourceMappingURL=restaurant.handler.js.map