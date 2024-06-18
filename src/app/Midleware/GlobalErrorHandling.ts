import { NextFunction, Request, Response } from "express";
import { TErrorSources } from "../Interface/interface";
import { ZodError } from "zod";
import { Confiqe } from "../Confiqe";
import handelZodError from "../Errors/HandelZodError";
import handleMongooseValidationError from "../Errors/HandleMongooseValidationError";
import handeMongooseCastError from "../Errors/HandelMongooseCastError";
import AppError from "../Errors/AppError";
import handelMongooseDuplicateError from "../Errors/HandelMongooseDuplicateError";


const GlobalErrorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let message = err.message || 'Something went wrong!'
    let errorSources: TErrorSources = [
        {
            path: "",
            message: ""
        }
    ]

    if (err instanceof ZodError) {
        const simplifiedError = handelZodError(err)
        statusCode = simplifiedError?.statusCode
        message = simplifiedError?.message
        errorSources = simplifiedError?.errorSources

    }
    else if (err?.name === 'ValidationError') {
        const simplifiedError = handleMongooseValidationError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    else if (err?.name === "CastError") {
        const simplifiedError = handeMongooseCastError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    else if (err?.code === 11000) {
        const simplifiedError = handelMongooseDuplicateError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }
    else if (err instanceof AppError) {
        statusCode = err?.statusCode;
        message = err?.message;
        errorSources = [{
            path: '',
            message: err?.message,
        }]
    }
    else if (err instanceof Error){
        message = err?.message;
        errorSources = [{
            path: '',
            message: err?.message,
        }]
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        stack: Confiqe.Node_Env === 'development' ? err?.stack : null,
    });
}

export default GlobalErrorHandling