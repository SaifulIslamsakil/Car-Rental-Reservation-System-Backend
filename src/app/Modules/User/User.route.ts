import express from 'express'
import { UserController } from './User.controller'

const Route = express.Router()

Route.post("/create-user", UserController.createUser)
Route.get("/", UserController.getAllUser)
Route.get("/:userId", UserController.getSingelUser)
Route.delete("/:userId", UserController.deletedUser)
Route.patch("/:userId", UserController.updatedUser)


export const UserRoute = Route