import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../Interface/interface";


const handleMongooseValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResponse => {
    const errorSources: TErrorSources = Object.values(err.errors).map((value) => {
        return {
            path: value?.path,
            message: value?.message
        }
    })
    const statusCode = 400
    return {

        statusCode: statusCode,
        message: 'Validation Error ',
        errorSources
    }
}

export default handleMongooseValidationError