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
class SearchHandler {
    static searchAll(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield Promise.all([
                    name
                        ? models_1.Chefs.aggregate([
                            {
                                $match: {
                                    $or: [
                                        { fName: { $regex: `^${name}`, $options: "i" } },
                                        { lName: { $regex: `^${name}`, $options: "i" } },
                                        { fullName: { $regex: `^${name}`, $options: "i" } },
                                    ],
                                },
                            },
                        ])
                        : [],
                    name
                        ? models_1.Dishes.aggregate([
                            {
                                $lookup: {
                                    from: "restaurants",
                                    localField: "restId",
                                    foreignField: "_id",
                                    as: "restaurant",
                                },
                            },
                            {
                                $unwind: "$restaurant",
                            },
                            {
                                $match: {
                                    $or: [
                                        { name: { $regex: `^${name}`, $options: "i" } },
                                        {
                                            "restaurant.name": { $regex: `^${name}`, $options: "i" },
                                        },
                                    ],
                                },
                            },
                        ])
                        : [],
                    name
                        ? models_1.Restaurants.aggregate([
                            {
                                $match: {
                                    name: { $regex: `^${name}`, $options: "i" },
                                },
                            },
                        ])
                        : [],
                ]);
                return {
                    chefs: results[0],
                    dishes: results[1],
                    restaurants: results[2],
                };
            }
            catch (error) {
                console.error(`Error in searchAll method: ${error}`);
                throw error;
            }
        });
    }
    static searchChefs(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Chefs.aggregate([
                    {
                        $match: {
                            $or: [
                                { fName: { $regex: `^${name}`, $options: "i" } },
                                { lName: { $regex: `^${name}`, $options: "i" } },
                                { fullName: { $regex: `^${name}`, $options: "i" } },
                            ],
                        },
                    },
                ]);
            }
            catch (error) {
                console.error(`Error in searchChefs method: ${error}`);
                throw error;
            }
        });
    }
    static searchDishes(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Dishes.aggregate([
                    {
                        $lookup: {
                            from: "restaurants",
                            localField: "restId",
                            foreignField: "_id",
                            as: "restaurant",
                        },
                    },
                    {
                        $unwind: "$restaurant",
                    },
                    {
                        $match: {
                            $or: [
                                { name: { $regex: `^${name}`, $options: "i" } },
                                { "restaurant.name": { $regex: `^${name}`, $options: "i" } },
                            ],
                        },
                    },
                ]);
            }
            catch (error) {
                console.error(`Error in searchDishes method: ${error}`);
                throw error;
            }
        });
    }
    static searchRestaurants(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Restaurants.aggregate([
                    {
                        $match: {
                            name: { $regex: `^${name}`, $options: "i" },
                        },
                    },
                ]);
            }
            catch (error) {
                console.error(`Error in searchRestaurants method: ${error}`);
                throw error;
            }
        });
    }
}
exports.default = SearchHandler;
//# sourceMappingURL=Search.handler.js.map