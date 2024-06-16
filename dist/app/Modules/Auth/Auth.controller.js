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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const Auth_service_1 = require("./Auth.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../Utiles/catchAsync"));
const Confiqe_1 = require("../../Confiqe");
const createUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const result = yield Auth_service_1.UserService.createUserIntoDB(body);
    res.status(http_status_1.default.OK).json({
        success: true,
        messges: "user is created successfully",
        data: result
    });
}));
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Auth_service_1.UserService.loginUser(req === null || req === void 0 ? void 0 : req.body);
    const { refareshToken } = result, responseData = __rest(result, ["refareshToken"]);
    res.cookie('refreshToken', refareshToken, {
        secure: Confiqe_1.Confiqe.Node_Env === "production",
        httpOnly: true
    });
    res.status(http_status_1.default.OK).json({
        success: true,
        messges: 'User is logged in succesfully!',
        data: responseData
    });
}));
const getAllUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Auth_service_1.UserService.getAllUserFormDB();
    res.status(http_status_1.default.OK).json({
        success: true,
        messges: "all user is resivied successfully",
        data: result
    });
}));
const getSingelUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield Auth_service_1.UserService.getSingelUserFormDB(userId);
    res.status(http_status_1.default.OK).json({
        success: true,
        messges: "singel user is resivied successfully",
        data: result
    });
}));
const deletedUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield Auth_service_1.UserService.deletedUserFormDb(userId);
    res.status(http_status_1.default.OK).json({
        success: true,
        messges: "user is deleted successfully",
        data: result
    });
}));
const updatedUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const body = req.body;
    const result = yield Auth_service_1.UserService.updateUserIntoDB(userId, body);
    res.status(http_status_1.default.OK).json({
        success: true,
        messges: "user is deleted successfully",
        data: result
    });
}));
exports.UserController = {
    createUser,
    getAllUser,
    getSingelUser,
    deletedUser,
    updatedUser,
    loginUser
};
