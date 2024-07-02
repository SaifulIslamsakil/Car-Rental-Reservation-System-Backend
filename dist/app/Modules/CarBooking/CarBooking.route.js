"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBookingRoute = void 0;
const express_1 = __importDefault(require("express"));
const CarBooking_controller_1 = require("./CarBooking.controller");
const Auth_1 = __importDefault(require("../../Midleware/Auth"));
const User_interface_1 = require("../User/User.interface");
const ValidationRequest_1 = __importDefault(require("../../Midleware/ValidationRequest"));
const CarBooking_validation_1 = require("./CarBooking.validation");
const route = express_1.default.Router();
route.post("/", (0, Auth_1.default)(User_interface_1.USER_ROLE.user), (0, ValidationRequest_1.default)(CarBooking_validation_1.CarBookingValidation.carBookingValidationSchema), CarBooking_controller_1.CarBookingControllers.createCarBooking);
route.get("/", (0, Auth_1.default)(User_interface_1.USER_ROLE.admin), CarBooking_controller_1.CarBookingControllers.getAllCarBooking);
route.get("/my-bookings", (0, Auth_1.default)(User_interface_1.USER_ROLE.user), CarBooking_controller_1.CarBookingControllers.getMyAllBookings);
exports.CarBookingRoute = route;
