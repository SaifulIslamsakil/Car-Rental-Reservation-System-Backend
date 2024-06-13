import express from "express"
import { UserRoute } from "../Modules/Auth/Auth.route";
import { CarRoute } from "../Modules/Car/Car.route";
import { CarBookingRoute } from "../Modules/CarBooking/CarBooking.route";

const Router = express.Router()


const moduleRoute = [
    {
        path: "/auth",
        Route: UserRoute
    },
    {
        path: "/car",
        Route: CarRoute
    },
    {
        path: "/car-booking",
        Route: CarBookingRoute
    },

]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router