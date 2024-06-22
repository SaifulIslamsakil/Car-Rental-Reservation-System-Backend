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
const mongoose_1 = __importDefault(require("mongoose"));
const createCarBookingIntoDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    payload.user = userId;
    const carData = yield Car_model_1.CarModel.findById(payload === null || payload === void 0 ? void 0 : payload.car);
    if (!carData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "car is not exists");
    }
    if (carData.status === "not available") {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "this car is not available please booked another car");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const update = yield Car_model_1.CarModel.findByIdAndUpdate(payload === null || payload === void 0 ? void 0 : payload.car, {
            status: "not available"
        }, {
            new: true,
            session
        });
        if (!update) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "car is not updated");
        }
        const result = yield CarBooking_model_1.CarBookingModel.create([payload], { session });
        if (!result[0]) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "car booking is not successfull");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return (yield result[0].populate("user")).populate("car");
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "faild to transaction");
    }
});
const getAllCarBookingFormDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { carId, date } = payload;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const query = {};
    if (carId)
        query.car = carId;
    if (!dateRegex.test(date)) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "'Date format must be yyyy-mm-dd");
    }
    if (date)
        query.date = date;
    const bookings = yield CarBooking_model_1.CarBookingModel.find(query).populate("user").populate('car');
    if (!bookings.length) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Car booking does not exist");
    }
    return bookings;
});
const getMyAllBookingsFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield CarBooking_model_1.CarBookingModel.find({ user: id }).populate("user").populate("car");
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "user is not exists");
    }
    return result;
});
exports.CarBookingService = {
    createCarBookingIntoDB,
    getAllCarBookingFormDB,
    getMyAllBookingsFormDB
};
