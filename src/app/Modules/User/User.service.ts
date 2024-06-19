import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import { TJwtPayload, TLoginUser, TUser } from "./User.interface";
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

    const jwtPayload: TJwtPayload = {
        id:user?._id,
        email: user?.email,
        role: user?.role
    }

    const accressToken = createToken(
        jwtPayload,
        Confiqe.Access_Secret as string,
        "1hr"
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


export const UserService = {
    createUserIntoDB,
    loginUser
}