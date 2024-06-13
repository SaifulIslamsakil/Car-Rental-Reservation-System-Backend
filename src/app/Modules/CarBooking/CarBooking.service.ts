import { TCarBooking } from "./CarBooking.interface";
import { CarBookingModel } from "./CarBooking.model";
import { CarBookingValidation } from "./CarBooking.validation";

const createCarBookingIntoDB = async(payload:TCarBooking)=>{

    const validation = CarBookingValidation.carBookingValidationSchema.parse(payload)
    console.log(validation)
    const result = await CarBookingModel.create(payload)

    return result
}

const getAllCarBookingFormDB = async()=>{
    const result = await CarBookingModel.find()
    return result
}
const getSingelCarBookingFormDB = async(CarBookingId : string)=>{
    const result = await CarBookingModel.findById(CarBookingId)
    return result
}
const deleteCarBookingFormDB = async(CarBookingId:string)=>{
    console.log(CarBookingId)
}
const updateCarBookingFormDB = async(CarBookingId:string, payload:TCarBooking)=>{
    console.log(CarBookingId, payload)
}

export const CarBookingService = {
    createCarBookingIntoDB,
    getAllCarBookingFormDB,
    getSingelCarBookingFormDB,
    deleteCarBookingFormDB,
    updateCarBookingFormDB
}