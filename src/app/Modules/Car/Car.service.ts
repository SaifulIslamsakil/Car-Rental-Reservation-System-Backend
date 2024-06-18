import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { TCar, TCarReturn } from "./Car.interface";
import { CarModel } from "./Car.model";
import { CarBookingModel } from "../CarBooking/CarBooking.model";
import { convartTimeTohours } from "./Car.utils";


const createCarIntoDB = async (payload: TCar) => {
    const result = await CarModel.create(payload)
    return result
}

const getAllCarFormDB = async () => {
    const result = await CarModel.find()
    return result
}

const getSingelCarFormDB = async (id: string) => {
    const findCar = await CarModel.findById(id)
    if (!findCar) {
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }
    return findCar
}
const deleteCarFormDB = async (id: string) => {
    const deleteCar = await CarModel.findByIdAndUpdate(id, {
        isDeleted: true
    }, {
        new: true
    })
    if(!deleteCar){
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }
    return deleteCar
}
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
    const carUpdate = await CarModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    })
    if(!carUpdate){
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }

    return carUpdate

}

const carReturn = async (payload: TCarReturn) => {
    const { endTime, bookingId } = payload
    const carBookingData = await CarBookingModel.findById(bookingId)
    if (!carBookingData) {
        throw new AppError(httpStatus.NOT_FOUND, "car booking is not found")
    }
    const CarData = await CarModel.findById(carBookingData?.carId)
    if (!CarData || CarData.status === "available") {
        throw new AppError(httpStatus.NOT_FOUND, "car booking is not found")
    }

    const startTime = convartTimeTohours(carBookingData?.startTime)
    const endsTime = convartTimeTohours(payload?.endTime)
    if (startTime > endsTime) {
        throw new AppError(httpStatus.BAD_REQUEST, "your end time must be big to start time")
    }
    if (endsTime > 24) {
        throw new AppError(httpStatus.BAD_REQUEST, "your end time is invalid please input valid hours")
    }


    const totalCost = Number(((endsTime - startTime) * 10).toFixed(2))
    if (totalCost < 0) {
        throw new AppError(httpStatus.BAD_REQUEST, " your end time must be big to start time")
    }
    const updateDate = {
        endTime,
        totalCost
    }
    const updateCarBookingData = await CarBookingModel.findByIdAndUpdate(
        bookingId,
        updateDate,
        {
            new: true
        }

    )

    if (!updateCarBookingData) {
        throw new AppError(httpStatus.BAD_REQUEST, " your booking car is not updated")
    }

    const updateCar = await CarModel.findByIdAndUpdate(carBookingData.carId, {
        status: "available"
    },
        {
            new: true
        }
    )
    if (!updateCar) {
        throw new AppError(httpStatus.BAD_REQUEST, " your  car is not updated")
    }
    return updateCarBookingData
}



export const CarService = {
    carReturn,
    createCarIntoDB,
    getAllCarFormDB,
    getSingelCarFormDB,
    deleteCarFormDB,
    updateCarIntoDB,

}