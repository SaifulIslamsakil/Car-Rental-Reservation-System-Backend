import express from "express"
import { CarController } from "./Car.controller"
import ValidationRequest from "../../Midleware/ValidationRequest"
import { CarValidations } from "./Car.validation"

const route = express.Router()

route.post("/", ValidationRequest(CarValidations.carValidationSchema), CarController.createCar)
route.get("/", CarController.getAllCar)
route.get("/:carId", CarController.getSingelCar)
route.delete("/:carId", CarController.deleteCar)
route.put("/:carId", ValidationRequest(CarValidations.updatecarValidationSchema), CarController.updateCar)


export const CarRoute = route