import { NextFunction, Request, Response } from "express";
import { CarBookingService } from "./CarBooking.service";
import httpStatus from "http-status";

const createCarBooking = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const result = await CarBookingService.createCarBookingIntoDB(req?.body)

        res.status(httpStatus.OK).json({
            success : true,
            message : "car booking in created successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}

const getAllCarBooking = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const result = await CarBookingService.getAllCarBookingFormDB()

        res.status(httpStatus.OK).json({
            success : true,
            message : "all car booking is resivied  successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}



export const CarBookingControllers = {
    createCarBooking,
    getAllCarBooking,
   
}