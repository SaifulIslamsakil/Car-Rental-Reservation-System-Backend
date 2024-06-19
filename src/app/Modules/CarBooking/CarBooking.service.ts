import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { CarModel } from "../Car/Car.model";
import { TCarBooking } from "./CarBooking.interface";
import { CarBookingModel } from "./CarBooking.model";
import mongoose, { Types } from "mongoose";


const createCarBookingIntoDB = async (payload: TCarBooking, userId: Types.ObjectId) => {

    payload.user = userId

    const carData = await CarModel.findById(payload?.car)

    if (!carData) {
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }
    if (carData.status === "not available") {
        throw new AppError(httpStatus.BAD_REQUEST, "this car is not available please booked another car")
    }
    const session = await mongoose.startSession()

    try {
        session.startTransaction()
        const update = await CarModel.findByIdAndUpdate(payload?.car, {
            status: "not available"
        }, {
            new: true,
            session
        })
        if (!update) {
            throw new AppError(httpStatus.BAD_REQUEST, "car is not updated")
        }

        const result = await CarBookingModel.create([payload], { session })

        if (!result[0]) {
            throw new AppError(httpStatus.BAD_REQUEST, "car booking is not successfull")
        }

        await session.commitTransaction()
        await session.endSession()
        return result[0].populate("car")
    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST, "faild to transaction")
    }

}

const getAllCarBookingFormDB = async (query: any) => {
    const { carId, date } = query
    if (!carId && !date) {
        const bookings = await CarBookingModel.find().populate("car")
        return bookings
    }
    const bookings = await CarBookingModel.find({ car: carId, date: date }).populate("car")
    console.log(bookings.length) 
    if (bookings.length === 0) {
            throw new AppError(httpStatus.BAD_REQUEST, "car booking is not exists")
        }
    return bookings
}

const getMyAllBookingsFormDB = async (id: string) => {
    const result = await CarBookingModel.find({ user: id }).populate("car")
    if (result.length === 0) {
        throw new AppError(httpStatus.BAD_REQUEST, "user is not exists")
    }
    return result
}


export const CarBookingService = {
    createCarBookingIntoDB,
    getAllCarBookingFormDB,
    getMyAllBookingsFormDB
}