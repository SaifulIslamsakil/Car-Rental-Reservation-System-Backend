import express from "express"
import { UserRoute } from "../Modules/User/User.route";

const Router= express.Router()


const moduleRoute = [{
    path:"/user",
    Route : UserRoute
}]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router