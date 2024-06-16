import { Model } from "mongoose";
import { UserModel } from "./User.model";

export type TUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string

}

export type TLoginUser = {
  email: string,
  password: string
}


export interface User extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
