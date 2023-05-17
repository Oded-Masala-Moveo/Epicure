"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_!@#$%^&*]).{8,}$/;
exports.userSchema = {
    create: joi_1.default.object({
        userName: joi_1.default.string().required(),
        email: joi_1.default.string().email().regex(emailRegex).required(),
        password: joi_1.default.string().regex(passwordRegex).required(),
        avatar: joi_1.default.string(),
        isAdmin: joi_1.default.boolean().default(false),
    }),
    update: joi_1.default.object({
        userName: joi_1.default.string(),
        email: joi_1.default.string().email(),
        password: joi_1.default.string(),
        avatar: joi_1.default.string(),
        isAdmin: joi_1.default.boolean(),
    }).min(1),
};
//# sourceMappingURL=user.js.map