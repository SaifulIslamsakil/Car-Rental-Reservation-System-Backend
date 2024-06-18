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
exports.CarService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const Car_model_1 = require("./Car.model");
const CarBooking_model_1 = require("../CarBooking/CarBooking.model");
const Car_utils_1 = require("./Car.utils");
const createCarIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Car_model_1.CarModel.create(payload);
    return result;
});
const getAllCarFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Car_model_1.CarModel.find();
    return result;
});
const getSingelCarFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Car_model_1.CarModel.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "car is not exists");
    }
    return result;
});
const deleteCarFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Car_model_1.CarModel.findByIdAndUpdate(id, {
        isDeleted: true
    }, {
        new: true
    });
    return result;
});
const updateCarIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const carUpdate = yield Car_model_1.CarModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return carUpdate;
});
const carReturn = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { endTime, bookingId } = payload;
    const carBookingData = yield CarBooking_model_1.CarBookingModel.findById(bookingId);
    if (!carBookingData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "car booking is not found");
    }
    const CarData = yield Car_model_1.CarModel.findById(carBookingData === null || carBookingData === void 0 ? void 0 : carBookingData.car);
    if (!CarData || CarData.status === "available") {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "car booking is not found");
    }
    const startTime = (0, Car_utils_1.convartTimeTohours)(carBookingData === null || carBookingData === void 0 ? void 0 : carBookingData.startTime);
    const endsTime = (0, Car_utils_1.convartTimeTohours)(payload === null || payload === void 0 ? void 0 : payload.endTime);
    if (startTime > endsTime) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "your end time must be big to start time");
    }
    if (endsTime > 24) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "your end time is invalid please input valid hours");
    }
    const totalCost = Number(((endsTime - startTime) * 10).toFixed(2));
    if (totalCost < 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, " your end time must be big to start time");
    }
    const updateDate = {
        endTime,
        totalCost
    };
    const updateCarBookingData = yield CarBooking_model_1.CarBookingModel.findByIdAndUpdate(bookingId, updateDate, {
        new: true
    });
    if (!updateCarBookingData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, " your booking car is not updated");
    }
    const updateCar = yield Car_model_1.CarModel.findByIdAndUpdate(carBookingData.car, {
        status: "available"
    }, {
        new: true
    });
    if (!updateCar) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, " your  car is not updated");
    }
    return updateCarBookingData;
});
exports.CarService = {
    carReturn,
    createCarIntoDB,
    getAllCarFormDB,
    getSingelCarFormDB,
    deleteCarFormDB,
    updateCarIntoDB,
};
