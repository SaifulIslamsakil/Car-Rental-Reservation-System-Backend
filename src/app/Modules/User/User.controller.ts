import { NextFunction, Request, Response } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body
        console.log(body)
    } catch (error) {
        next(error)
    }
}


export const UserController = {
    createUser
}