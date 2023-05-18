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
class DishController {
    static getAllDishes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.DishHandler.getAllDishes();
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.DishHandler.getDish(req.params.id);
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
    static getDishByRestaurantId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.DishHandler.getDishByRestaurantId(req.params.id);
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
    static updateDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.DishHandler.updateDish(req.params.id, req.body);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res
                    .status(exceptions_1.HttpStatusCode.OK)
                    .send({ res_message: exceptions_1.HttpErrorMessage.OK, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static addDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.DishHandler.addDish(req.body);
                res
                    .status(exceptions_1.HttpStatusCode.CREATED)
                    .send({ res_message: exceptions_1.HttpErrorMessage.CREATED, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static addManyDishes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dishes = req.body;
                const data = yield handlers_1.DishHandler.addManyDishes(dishes);
                res
                    .status(exceptions_1.HttpStatusCode.CREATED)
                    .send({ res_message: exceptions_1.HttpErrorMessage.CREATED, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static deleteDish(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.DishHandler.deleteDish(req.params.id);
                if (!data) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_FOUND, exceptions_1.HttpErrorMessage.NOT_FOUND);
                }
                res
                    .status(exceptions_1.HttpStatusCode.OK)
                    .send({ res_message: exceptions_1.HttpErrorMessage.OK, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = DishController;
//# sourceMappingURL=dish.controller.js.map