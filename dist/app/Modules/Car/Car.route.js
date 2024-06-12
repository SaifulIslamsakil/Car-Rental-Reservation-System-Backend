"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Car_controller_1 = require("./Car.controller");
const route = express_1.default.Router();
route.post("/create-car", Car_controller_1.CarController.createCar);
route.get("/", Car_controller_1.CarController.getAllCar);
route.get("/:carId", Car_controller_1.CarController.getSingelCar);
route.delete("/:carId", Car_controller_1.CarController.deleteCar);
route.patch("/:carId", Car_controller_1.CarController.updateCar);
