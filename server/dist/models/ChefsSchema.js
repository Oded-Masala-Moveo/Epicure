"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chefSchema = new mongoose_1.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    fullName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    weekChef: { type: Boolean, default: false },
    newChef: { type: Boolean, default: false },
    viewed: { type: Number, required: true },
}, { versionKey: false, suppressReservedKeysWarning: true, timestamps: true });
const ChefModel = (0, mongoose_1.model)("chefs", chefSchema);
exports.default = ChefModel;
//# sourceMappingURL=ChefsSchema.js.map