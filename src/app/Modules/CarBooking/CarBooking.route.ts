import express from 'express'
import { CarBookingControllers } from './CarBooking.controller'


const route = express.Router()

route.post("/", CarBookingControllers.createCarBooking)
route.get("/my-bookings", CarBookingControllers.getAllCarBooking)


export const CarBookingRoute = route