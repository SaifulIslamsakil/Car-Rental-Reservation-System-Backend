import { Schema, model } from "mongoose";
import { TCar } from "./Car.interface";



const CarSchema = new Schema<TCar>({
    name: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["available", "not available"],
        required: true,
        default:"available"
    },
    features: {
        type: [String],
        required: true
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps:true
}
)

CarSchema.pre("find", function(){
    this.find({isDeleted : {$ne : true}})
})
CarSchema.pre("findOne", function(){
    this.find({isDeleted : {$ne : true}})
})


export const CarModel = model<TCar>("Car", CarSchema)