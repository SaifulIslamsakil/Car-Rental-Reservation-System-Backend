
export type TErrorSources = {
    path: string | number;
    message: string
}[]

export type TGenericErrorResponse = {
    statusCode: number,
    message: string,
    errorSources:TErrorSources
}

export type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data: T;
};
