import { Schema, model } from "mongoose";
import { TUser, User, } from "./User.interface";
import bcrypt from 'bcrypt';
import { Confiqe } from "../../Confiqe";

const UserSchema = new Schema<TUser, User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin"]
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


UserSchema.pre("save", async function (next) {
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        Number(Confiqe.Salt_Rounds),
    );
    next()
})

UserSchema.post("save", function (doc, next) {
    this.password = "",
        next()
})
 

UserSchema.pre("find", function(){
    console.log(this.find())
})

UserSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
) {
    return await bcrypt.compare(plainTextPassword, hashedPassword)
};

UserSchema.statics.isUserExists = async function(id:string){
    return await UserModel.findOne({_id:id})

}
export const UserModel = model<TUser, User>("user", UserSchema)