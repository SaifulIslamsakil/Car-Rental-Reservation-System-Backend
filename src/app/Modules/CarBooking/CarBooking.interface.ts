import { Schema } from "mongoose";

export type TCarBooking = {
    date: Date;                 
    user: string;                  
    car: Schema.Types.ObjectId;                  
    startTime: Date;             
    endTime: Date | null;              
    totalCost: number;            
}

