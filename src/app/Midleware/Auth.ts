import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../Modules/User/User.interface";
import catchAsync from "../Utiles/catchAsync";
import AppError from "../Errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken"
import { Confiqe } from "../Confiqe";
import { UserModel } from "../Modules/User/User.model";

const auth = (...payload: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const [, token] = (req?.headers?.authorization as string).split(" ")
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, "You ss are not authorized!")
        }

        const decoded = jwt.verify(token as string, Confiqe.Access_Secret as string) as JwtPayload

        const { role, id } = decoded

        const user = await UserModel.findById(id)

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
        }

        if (payload && !payload.includes(role)) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!',);
        }
        req.user = decoded as JwtPayload
        next()

    })
}

export default auth