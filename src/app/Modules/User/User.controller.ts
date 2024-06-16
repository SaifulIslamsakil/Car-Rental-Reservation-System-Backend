import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.service";
import httpStatus from "http-status";
import catchAsync from "../../Utiles/catchAsync";
import { Confiqe } from "../../Confiqe";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    const result = await UserService.createUserIntoDB(body)

    res.status(httpStatus.OK).json({
        success: true,
        messges: "user is created successfully",
        data: result
    })
})

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.loginUser(req?.body)
    const { refareshToken, ...responseData } = result
    res.cookie('refreshToken', refareshToken, {
        secure: Confiqe.Node_Env === "production",
        httpOnly: true
    })

    res.status(httpStatus.OK).json({
        success: true,
        messges:  'User is logged in succesfully!',
        data: responseData
    })
})

const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.getAllUserFormDB()
    res.status(httpStatus.OK).json({
        success: true,
        messges: "all user is resivied successfully",
        data: result
    })

})
const getSingelUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { userId } = req.params
    const result = await UserService.getSingelUserFormDB(userId)
    res.status(httpStatus.OK).json({
        success: true,
        messges: "singel user is resivied successfully",
        data: result

    })
})
const deletedUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { userId } = req.params
    const result = await UserService.deletedUserFormDb(userId)
    res.status(httpStatus.OK).json({
        success: true,
        messges: "user is deleted successfully",
        data: result
    })

})
const updatedUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { userId } = req.params
    const body = req.body
    const result = await UserService.updateUserIntoDB(userId, body)
    res.status(httpStatus.OK).json({
        success: true,
        messges: "user is deleted successfully",
        data: result
    })

})

const refreshToken = catchAsync(async (req, res) => {
    const { refreshToken } = req.cookies;
    // const result = await AuthServices.refreshToken(refreshToken);
    console.log(refreshToken)
  });


export const UserController = {
    createUser,
    getAllUser,
    getSingelUser,
    deletedUser,
    updatedUser,
    loginUser,
    refreshToken
}