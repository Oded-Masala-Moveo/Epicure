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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const exceptions_1 = require("../exceptions");
class UserHandler {
    static registerUser(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield models_1.Users.findOne({ email: obj.email });
                if (existingUser) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                }
                const hashedPassword = yield bcrypt_1.default.hash(obj.password, 10);
                const newUser = new models_1.Users({
                    userName: obj.userName,
                    email: obj.email,
                    password: hashedPassword,
                    avatar: obj.avatar,
                    isAdmin: obj.isAdmin,
                    createdAt: obj.createdAt,
                    updatedAt: obj.updatedAt,
                });
                const savedUser = yield newUser.save();
                const token = jsonwebtoken_1.default.sign({ userId: savedUser._id, isAdmin: savedUser.isAdmin }, process.env.JWT_SECRET, {
                    expiresIn: "1d",
                });
                return { user: savedUser, token };
            }
            catch (error) {
                console.error(`Error in registerUser method: ${error}`);
                throw error;
            }
        });
    }
    static loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.Users.findOne({ email: email });
                if (!user) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                const isMatch = yield bcrypt_1.default.compare(password, user.password);
                if (!isMatch) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.UNAUTHORIZED, exceptions_1.HttpErrorMessage.UNAUTHORIZED);
                }
                const token = jsonwebtoken_1.default.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
                    expiresIn: "1d",
                });
                return { user, token };
            }
            catch (error) {
                console.error(`Error in loginUser method: ${error}`);
                throw error;
            }
        });
    }
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Users.find({});
            }
            catch (error) {
                console.error(`Error in getAllUsers method: ${error}`);
                throw error;
            }
        });
    }
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Users.findOne({ email: email });
            }
            catch (error) {
                console.error(`Error in getUserByEmail method: ${error}`);
                throw error;
            }
        });
    }
    static updateUserByEmail(email, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(email)) {
                    throw new Error("Invalid email format");
                }
                if (obj.password)
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.BAD_REQUEST, exceptions_1.HttpErrorMessage.BAD_REQUEST);
                return yield models_1.Users.findOneAndUpdate({ email }, obj);
            }
            catch (error) {
                console.error(`Error in updateUserByEmail method: ${error}`);
                throw error;
            }
        });
    }
    static updatePasswordUserByEmail(email, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(email)) {
                    throw new Error("Invalid email format");
                }
                const hashedPassword = yield bcrypt_1.default.hash(obj.password, 10);
                obj.password = hashedPassword;
                return yield models_1.Users.findOneAndUpdate({ email }, obj);
            }
            catch (error) {
                console.error(`Error in updateUserByEmail method: ${error}`);
                throw error;
            }
        });
    }
    static deleteUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Users.findOneAndDelete({ email: email });
            }
            catch (error) {
                console.error(`Error in deleteUser method: ${error}`);
                throw error;
            }
        });
    }
}
exports.default = UserHandler;
//# sourceMappingURL=User.handler.js.map