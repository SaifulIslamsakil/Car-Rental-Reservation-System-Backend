
import express from "express"
import { CarBookingControllers } from "../CarBooking/CarBooking.controller"
import { CarReturnController } from "./CarReturn.controller"

const Route = express.Router()
Route.put("/return", CarReturnController.CarReturn)


 export const CarReturnRoute = Route 