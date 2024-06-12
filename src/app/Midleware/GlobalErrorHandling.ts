import { NextFunction, Request, Response } from "express";
import { TErrorSources } from "../Interface/ErrorSources";



const GlobalErrorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
    let status = 500
    let message = err.message || 'Something went wrong!'
    let errorSources: TErrorSources = {
        path: "",
        message: ""
    }

    console.log(err)
}

export default GlobalErrorHandling