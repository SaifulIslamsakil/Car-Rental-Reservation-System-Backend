import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { CarModel } from "../Car/Car.model";
import { TCarBooking } from "./CarBooking.interface";
import { CarBookingModel } from "./CarBooking.model";

const createCarBookingIntoDB = async(payload:TCarBooking)=>{
    payload.user = "666b0c2ffaaf672c6d918404"
    const carId = payload?.car
    const carData = await CarModel.findById(carId)
    if(!carData){
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }
    if(carData.status === "not available"){
        throw new AppError(httpStatus.BAD_REQUEST, "this car is not available please booked another car")
    }
    const update = await CarModel.findByIdAndUpdate(carId, {
        status : "not available"
    },{
        new:true
    })
    const result = await CarBookingModel.create(payload)
    if(!result){
        throw new AppError(httpStatus.BAD_REQUEST, "car booking is not successfull") 
    }

    return result
}

const getAllCarBookingFormDB = async()=>{
    const result = await CarBookingModel.find()
    return result
}


export const CarBookingService = {
    createCarBookingIntoDB,
    getAllCarBookingFormDB
}