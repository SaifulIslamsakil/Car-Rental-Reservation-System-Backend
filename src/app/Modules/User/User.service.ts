import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { TLoginUser, TUser } from "./User.interface";
import { UserModel } from "./User.model";
import { Confiqe } from "../../Confiqe";
import { createToken } from "./User.utils";


const createUserIntoDB = async (payload: TUser) => {
    const result = await UserModel.create(payload)
    return result
}

const loginUser = async (payload: TLoginUser) => {
    const user = await UserModel.findOne({
        email: payload?.email
    })
    if (!user) {
        throw new AppError(httpStatus.BAD_REQUEST, "This user is not found !")
    }

    const passwordMatched = await UserModel.isPasswordMatched(payload?.password, user?.password)

    if (!passwordMatched) {
        throw new AppError(httpStatus.FORBIDDEN, "Password do not matched")
    }

    const jwtPayload: { email: string, role: string } = {
        email: user?.email,
        role: user?.role
    }

    const accressToken = createToken(
        jwtPayload,
        Confiqe.Access_Secret as string,
        Confiqe.Accress_Expires as string
    )

    const refareshToken = createToken(
        jwtPayload,
        Confiqe.Refaresh_Secret as string,
        Confiqe.Accress_Expires as string
    )



    return {
        user,
        token: accressToken,
        refareshToken
    }

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
    updateUserIntoDB,
    loginUser
}