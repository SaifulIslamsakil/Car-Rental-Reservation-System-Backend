import express from 'express'
import { CarBookingControllers } from './CarBooking.controller'


const route = express.Router()

route.post("/", CarBookingControllers.createCarBooking)
route.get("/", CarBookingControllers.getAllCarBooking)
route.get("/:carBookingId", CarBookingControllers.getSingelCarBooking)
route.delete("/:carBookingId", CarBookingControllers.deleteCarBooking)
route.patch("/:carBookingId", CarBookingControllers.updateCarBooking)


export const CarBookingRoute = route