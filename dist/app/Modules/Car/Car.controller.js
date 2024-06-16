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
const createCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield Car_service_1.CarService.createCarIntoDB(body);
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "Car created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Car_service_1.CarService.getAllCarFormDB();
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "Cars retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingelCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield Car_service_1.CarService.getSingelCarFormDB(carId);
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "A Car retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield Car_service_1.CarService.deleteCarFormDB(carId);
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "Car  deleted successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { carId } = req.params;
        const result = yield Car_service_1.CarService.updateCarIntoDB(carId, body);
        res.status(http_status_1.default.OK).json({
            success: true,
            messeage: "Car updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CarController = {
    createCar,
    getSingelCar,
    getAllCar,
    deleteCar,
    updateCar
};
