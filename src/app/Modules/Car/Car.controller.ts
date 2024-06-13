import { NextFunction, Request, Response } from "express";
import { CarService } from "./Car.service";
import httpStatus from "http-status";

const createCar = async (req: Request, res: Response, next: NextFunction
) => {
    try {
        const body = req.body
        console.log(body)
        const result = await CarService.createCarIntoDB(body)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "car is created successfully",
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
            messeage: "all car is resevied successfully",
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
            messeage: "singel car is resivied successfully",
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
            messeage: "car is deleted successfully",
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
            messeage: "car is updated successfully",
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