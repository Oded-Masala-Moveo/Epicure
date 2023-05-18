"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const orderItemSchema = joi_1.default.object({
    dish: joi_1.default.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    quantity: joi_1.default.number().min(1).required(),
});
exports.orderSchema = {
    create: joi_1.default.object({
        user: joi_1.default.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
        restaurant: joi_1.default.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
        dishes: joi_1.default.array().items(orderItemSchema).required(),
        totalAmount: joi_1.default.number().required(),
        address: joi_1.default.string().required(),
        status: joi_1.default.string().valid("Pending", "In Progress", "Completed", "Cancelled"),
    }),
    update: joi_1.default.object({
        user: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/),
        restaurant: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/),
        dishes: joi_1.default.array().items(orderItemSchema),
        totalAmount: joi_1.default.number(),
        address: joi_1.default.string(),
        status: joi_1.default.string().valid("Pending", "In Progress", "Completed", "Cancelled"),
    }).min(1),
};
//# sourceMappingURL=order.js.map