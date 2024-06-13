import { NextFunction, Request, Response } from "express";
import { TErrorSources } from "../Interface/Error.interface";
import { ZodError } from "zod";
import { Confiqe } from "../Confiqe";
import handelZodError from "../Errors/HandelZodError";



const GlobalErrorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let message = err.message || 'Something went wrong!'
    let errorSources: TErrorSources = [
        {
            path: "",
            message: ""
        }
    ]

    if(err instanceof ZodError){
        const simplifiedError =  handelZodError(err)
        statusCode = simplifiedError?.statusCode
        message = simplifiedError?.message
        errorSources = simplifiedError?.errorSources

    }

    return res.status(500).json({
        success: false,
        message,
        errorSources,
        err,
        stack: Confiqe.Node_Env === 'development' ? err?.stack : null,
    });
}

export default GlobalErrorHandling