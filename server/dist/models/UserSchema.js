"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    isAdmin: { type: Boolean, default: false },
}, { versionKey: false, suppressReservedKeysWarning: true, timestamps: true });
const Users = (0, mongoose_1.model)("users", userSchema);
exports.default = Users;
//# sourceMappingURL=UserSchema.js.map