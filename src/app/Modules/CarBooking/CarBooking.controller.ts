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
const getSingelCarBooking = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {CarBookingId}= req?.params
        const result = await CarBookingService.getSingelCarBookingFormDB(CarBookingId)

        res.status(httpStatus.OK).json({
            success : true,
            message : "singel car booking in created successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}
const deleteCarBooking = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {CarBookingId} = req?.params
        const result = await CarBookingService.deleteCarBookingFormDB(CarBookingId)

        res.status(httpStatus.OK).json({
            success : true,
            message : "car booking is deleted successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}

const updateCarBooking = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {CarBookingId}= req?.params
        const result = await CarBookingService.updateCarBookingFormDB(CarBookingId, req?.body)

        res.status(httpStatus.OK).json({
            success : true,
            message : "car booking in update successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}


export const CarBookingControllers = {
    createCarBooking,
    getAllCarBooking,
    getSingelCarBooking,
    deleteCarBooking,
    updateCarBooking
}