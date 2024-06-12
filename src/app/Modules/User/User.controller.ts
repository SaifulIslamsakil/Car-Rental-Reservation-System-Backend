import { Request } from "express";

const createUser = async(req:Request, res:Response)=>{
    const body = req.body
    console.log(body)
}