import { Schema } from "mongoose";

export type TCarBooking = {
    date: Date;                 
    user: string;                  
    car: string;                  
    startTime: string;             
    endTime: string | null;              
    totalCost: number;            
}

