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
class ChefController {
    static getAllChefs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.ChefHandler.getAllChefs();
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.ChefHandler.getChef(req.params.id);
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static updateChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.ChefHandler.updateChef(req.params.id, req.body);
                res.status(exceptions_1.HttpStatusCode.OK).send({ res_message: exceptions_1.HttpErrorMessage.OK, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static addChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.ChefHandler.addChef(req.body);
                res.status(exceptions_1.HttpStatusCode.CREATED).send({ res_message: exceptions_1.HttpErrorMessage.CREATED, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static addManyChefs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.ChefHandler.addManyChefs(req.body);
                res
                    .status(exceptions_1.HttpStatusCode.CREATED)
                    .send({ res_message: exceptions_1.HttpErrorMessage.CREATED, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static deleteChef(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.ChefHandler.deleteChef(req.params.id);
                res.status(exceptions_1.HttpStatusCode.OK).send({ res_message: exceptions_1.HttpErrorMessage.OK, data });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = ChefController;
//# sourceMappingURL=chef.controller.js.map