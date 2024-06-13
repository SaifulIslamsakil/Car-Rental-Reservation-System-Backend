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
exports.UserService = void 0;
const Auth_model_1 = require("./Auth.model");
const Auth_validation_1 = require("./Auth.validation");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = Auth_validation_1.userValidation.userValidationSchema.parse(payload);
    console.log({ validation });
    const result = yield Auth_model_1.UserModel.create(payload);
    return result;
});
const getAllUserFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Auth_model_1.UserModel.find();
    return result;
});
const getSingelUserFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Auth_model_1.UserModel.findById(id);
    // if (!result) {
    //     throw new Error("user in not exsist")
    // }
    return result;
});
const deletedUserFormDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Auth_model_1.UserModel.findByIdAndDelete(id);
    if (!result) {
        throw new Error("user in not exsist");
    }
    return result;
});
const updateUserIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, payload);
});
exports.UserService = {
    createUserIntoDB,
    getAllUserFormDB,
    getSingelUserFormDB,
    deletedUserFormDb,
    updateUserIntoDB
};
