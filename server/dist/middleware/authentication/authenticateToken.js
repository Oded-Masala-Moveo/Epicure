"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminUser = exports.authRegularUser = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const exceptions_1 = require("../../exceptions");
const authenticateToken = (req, res, next, isAdmin = false) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return next(exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.UNAUTHORIZED, exceptions_1.HttpErrorMessage.UNAUTHORIZED));
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.FORBIDDEN, exceptions_1.HttpErrorMessage.FORBIDDEN));
        }
        const userData = user;
        if (isAdmin && !userData.isAdmin) {
            return next(exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.FORBIDDEN, exceptions_1.HttpErrorMessage.FORBIDDEN));
        }
        next();
    });
};
exports.authenticateToken = authenticateToken;
const authRegularUser = (req, res, next) => (0, exports.authenticateToken)(req, res, next);
exports.authRegularUser = authRegularUser;
const authAdminUser = (req, res, next) => (0, exports.authenticateToken)(req, res, next, true);
exports.authAdminUser = authAdminUser;
//# sourceMappingURL=authenticateToken.js.map