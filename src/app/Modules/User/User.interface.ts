import { Model, Types } from "mongoose";
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

  isUserExists(id: string): Promise<TUser>
}
export type TJwtPayload = {
  id: Types.ObjectId;
  email: string;
  role: string;
}
export const USER_ROLE = {
  user: "user",
  admin: "admin"
} as const;

export type TUserRole = keyof typeof USER_ROLE 
