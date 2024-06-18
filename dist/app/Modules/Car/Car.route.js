"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoute = void 0;
const express_1 = __importDefault(require("express"));
const ValidationRequest_1 = __importDefault(require("../../Midleware/ValidationRequest"));
const Car_validation_1 = require("./Car.validation");
const Car_controller_1 = require("./Car.controller");
const route = express_1.default.Router();
route.post("/", (0, ValidationRequest_1.default)(Car_validation_1.CarValidations.carValidationSchema), Car_controller_1.CarController.createCar);
route.get("/", Car_controller_1.CarController.getAllCar);
route.get("/:carId", Car_controller_1.CarController.getSingelCar);
route.delete("/:carId", Car_controller_1.CarController.deleteCar);
route.put("/:carId", (0, ValidationRequest_1.default)(Car_validation_1.CarValidations.updatecarValidationSchema), Car_controller_1.CarController.returnAndUpdate);
route.put("/return", Car_controller_1.CarController.returnAndUpdate);
exports.CarRoute = route;
