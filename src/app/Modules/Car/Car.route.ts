import express from "express"
import { CarController } from "./Car.controller"

const route = express.Router()

route.post("/create-car", CarController.createCar)
route.get("/", CarController.getAllCar)
route.get("/:carId", CarController.getSingelCar)
route.delete("/:carId", CarController.deleteCar)
route.patch("/:carId", CarController.updateCar)
