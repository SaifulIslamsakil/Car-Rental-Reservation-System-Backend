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
    const update = yield Car_model_1.CarModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return update;
});
exports.CarService = {
    createCarIntoDB,
    getAllCarFormDB,
    getSingelCarFormDB,
    deleteCarFormDB,
    updateCarIntoDB
};
