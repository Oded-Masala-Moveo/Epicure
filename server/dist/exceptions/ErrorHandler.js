"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.HttpError = void 0;
const exceptions_1 = require("../exceptions");
class HttpError extends Error {
    constructor(args) {
        super(args.message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.httpCode = args.httpCode;
        this.isOperational = args.isOperational || false;
    }
}
exports.HttpError = HttpError;
class ErrorHandler {
    static handleError(error, request, response, next) {
        const statusCode = error instanceof HttpError ? error.httpCode : exceptions_1.HttpStatusCode.INTERNAL_SERVER_ERROR;
        const errorMessage = error instanceof HttpError ? error.message : exceptions_1.HttpErrorMessage.INTERNAL_SERVER_ERROR;
        response.status(statusCode).json({ error: errorMessage });
    }
    static createHttpError(statusCode, message, isOperational) {
        return new HttpError({ httpCode: statusCode, message, isOperational });
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map