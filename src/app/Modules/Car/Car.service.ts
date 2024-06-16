import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { TCar } from "./Car.interface";
import { CarModel } from "./Car.model";

const createCarIntoDB = async (payload: TCar) => {
    const result = await CarModel.create(payload)
    return result
}

const getAllCarFormDB = async () => {
    const result = await CarModel.find()
    return result
}

const getSingelCarFormDB = async (id: string) => {
    const result = await CarModel.findById(id)
    if(!result){
        throw new AppError(httpStatus.BAD_REQUEST, "car is not exists")
    }
    return result
}
const deleteCarFormDB = async (id: string) => {
    const result = await CarModel.findByIdAndUpdate(id, {
        isDeleted: true
    },{
        new:true
    })
    return result
}
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
    const update = await CarModel.findByIdAndUpdate(id, payload, {
        new:true,
        runValidators:true
    })

    return update

} 

export const CarService = {
    createCarIntoDB,
    getAllCarFormDB,
    getSingelCarFormDB,
    deleteCarFormDB,
    updateCarIntoDB
}