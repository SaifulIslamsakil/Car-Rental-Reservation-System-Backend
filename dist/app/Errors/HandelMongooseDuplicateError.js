"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handelMongooseDuplicateError = (err) => {
    // Extract value within double quotes using regex
    const match = err.message.match(/"([^"]*)"/);
    console.log(err.message);
    // The extracted value will be in the first capturing group
    const extractedMessage = match && match[1];
    const errorSources = [
        {
            path: '',
            message: `${extractedMessage} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode: statusCode,
        message: "Invalid ID",
        errorSources
    };
};
exports.default = handelMongooseDuplicateError;
