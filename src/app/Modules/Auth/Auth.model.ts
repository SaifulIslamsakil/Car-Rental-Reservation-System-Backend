import { Schema, model } from "mongoose";
import { TUser } from "./Auth.interface";
import bcrypt from 'bcrypt';
import { Confiqe } from "../../Confiqe";

const UserSchema = new Schema<TUser>({
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
        type: String
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

UserSchema.post("save", function(doc, next){
    this.password = "",
    next()
})

export const UserModel = model<TUser>("user", UserSchema)