import { Schema } from "mongoose";

export type TCarBooking = {
    date: Date;                  // The date of the booking in YYYY-MM-DD format
    user: Schema.Types.ObjectId;                  // Identifier for the user (reference to user model)
    car: Schema.Types.ObjectId;                   // Identifier for the booked car (reference to car model)
    startTime: Date;             // The start time of the booking in 24-hour format (HH:mm)
    endTime: Date;               // The end time of the booking in 24-hour format (HH:mm)
    totalCost: number;             // The total cost of the booking, default is 0
}

