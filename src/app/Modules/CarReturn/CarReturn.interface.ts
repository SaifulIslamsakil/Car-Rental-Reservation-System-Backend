import { Schema } from "mongoose"


export type TCarReturn = {
    bookingId : Schema.Types.ObjectId;
    endTime: string
}

