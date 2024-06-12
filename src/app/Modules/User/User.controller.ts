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

const getAllUser = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const result = await UserService.getAllUserFormDB()
        res.status(httpStatus.OK).json({
            success : true,
            messges : "all user is resivied successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}
const getSingelUser = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {userId} = req.params
        const result = await UserService.getSingelUserFormDB(userId)
        res.status(httpStatus.OK).json({
            success : true,
            messges : "singel user is resivied successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}
const deletedUser = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {userId} = req.params
        const result = await UserService.deletedUserFormDb(userId)
        res.status(httpStatus.OK).json({
            success : true,
            messges : "user is deleted successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}
const updatedUser = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {userId} = req.params
        const body = req.body
        const result = await UserService.updateUserIntoDB(userId, body)
        res.status(httpStatus.OK).json({
            success : true,
            messges : "user is deleted successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
}


export const UserController = {
    createUser,
    getAllUser,
    getSingelUser,
    deletedUser,
    updatedUser
}