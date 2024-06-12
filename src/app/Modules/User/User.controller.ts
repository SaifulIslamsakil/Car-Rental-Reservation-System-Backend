import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.service";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        const result = await UserService.createUserIntoDB(body)

        res.status(httpStatus.OK).json({
            success : true,
            messges : "user is created successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}


export const UserController = {
    createUser
}