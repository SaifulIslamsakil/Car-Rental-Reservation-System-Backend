
import { TErrorSources, TGenericErrorResponse } from "../Interface/interface";

const handelMongooseDuplicateError = (err: any): TGenericErrorResponse => {
    // Extract value within double quotes using regex
    const match = err.message.match(/"([^"]*)"/);
    console.log(err.message)

    // The extracted value will be in the first capturing group
    const extractedMessage = match && match[1];
    const errorSources: TErrorSources = [
        {
            path: '',
            message: `${extractedMessage} is already exists`,
        },
    ];

    const statusCode = 400
    return {
        statusCode: statusCode,
        message: "Invalid ID",
        errorSources
    }
}

export default handelMongooseDuplicateError