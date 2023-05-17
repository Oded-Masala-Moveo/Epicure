"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.chefsSchema = {
    create: joi_1.default.object({
        fName: joi_1.default.string().required(),
        lName: joi_1.default.string().required(),
        fullName: joi_1.default.string().required(),
        image: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        weekChef: joi_1.default.boolean().default(false),
        newChef: joi_1.default.boolean().default(false),
        viewed: joi_1.default.number().required(),
    }),
    update: joi_1.default.object({
        fName: joi_1.default.string(),
        lName: joi_1.default.string(),
        fullName: joi_1.default.string(),
        image: joi_1.default.string(),
        description: joi_1.default.string(),
        weekChef: joi_1.default.boolean(),
        newChef: joi_1.default.boolean(),
        viewed: joi_1.default.number(),
    }),
};
//# sourceMappingURL=chef.js.map