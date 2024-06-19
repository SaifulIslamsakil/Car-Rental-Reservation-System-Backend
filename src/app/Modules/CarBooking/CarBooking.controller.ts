import {  Request, Response } from "express";
import { CarBookingService } from "./CarBooking.service";
import httpStatus from "http-status";
import catchAsync from "../../Utiles/catchAsync";
import { sendResponse } from "../../Utiles/SendResponse";

const createCarBooking = catchAsync( async(req:Request, res:Response)=>{

        const {id} = req.user 
        const result = await CarBookingService.createCarBookingIntoDB(req?.body,id )
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "car booking in created successfully",
            data: result
        })   
})

const getAllCarBooking = catchAsync( async(req:Request, res:Response)=>{
        const result = await CarBookingService.getAllCarBookingFormDB(req.query)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "all car booking is resivied  successfully",
            data: result
        })
})

const getMyAllBookings = catchAsync(async(req:Request, res:Response)=>{
    const {id}= req.user
    console.log(id)
    const result = await CarBookingService.getMyAllBookingsFormDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My Bookings retrieved successfully",
        data: result
    })
})



export const CarBookingControllers = {
    createCarBooking,
    getAllCarBooking,
    getMyAllBookings
   
}