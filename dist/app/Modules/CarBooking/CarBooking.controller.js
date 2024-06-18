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
exports.CarBookingControllers = void 0;
const CarBooking_service_1 = require("./CarBooking.service");
const http_status_1 = __importDefault(require("http-status"));
const createCarBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield CarBooking_service_1.CarBookingService.createCarBookingIntoDB(req === null || req === void 0 ? void 0 : req.body);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: "car booking in created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllCarBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield CarBooking_service_1.CarBookingService.getAllCarBookingFormDB();
        res.status(http_status_1.default.OK).json({
            success: true,
            message: "all car booking is resivied  successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CarBookingControllers = {
    createCarBooking,
    getAllCarBooking,
};
