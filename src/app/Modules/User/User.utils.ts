
import jwt from "jsonwebtoken"

 export const createToken = (payload: {email:string, role:string} , screate:string, expiresIn:string)=>{
    return jwt.sign(payload, screate, {
        expiresIn
    })
}