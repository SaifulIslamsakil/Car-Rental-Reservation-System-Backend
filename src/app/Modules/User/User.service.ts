import { TUser } from "./User.interface";
import { UserModel } from "./User.model";
import { userValidation } from "./User.validation";

const createUserIntoDB = async (payload: TUser) => {
    const validation = userValidation.userValidationSchema.parse(payload)
    console.log({validation})
    const result = await UserModel.create(payload)
    return result
}

export const UserService = {
    createUserIntoDB
}