import { ZodError } from "zod"
import { TErrorSources, TGenericErrorResponse } from "../Interface/Error.interface"


const handelZodError = (err: ZodError): TGenericErrorResponse => {
    const errorSources: TErrorSources = err?.issues?.map(issuse => {
        return {
            path: issuse?.path[issuse?.path.length - 1],
            message: issuse?.message
        }
    })
    const statusCode = 400;
    return {
        statusCode: statusCode,
        message: 'Validation Error',
        errorSources
    }
}

export default handelZodError