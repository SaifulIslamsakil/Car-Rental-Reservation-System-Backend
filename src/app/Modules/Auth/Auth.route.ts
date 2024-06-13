import express from 'express'
import { UserController } from './Auth.controller'
import ValidationRequest from '../../Midleware/ValidationRequest'
import { userValidation } from './Auth.validation'

const Route = express.Router()

Route.post("/create-user", ValidationRequest(userValidation.userValidationSchema),UserController.createUser)
Route.get("/", UserController.getAllUser)
Route.get("/:userId", UserController.getSingelUser)
Route.delete("/:userId", UserController.deletedUser)
Route.patch("/:userId", UserController.updatedUser)


export const UserRoute = Route