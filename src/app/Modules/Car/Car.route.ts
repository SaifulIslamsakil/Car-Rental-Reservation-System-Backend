import express from "express"
import ValidationRequest from "../../Midleware/ValidationRequest"
import { CarValidations } from "./Car.validation"
import { CarController } from "./Car.controller"
import auth from "../../Midleware/Auth"
import { USER_ROLE } from "../User/User.interface"

const route = express.Router()

route.post("/", auth(USER_ROLE.admin), ValidationRequest(CarValidations.carValidationSchema), CarController.createCar)
route.get("/", CarController.getAllCar)
route.get("/:carId", CarController.getSingelCar)
route.delete("/:carId", auth(USER_ROLE.admin) , CarController.deleteCar)
route.put("/:carId", auth(USER_ROLE.admin), ValidationRequest(CarValidations.updatecarValidationSchema), CarController.returnAndUpdate)
route.put("/return",CarController.returnAndUpdate)


export const CarRoute = route