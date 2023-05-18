"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderItemSchema = new mongoose_1.Schema({
    dish: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "dishes" },
    quantity: { type: Number, required: true, min: 1 },
}, { _id: false });
const OrderSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "users" },
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "restaurants" },
    dishes: { type: [OrderItemSchema], required: true },
    totalAmount: { type: Number, required: true },
    address: { type: String, required: true },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed", "Cancelled"],
        required: true,
        default: "Pending",
    },
}, { versionKey: false, suppressReservedKeysWarning: true, timestamps: true });
const Orders = (0, mongoose_1.model)("orders", OrderSchema);
exports.default = Orders;
//# sourceMappingURL=OrderSchema.js.map