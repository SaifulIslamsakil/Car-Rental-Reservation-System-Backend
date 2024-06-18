import express from 'express'
import { UserController } from './User.controller'
import ValidationRequest from '../../Midleware/ValidationRequest'
import { userValidation } from './User.validation'

const Route = express.Router()

Route.post("/signup", ValidationRequest(userValidation.userValidationSchema),UserController.createUser)
Route.post("/signin", ValidationRequest(userValidation.loginUserValidationSchema),UserController.loginUser)
Route.post(
    '/refresh-token',
    // ValidationRequest(userValidation.refreshTokenValidationSchema),
    UserController.refreshToken,
  );

export const UserRoute = Route