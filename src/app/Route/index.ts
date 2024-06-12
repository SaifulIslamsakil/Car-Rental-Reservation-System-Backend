import express from "express"
import app from "../../app";
import { UserRoute } from "../Midleware/User/User.route";

const Router= express.Router()


const moduleRoute = [{
    path:"/user",
    Route : UserRoute
}]

moduleRoute.forEach(route => Router.use(route.path, route.Route));

export default Router