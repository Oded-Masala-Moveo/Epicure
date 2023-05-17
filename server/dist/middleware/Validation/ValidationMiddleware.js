"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateObjectDataArray = exports.ValidateObjectData = void 0;
const exceptions_1 = require("../../exceptions");
const ValidateObjectData = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            console.log(error, "error with validation");
            return res
                .status(exceptions_1.HttpStatusCode.UNPROCESSABLE_ENTITY)
                .json({ message: exceptions_1.HttpErrorMessage.UNPROCESSABLE_ENTITY, error });
        }
    });
};
exports.ValidateObjectData = ValidateObjectData;
const ValidateObjectDataArray = (schemas) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            for (const obj of req.body) {
                const schema = schemas[req.body.indexOf(obj)];
                if (schema) {
                    yield schema.validateAsync(obj);
                }
            }
            next();
        }
        catch (error) {
            console.log(error, "error with validation");
            return res
                .status(exceptions_1.HttpStatusCode.UNPROCESSABLE_ENTITY)
                .json({ message: exceptions_1.HttpErrorMessage.UNPROCESSABLE_ENTITY, error });
        }
    });
};
exports.ValidateObjectDataArray = ValidateObjectDataArray;
//# sourceMappingURL=ValidationMiddleware.js.map