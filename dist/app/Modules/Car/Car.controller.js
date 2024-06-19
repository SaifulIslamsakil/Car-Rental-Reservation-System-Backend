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
exports.CarController = void 0;
const Car_service_1 = require("./Car.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../Utiles/catchAsync"));
const SendResponse_1 = require("../../Utiles/SendResponse");
const createCar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const result = yield Car_service_1.CarService.createCarIntoDB(body);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Car created successfully",
        data: result
    });
}));
const getAllCar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Car_service_1.CarService.getAllCarFormDB();
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Cars retrieved successfully",
        data: result
    });
}));
const getSingelCar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { carId } = req.params;
    const result = yield Car_service_1.CarService.getSingelCarFormDB(carId);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "A Car retrieved successfully",
        data: result
    });
}));
const deleteCar = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { carId } = req.params;
    const result = yield Car_service_1.CarService.deleteCarFormDB(carId);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Car deleted successfully",
        data: result
    });
}));
const returnAndUpdate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const path = (req === null || req === void 0 ? void 0 : req.path) === "/return";
    if (path) {
        const result = yield Car_service_1.CarService.carReturn(req === null || req === void 0 ? void 0 : req.body);
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "Car returned successfully",
            data: result
        });
    }
    else {
        const { carId } = req.params;
        const result = yield Car_service_1.CarService.updateCarIntoDB(carId, req === null || req === void 0 ? void 0 : req.body);
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "Car updated successfully",
            data: result
        });
    }
}));
exports.CarController = {
    createCar,
    getSingelCar,
    getAllCar,
    deleteCar,
    returnAndUpdate
};
