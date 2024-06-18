"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBookingRoute = void 0;
const express_1 = __importDefault(require("express"));
const CarBooking_controller_1 = require("./CarBooking.controller");
const route = express_1.default.Router();
route.post("/", CarBooking_controller_1.CarBookingControllers.createCarBooking);
route.get("/my-bookings", CarBooking_controller_1.CarBookingControllers.getAllCarBooking);
exports.CarBookingRoute = route;
