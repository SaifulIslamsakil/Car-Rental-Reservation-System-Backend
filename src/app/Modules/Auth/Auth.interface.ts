import { Model } from "mongoose";
import { UserModel } from "./Auth.model";

export type TUser = {
    name: string;
    email: string;
    role: "user" | "admin";
    password: string;
    phone: string;
    address: string

}

export type TLoginUser = {
    email : string,
    password:string
}


export interface User extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByCustomId(id: string): Promise<TUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
      passwordChangedTimestamp: Date,
      jwtIssuedTimestamp: number,
    ): boolean;
  }
