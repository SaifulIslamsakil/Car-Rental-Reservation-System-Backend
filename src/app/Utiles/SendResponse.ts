import { Response } from "express";
import { TResponse } from "../Interface/interface";

export const sendResponse = <T>(res: Response, payload: TResponse<T>) => {
    res.status(payload.statusCode).json({
        success: payload.success,
        message: payload.message,
        data: payload.data,
    })
}