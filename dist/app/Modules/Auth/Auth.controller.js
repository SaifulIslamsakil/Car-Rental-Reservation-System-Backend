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
exports.UserController = void 0;
const Auth_service_1 = require("./Auth.service");
const http_status_1 = __importDefault(require("http-status"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield Auth_service_1.UserService.createUserIntoDB(body);
        res.status(http_status_1.default.OK).json({
            success: true,
            messges: "user is created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Auth_service_1.UserService.getAllUserFormDB();
        res.status(http_status_1.default.OK).json({
            success: true,
            messges: "all user is resivied successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingelUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield Auth_service_1.UserService.getSingelUserFormDB(userId);
        res.status(http_status_1.default.OK).json({
            success: true,
            messges: "singel user is resivied successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deletedUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield Auth_service_1.UserService.deletedUserFormDb(userId);
        res.status(http_status_1.default.OK).json({
            success: true,
            messges: "user is deleted successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updatedUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const body = req.body;
        const result = yield Auth_service_1.UserService.updateUserIntoDB(userId, body);
        res.status(http_status_1.default.OK).json({
            success: true,
            messges: "user is deleted successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createUser,
    getAllUser,
    getSingelUser,
    deletedUser,
    updatedUser
};
