import { TCarReturn } from "./CarReturn.interface"


const CarReturnIntoDB = async(payload:TCarReturn)=>{
    console.log(payload)
}

export const CarReturnService = {
    CarReturnIntoDB
}