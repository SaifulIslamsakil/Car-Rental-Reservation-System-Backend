/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { CarModel } from "../Car/Car.model";
import { BookingRequest, } from "./CarBooking.interface";
import { CarBookingModel } from "./CarBooking.model";
import mongoose, { ClientSession, Types } from "mongoose";


const createCarBookingIntoDB = async (payload: BookingRequest, userId: Types.ObjectId) => {
    const {carId, date, startTime} = payload
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(payload.date)) {
        throw new AppError(httpStatus.BAD_REQUEST, "'Date format must be yyyy-mm-dd")
    }

    const carData = await CarModel.findById(carId)

    if (!carData) {
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }
    if (carData.status === "not available") {
        throw new AppError(httpStatus.BAD_REQUEST, "this car is not available please booked another car")
    }
    const session: ClientSession = await mongoose.startSession()


    try {
        session.startTransaction()
        const update = await CarModel.findByIdAndUpdate(carId, {
            status: "not available"
        }, {
            new: true,
            session
        })
        if (!update) {
            throw new AppError(httpStatus.BAD_REQUEST, "car is not updated")
        }
        const bookingPayload = {
            date,
            startTime,
            car:carId,
            user: userId
        }

        const result = await CarBookingModel.create([bookingPayload], { session })

        if (!result[0]) {
            throw new AppError(httpStatus.BAD_REQUEST, "car booking is not successfull")
        }

        await session.commitTransaction()
        await session.endSession()
        return ((await result[0].populate("user")).populate("car"))
    } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST, "faild to transaction")
    }

}

const getAllCarBookingFormDB = async (payload: any) => {

    const { carId, date } = payload;
    const query: any = {};

    if (carId) query.car = carId;

    if (date) query.date = date;

    const bookings = await CarBookingModel.find(query).populate("user").populate('car');

    if (!bookings.length) {
        throw new AppError(httpStatus.BAD_REQUEST, "Car booking does not exist")
    }
    return bookings
}

const getMyAllBookingsFormDB = async (id: string) => {
    const result = await CarBookingModel.find({ user: id }).populate("user").populate("car")
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