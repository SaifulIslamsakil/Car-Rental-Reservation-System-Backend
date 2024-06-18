
import jwt from "jsonwebtoken"
import { TJwtPayload } from "./User.interface"

 export const createToken = (payload: TJwtPayload , screate:string, expiresIn:string)=>{
    const token = jwt.sign(payload, screate, {
        expiresIn
    })
    return `Bearer ${token}`
}