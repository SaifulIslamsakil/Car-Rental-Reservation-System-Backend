import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.service";
import httpStatus from "http-status";
import catchAsync from "../../Utiles/catchAsync";
import { Confiqe } from "../../Confiqe";
import { sendResponse } from "../../Utiles/SendResponse";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    const result = await UserService.createUserIntoDB(body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registered successfully",
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

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User is logged in succesfully!",
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
    loginUser,
    refreshToken
}