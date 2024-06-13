import { TUser } from "./Auth.interface";
import { UserModel } from "./Auth.model";
import { userValidation } from "./Auth.validation";

const createUserIntoDB = async (payload: TUser) => {
    const validation = userValidation.userValidationSchema.parse(payload)
    console.log({ validation })
    const result = await UserModel.create(payload)
    return result
}

const getAllUserFormDB = async () => {
    const result = await UserModel.find()
    return result
}

const getSingelUserFormDB = async (id: string) => {
    const result = await UserModel.findById(id)
    // if (!result) {
    //     throw new Error("user in not exsist")
    // }
    return result
}

const deletedUserFormDb = async (id: string) => {
    const result = await UserModel.findByIdAndDelete(id)
    if (!result) {
        throw new Error("user in not exsist")
    }
    return result
}
const updateUserIntoDB = async (id: string, payload: TUser) => {
    console.log(id, payload)
}

export const UserService = {
    createUserIntoDB,
    getAllUserFormDB,
    getSingelUserFormDB,
    deletedUserFormDb,
    updateUserIntoDB
}