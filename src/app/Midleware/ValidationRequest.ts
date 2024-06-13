import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../Utiles/catchAsync";

const ValidationRequest = (validationSchema: AnyZodObject) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await validationSchema.parseAsync(req?.body);

        next();
    })
}

export default ValidationRequest