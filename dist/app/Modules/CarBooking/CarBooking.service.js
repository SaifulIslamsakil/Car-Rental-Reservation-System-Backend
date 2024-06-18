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
exports.CarBookingService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const Car_model_1 = require("../Car/Car.model");
const CarBooking_model_1 = require("./CarBooking.model");
const createCarBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.user = "666b0c2ffaaf672c6d918404";
    const carId = payload === null || payload === void 0 ? void 0 : payload.car;
    const carData = yield Car_model_1.CarModel.findById(carId);
    if (!carData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "car is not exists");
    }
    if (carData.status === "not available") {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "this car is not available please booked another car");
    }
    const update = yield Car_model_1.CarModel.findByIdAndUpdate(carId, {
        status: "not available"
    }, {
        new: true
    });
    const result = yield CarBooking_model_1.CarBookingModel.create(payload);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "car booking is not successfull");
    }
    return result;
});
const getAllCarBookingFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield CarBooking_model_1.CarBookingModel.find();
    return result;
});
exports.CarBookingService = {
    createCarBookingIntoDB,
    getAllCarBookingFormDB
};
