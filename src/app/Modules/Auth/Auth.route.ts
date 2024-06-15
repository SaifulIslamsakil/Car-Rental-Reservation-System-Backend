import express from 'express'
import { UserController } from './Auth.controller'
import ValidationRequest from '../../Midleware/ValidationRequest'
import { userValidation } from './Auth.validation'

const Route = express.Router()

Route.post("/signup", ValidationRequest(userValidation.userValidationSchema),UserController.createUser)
Route.post("/signin", ValidationRequest(userValidation.loginUserValidationSchema),UserController.loginUser)
Route.get("/", UserController.getAllUser)
Route.get("/:userId", UserController.getSingelUser)
Route.delete("/:userId", UserController.deletedUser)
Route.patch("/:userId", UserController.updatedUser)


export const UserRoute = Route