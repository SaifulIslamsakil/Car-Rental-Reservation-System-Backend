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
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const User_model_1 = require("./User.model");
const Confiqe_1 = require("../../Confiqe");
const User_utils_1 = require("./User.utils");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.UserModel.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.UserModel.findOne({
        email: payload === null || payload === void 0 ? void 0 : payload.email
    });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "This user is not found !");
    }
    const passwordMatched = yield User_model_1.UserModel.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, user === null || user === void 0 ? void 0 : user.password);
    if (!passwordMatched) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Password do not matched");
    }
    const jwtPayload = {
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role
    };
    const accressToken = (0, User_utils_1.createToken)(jwtPayload, Confiqe_1.Confiqe.Access_Secret, Confiqe_1.Confiqe.Accress_Expires);
    const refareshToken = (0, User_utils_1.createToken)(jwtPayload, Confiqe_1.Confiqe.Refaresh_Secret, Confiqe_1.Confiqe.Accress_Expires);
    return {
        user,
        token: accressToken,
        refareshToken
    };
});
exports.UserService = {
    createUserIntoDB,
    loginUser
};
