import { Request, Response } from "express";
import { CarService } from "./Car.service";
import httpStatus from "http-status";
import catchAsync from "../../Utiles/catchAsync";
import { sendResponse } from "../../Utiles/SendResponse";

const createCar = catchAsync(async (req: Request, res: Response
) => {
    const body = req.body
    const result = await CarService.createCarIntoDB(body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Car created successfully",
        data: result
    })
})
const getAllCar = catchAsync(async (req: Request, res: Response
) => {
    const result = await CarService.getAllCarFormDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Cars retrieved successfully",
        data: result
    })
})
const getSingelCar = catchAsync(async (req: Request, res: Response
) => {

    const { carId } = req.params
    const result = await CarService.getSingelCarFormDB(carId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "A Car retrieved successfully",
        data: result
    })
})
const deleteCar = catchAsync(async (req: Request, res: Response,
) => {
    const { carId } = req.params
    const result = await CarService.deleteCarFormDB(carId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Car deleted successfully",
        data: result
    })
})



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
        const { carId } = req.params
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