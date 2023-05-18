"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.restaurantSchema = {
    create: joi_1.default.object({
        name: joi_1.default.string().required(),
        chef: joi_1.default.string().required(),
        image: joi_1.default.string().required(),
        image2: joi_1.default.string(),
        chefId: joi_1.default.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
        address: joi_1.default.object({
            street: joi_1.default.string(),
            city: joi_1.default.string(),
            state: joi_1.default.string(),
            zip: joi_1.default.string(),
        }),
        phone: joi_1.default.string(),
        email: joi_1.default.string(),
        website: joi_1.default.string(),
        new: joi_1.default.boolean().default(false),
        open: joi_1.default.boolean().default(false),
        higherPrice: joi_1.default.number().required(),
        lowerPrice: joi_1.default.number().required(),
        rate: joi_1.default.number().required(),
    }),
    update: joi_1.default.object({
        name: joi_1.default.string(),
        chef: joi_1.default.string(),
        image: joi_1.default.string(),
        image2: joi_1.default.string(),
        chefId: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/),
        address: joi_1.default.object({
            street: joi_1.default.string(),
            city: joi_1.default.string(),
            state: joi_1.default.string(),
            zip: joi_1.default.string(),
        }),
        phone: joi_1.default.string(),
        email: joi_1.default.string(),
        website: joi_1.default.string(),
        new: joi_1.default.boolean(),
        open: joi_1.default.boolean(),
        higherPrice: joi_1.default.number(),
        lowerPrice: joi_1.default.number(),
        rate: joi_1.default.number(),
    }).min(1),
};
//# sourceMappingURL=restaurant.js.map