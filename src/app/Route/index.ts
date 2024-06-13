import express from "express"
import { UserRoute } from "../Modules/User/User.route";
import { CarRoute } from "../Modules/Car/Car.route";

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

]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router