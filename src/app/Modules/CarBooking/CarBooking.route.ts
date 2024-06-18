import express from 'express'
import { CarBookingControllers } from './CarBooking.controller'
import auth from '../../Midleware/Auth'
import { USER_ROLE } from '../User/User.interface'


const route = express.Router()

route.post("/",auth(USER_ROLE.user), CarBookingControllers.createCarBooking)
// route.get("/",auth(USER_ROLE.admin), CarBookingControllers.createCarBooking)
route.get("/my-bookings", auth(USER_ROLE.admin), CarBookingControllers.getAllCarBooking)


export const CarBookingRoute = route