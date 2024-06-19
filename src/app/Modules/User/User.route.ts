import express from 'express'
import { UserController } from './User.controller'
import ValidationRequest from '../../Midleware/ValidationRequest'
import { userValidation } from './User.validation'

const Route = express.Router()

Route.post("/signup", ValidationRequest(userValidation.userValidationSchema),UserController.createUser)
Route.post("/signin", ValidationRequest(userValidation.loginUserValidationSchema),UserController.loginUser)


export const UserRoute = Route