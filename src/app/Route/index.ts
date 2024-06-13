import express from "express"
import { UserRoute } from "../Modules/User/User.route";
import { CarRoute } from "../Modules/Car/Car.route";
import { CarBookingRoute } from "../Modules/CarBooking/CarBooking.route";

const Router = express.Router()


const moduleRoute = [
    {
        path: "/user",
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