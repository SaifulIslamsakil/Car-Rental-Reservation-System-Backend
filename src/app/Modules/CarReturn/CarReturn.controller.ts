import { Request, Response } from "express";
import catchAsync from "../../Utiles/catchAsync";
import { CarReturnService } from "./CarReturn.service";


const CarReturn = catchAsync(async(req:Request, res:Response)=>{
    const result = await CarReturnService.CarReturnIntoDB(req.body) 
})


export const CarReturnController = {
    CarReturn
}