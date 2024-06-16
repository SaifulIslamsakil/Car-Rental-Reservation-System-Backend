import express from "express"
import { CarRoute } from "../Modules/Car/Car.route";
import { CarBookingRoute } from "../Modules/CarBooking/CarBooking.route";
import { UserRoute } from "../Modules/User/User.route";


const Router = express.Router()


const moduleRoute = [
    {
        path: "/auth",
        Route: UserRoute
    },
    {
        path: "/cars",
        Route: CarRoute
    },
    {
        path: "/car-booking",
        Route: CarBookingRoute
    },

]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router