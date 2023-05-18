"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DishSchema = new mongoose_1.Schema({
    restId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "restaurants" },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    side: { type: [String], required: true },
    changesOptions: { type: [String], required: true },
    category: {
        type: [String],
        enum: ["Spicy", "Vegetarian", "Vegan"],
        validate: {
            validator: (value) => {
                return value.length <= 3;
            },
            message: "Category can have up to 3 values",
        },
        required: true,
    },
    mealTime: {
        type: String,
        enum: ["Breakfast", "Lunch", "Dinner"],
        required: true,
    },
    subcategory: { type: String },
}, { versionKey: false, suppressReservedKeysWarning: true, timestamps: true });
const Dishes = (0, mongoose_1.model)("dishes", DishSchema);
exports.default = Dishes;
//# sourceMappingURL=DishSchema.js.map