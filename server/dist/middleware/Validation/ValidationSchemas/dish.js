"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.dishSchema = {
    create: joi_1.default.object({
        restId: joi_1.default.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
        name: joi_1.default.string().required(),
        description: joi_1.default.string(),
        price: joi_1.default.number().required(),
        quantity: joi_1.default.number(),
        image: joi_1.default.string().required(),
        side: joi_1.default.array().items(joi_1.default.string()),
        changesOptions: joi_1.default.array().items(joi_1.default.string()),
        category: joi_1.default.array().items(joi_1.default.string().valid("Spicy", "Vegetarian", "Vegan")),
        mealTime: joi_1.default.string().valid("Breakfast", "Lunch", "Dinner"),
        subcategory: joi_1.default.string(),
    }),
    update: joi_1.default.object({
        restId: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/),
        name: joi_1.default.string(),
        description: joi_1.default.string(),
        price: joi_1.default.number(),
        quantity: joi_1.default.number(),
        image: joi_1.default.string(),
        side: joi_1.default.array().items(joi_1.default.string()),
        changesOptions: joi_1.default.array().items(joi_1.default.string()),
        category: joi_1.default.array().items(joi_1.default.string().valid("Spicy", "Vegetarian", "Vegan")),
        mealTime: joi_1.default.string().valid("Breakfast", "Lunch", "Dinner"),
        subcategory: joi_1.default.string(),
    }).min(1),
};
//# sourceMappingURL=dish.js.map