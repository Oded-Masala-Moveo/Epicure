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
const handlers_1 = require("../handlers");
const exceptions_1 = require("../exceptions");
class RestaurantController {
    static getAllRestaurants(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.getAllRestaurants();
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.getRestaurant(req.params.id);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getRestaurantByChefId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.getRestaurantByChefId(req.params.id);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static updateRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.updateRestaurant(req.params.id, req.body);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send({ res_message: exceptions_1.HttpErrorMessage.OK, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static addRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.addRestaurant(req.body);
                res.status(exceptions_1.HttpStatusCode.CREATED).send({ res_message: exceptions_1.HttpErrorMessage.CREATED, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static addManyRestaurants(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.addManyRestaurants(req.body);
                res.status(exceptions_1.HttpStatusCode.CREATED).send({ res_message: exceptions_1.HttpErrorMessage.CREATED, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static deleteRestaurant(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.RestaurantHandler.deleteRestaurant(req.params.id);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res.status(exceptions_1.HttpStatusCode.OK).send({ res_message: exceptions_1.HttpErrorMessage.OK, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = RestaurantController;
//# sourceMappingURL=restaurant.controller.js.map