import { Types } from "mongoose";


export type TCarBooking = {
    date: string;                 
    user: Types.ObjectId;                  
    car: Types.ObjectId;                  
    startTime: string;             
    endTime: string | null;             
    totalCost: number;            
}

