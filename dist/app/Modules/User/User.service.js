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
const User_model_1 = require("./User.model");
const User_validation_1 = require("./User.validation");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = User_validation_1.userValidation.userValidationSchema.parse(payload);
    console.log({ validation });
    const result = yield User_model_1.UserModel.create(payload);
    return result;
});
exports.UserService = {
    createUserIntoDB
};
