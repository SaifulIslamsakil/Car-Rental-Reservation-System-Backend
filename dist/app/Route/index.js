"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_route_1 = require("../Modules/User/User.route");
const Car_route_1 = require("../Modules/Car/Car.route");
const CarBooking_route_1 = require("../Modules/CarBooking/CarBooking.route");
const Router = express_1.default.Router();
const moduleRoute = [
    {
        path: "/user",
        Route: User_route_1.UserRoute
    },
    {
        path: "/car",
        Route: Car_route_1.CarRoute
    },
    {
        path: "/car-booking",
        Route: CarBooking_route_1.CarBookingRoute
    },
];
moduleRoute.forEach(route => Router.use(route.path, route.Route));
exports.default = Router;
