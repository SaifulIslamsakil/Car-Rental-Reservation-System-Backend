"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ReturnCar_Controller_1 = require("./ReturnCar.Controller");
const ValidationRequest_1 = __importDefault(require("../../Midleware/ValidationRequest"));
const ReturnCar_validation_1 = __importDefault(require("./ReturnCar.validation"));
const Route = express_1.default.Router();
Route.put("/", (0, ValidationRequest_1.default)(ReturnCar_validation_1.default), ReturnCar_Controller_1.ReturnCarController.ReturnCar);
