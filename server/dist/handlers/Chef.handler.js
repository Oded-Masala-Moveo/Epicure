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
const exceptions_1 = require("../exceptions");
const models_1 = require("../models");
class ChefHandler {
    static getAllChefs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Chefs.find({});
            }
            catch (error) {
                console.error(`Error in getAllChefs method: ${error}`);
                throw error;
            }
        });
    }
    static getChef(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Chefs.findById(id);
            }
            catch (error) {
                console.error(`Error in getChef method: ${error}`);
                throw error;
            }
        });
    }
    static updateChef(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Chefs.findByIdAndUpdate(id, obj);
            }
            catch (error) {
                console.error(`Error in updateChef method: ${error}`);
                throw error;
            }
        });
    }
    static deleteChef(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Chefs.findByIdAndRemove(id);
            }
            catch (error) {
                console.error(`Error in deleteChef method: ${error}`);
                throw error;
            }
        });
    }
    static addManyChefs(chefs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chefInstances = [];
                for (const chef of chefs) {
                    const existingChef = yield models_1.Chefs.findOne({
                        fName: chef.fName,
                        lName: chef.lName
                    });
                    if (existingChef) {
                        throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                    }
                    const newChef = new models_1.Chefs({
                        fName: chef.fName,
                        lName: chef.lName,
                        fullName: chef.fullName,
                        description: chef.description,
                        image: chef.image,
                        weekChef: chef.weekChef,
                        newChef: chef.newChef,
                        viewed: chef.viewed,
                    });
                    chefInstances.push(newChef);
                }
                return yield models_1.Chefs.insertMany(chefInstances);
            }
            catch (error) {
                console.error(`Error in addManyChefs method: ${error}`);
                throw error;
            }
        });
    }
    static addChef(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingChef = yield models_1.Chefs.findOne({
                    fName: obj.fName,
                    lName: obj.lName
                });
                if (existingChef) {
                    throw exceptions_1.ErrorHandler.createHttpError(exceptions_1.HttpStatusCode.NOT_ACCEPTABLE, exceptions_1.HttpErrorMessage.NOT_ACCEPTABLE);
                }
                const newChef = new models_1.Chefs({
                    fName: obj.fName,
                    lName: obj.lName,
                    fullName: obj.fullName,
                    description: obj.description,
                    image: obj.image,
                    weekChef: obj.weekChef,
                    newChef: obj.newChef,
                    viewed: obj.viewed,
                });
                return yield newChef.save();
            }
            catch (error) {
                console.error(`Error in addChef method: ${error}`);
                throw error;
            }
        });
    }
}
exports.default = ChefHandler;
//# sourceMappingURL=Chef.handler.js.map