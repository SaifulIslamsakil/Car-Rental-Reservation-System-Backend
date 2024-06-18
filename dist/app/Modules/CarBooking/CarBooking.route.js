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
const route = express_1.default.Router();
route.post("/", (0, Auth_1.default)(User_interface_1.USER_ROLE.user), CarBooking_controller_1.CarBookingControllers.createCarBooking);
// route.get("/",auth(USER_ROLE.admin), CarBookingControllers.createCarBooking)
route.get("/my-bookings", (0, Auth_1.default)(User_interface_1.USER_ROLE.admin), CarBooking_controller_1.CarBookingControllers.getAllCarBooking);
exports.CarBookingRoute = route;
