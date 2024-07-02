import express from 'express'
import { CarBookingControllers } from './CarBooking.controller'
import auth from '../../Midleware/Auth'
import { USER_ROLE } from '../User/User.interface'
import ValidationRequest from '../../Midleware/ValidationRequest'
import { CarBookingValidation } from './CarBooking.validation'


const route = express.Router()

route.post("/",auth(USER_ROLE.user), ValidationRequest(CarBookingValidation.carBookingValidationSchema), CarBookingControllers.createCarBooking)
route.get("/",auth(USER_ROLE.admin), CarBookingControllers.getAllCarBooking)
route.get("/my-bookings",auth(USER_ROLE.user) , CarBookingControllers.getMyAllBookings)


export const CarBookingRoute = route