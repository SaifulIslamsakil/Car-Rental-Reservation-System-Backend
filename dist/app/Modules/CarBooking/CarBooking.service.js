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
exports.CarBookingService = void 0;
const CarBooking_model_1 = require("./CarBooking.model");
const CarBooking_validation_1 = require("./CarBooking.validation");
const createCarBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = CarBooking_validation_1.CarBookingValidation.carBookingValidationSchema.parse(payload);
    console.log(validation);
    const result = yield CarBooking_model_1.CarBookingModel.create(payload);
    return result;
});
const getAllCarBookingFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield CarBooking_model_1.CarBookingModel.find();
    return result;
});
const getSingelCarBookingFormDB = (CarBookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield CarBooking_model_1.CarBookingModel.findById(CarBookingId);
    return result;
});
const deleteCarBookingFormDB = (CarBookingId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(CarBookingId);
});
const updateCarBookingFormDB = (CarBookingId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(CarBookingId, payload);
});
exports.CarBookingService = {
    createCarBookingIntoDB,
    getAllCarBookingFormDB,
    getSingelCarBookingFormDB,
    deleteCarBookingFormDB,
    updateCarBookingFormDB
};
