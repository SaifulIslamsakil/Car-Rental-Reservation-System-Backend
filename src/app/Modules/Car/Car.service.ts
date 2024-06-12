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
    return result
}
const deleteCarFormDB = async (id: string) => {
    const result = await CarModel.findByIdAndUpdate(id, {
        isDeleted: true
    })
    return result
}
const updateCarIntoDB = async (id: string, payload: TCar) => {
    console.log(id, payload)
} 

export const CarService = {
    createCarIntoDB,
    getAllCarFormDB,
    getSingelCarFormDB,
    deleteCarFormDB,
    updateCarIntoDB
}