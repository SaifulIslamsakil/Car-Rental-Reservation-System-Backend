import express from 'express'
import { UserController } from './User.controller'

const Route = express.Router()

Route.post("/create-user", UserController.createUser)


export const UserRoute = Route