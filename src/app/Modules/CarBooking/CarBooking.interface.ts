import { Schema } from "mongoose";

export type TCarBooking = {
    date: Date;                 
    user: string;                  
    carId: string;                  
    startTime: string;             
    endTime: string | null;              
    totalCost: number;            
}

