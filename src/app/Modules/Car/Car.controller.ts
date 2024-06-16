import { NextFunction, Request, Response } from "express";
import { CarService } from "./Car.service";
import httpStatus from "http-status";

const createCar = async (req: Request, res: Response, next: NextFunction
) => {
    try {
        const body = req.body
        const result = await CarService.createCarIntoDB(body)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "Car created successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const getAllCar = async (req: Request, res: Response, next: NextFunction
) => {
    try {
        const result = await CarService.getAllCarFormDB()
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "Cars retrieved successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const getSingelCar = async (req: Request, res: Response, next: NextFunction
) => {
    try {
        const {carId} = req.params
        const result = await CarService.getSingelCarFormDB(carId)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "A Car retrieved successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const deleteCar = async (req: Request, res: Response, next: NextFunction
) => {
    try {
        const {carId} = req.params
        const result = await CarService.deleteCarFormDB(carId)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "Car  deleted successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const updateCar = async (req: Request, res: Response, next: NextFunction
) => {
    try {
        const body = req.body
        const {carId} = req.params
        const result = await CarService.updateCarIntoDB(carId, body)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "Car updated successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


export const  CarController = {
    createCar,
    getSingelCar,
    getAllCar,
    deleteCar,
    updateCar
}