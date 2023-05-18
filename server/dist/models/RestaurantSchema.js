"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
});
const restaurantSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    chef: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String },
    chefId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "chefs" },
    address: addressSchema,
    phone: { type: String },
    email: { type: String },
    website: { type: String },
    new: { type: Boolean, default: false },
    open: { type: Boolean, default: false },
    higherPrice: { type: Number, required: true },
    lowerPrice: { type: Number, required: true },
    rate: { type: Number, required: true },
}, {
    versionKey: false,
    suppressReservedKeysWarning: true,
    timestamps: true,
});
const RestaurantModel = (0, mongoose_1.model)("restaurants", restaurantSchema);
exports.default = RestaurantModel;
//# sourceMappingURL=RestaurantSchema.js.map