import mongoose, { Schema, model } from "mongoose";
import { TCarBooking } from "./CarBooking.interface";
const CarBookingSchema = new mongoose.Schema<TCarBooking>({
    date: {
        type: String,
        required: true,
    },
    user: {
        type:  Schema.Types.ObjectId,
        ref: 'User_Auth',
        required: true,
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        default:null
    },
    totalCost: {
        type: Number,
        default: 0
    },
});


export const CarBookingModel = model<TCarBooking>("CarBooking", CarBookingSchema)

