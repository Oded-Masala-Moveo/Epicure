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
class SearchController {
    static searchAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.SearchHandler.searchAll(req.query.name);
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static searchChefs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.SearchHandler.searchChefs(req.query.name);
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static searchDishes(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.SearchHandler.searchDishes(req.query.name);
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static searchRestaurants(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield handlers_1.SearchHandler.searchRestaurants(req.query.name);
                res.status(exceptions_1.HttpStatusCode.OK).send(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = SearchController;
//# sourceMappingURL=search.controller.js.map