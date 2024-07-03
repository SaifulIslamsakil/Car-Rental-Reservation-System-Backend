import { Schema } from "mongoose";

export type TCar = {
    name:string;
    description:string;
    color:string;
    isElectric:boolean;
    status:"available" | "not available";
    features:string[];
    pricePerHour:number;
    isDeleted?:boolean
}

export type TCarReturn = {
    bookingId : Schema.Types.ObjectId;
    endTime: string
}


