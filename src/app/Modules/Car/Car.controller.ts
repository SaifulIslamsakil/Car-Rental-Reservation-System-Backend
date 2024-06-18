import { NextFunction, Request, Response } from "express";
import { CarService } from "./Car.service";
import httpStatus from "http-status";
import catchAsync from "../../Utiles/catchAsync";

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
        const { carId } = req.params
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
        const { carId } = req.params
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



const returnAndUpdate = catchAsync(async (req: Request, res: Response) => {
    const path = req?.path === "/return"
    if (path) {
        const result = await CarService.carReturn(req?.body)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "Car returned successfully",
            data: result
        })
    }
    else {
        const { carId } = req?.params
        const result = await CarService.updateCarIntoDB(carId, req?.body)
        res.status(httpStatus.OK).json({
            success: true,
            messeage: "Car updated successfully",
            data: result
        })
    }

})


export const CarController = {
    createCar,
    getSingelCar,
    getAllCar,
    deleteCar,
    returnAndUpdate
}