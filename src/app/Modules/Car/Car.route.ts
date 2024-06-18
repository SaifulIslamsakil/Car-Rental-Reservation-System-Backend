import express from "express"
import ValidationRequest from "../../Midleware/ValidationRequest"
import { CarValidations } from "./Car.validation"
import { CarController } from "./Car.controller"

const route = express.Router()

route.post("/", ValidationRequest(CarValidations.carValidationSchema), CarController.createCar)
route.get("/", CarController.getAllCar)
route.get("/:carId", CarController.getSingelCar)
route.delete("/:carId", CarController.deleteCar)
route.put("/:carId", ValidationRequest(CarValidations.updatecarValidationSchema), CarController.returnAndUpdate)
route.put("/return",CarController.returnAndUpdate)


export const CarRoute = route