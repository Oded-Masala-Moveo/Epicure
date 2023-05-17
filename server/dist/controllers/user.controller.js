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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("../handlers");
const exceptions_1 = require("../exceptions");
class UserController {
    static getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield handlers_1.UserHandler.getAllUsers();
                const usersWithoutPassword = users.map(user => {
                    const _a = user.toObject(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
                    return userWithoutPassword;
                });
                res.status(exceptions_1.HttpStatusCode.OK).send(usersWithoutPassword);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getUserByEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                const user = yield handlers_1.UserHandler.getUserByEmail(email);
                if (!user) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                const _a = user.toObject(), { password, isAdmin } = _a, userData = __rest(_a, ["password", "isAdmin"]);
                res.status(exceptions_1.HttpStatusCode.OK).send(userData);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static updateUserByEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { email } = _a, changeData = __rest(_a, ["email"]);
                const data = yield handlers_1.UserHandler.updateUserByEmail(email, changeData);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send({
                    res_message: exceptions_1.HttpErrorMessage.OK,
                    data,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static updatePasswordUserByEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { email } = _a, changeData = __rest(_a, ["email"]);
                const data = yield handlers_1.UserHandler.updatePasswordUserByEmail(email, changeData);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send({
                    res_message: exceptions_1.HttpErrorMessage.OK,
                    data,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.UserHandler.deleteUser(req.params.id);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send({
                    res_message: exceptions_1.HttpErrorMessage.OK,
                    data,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static registerUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token, user } = yield handlers_1.UserHandler.registerUser(req.body);
                const _a = user.toObject(), { password, isAdmin } = _a, userData = __rest(_a, ["password", "isAdmin"]);
                req.session.user = user;
                res
                    .status(exceptions_1.HttpStatusCode.CREATED)
                    .header("Authorization", `Bearer ${token}`)
                    .send({
                    res_message: exceptions_1.HttpErrorMessage.CREATED,
                    userData,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static loginUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                const reqPassword = req.body.password;
                const { token, user } = yield handlers_1.UserHandler.loginUser(email, reqPassword);
                const _a = user.toObject(), { password, isAdmin } = _a, userData = __rest(_a, ["password", "isAdmin"]);
                req.session.user = user;
                res
                    .status(exceptions_1.HttpStatusCode.OK)
                    .header("Authorization", `Bearer ${token}`)
                    .send({
                    res_message: exceptions_1.HttpErrorMessage.OK,
                    userData,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static logoutUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.session.destroy();
                res.header("Authorization", "");
                res.status(exceptions_1.HttpStatusCode.OK).send({
                    res_message: exceptions_1.HttpErrorMessage.OK,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map