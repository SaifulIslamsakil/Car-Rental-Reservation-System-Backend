"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Confiqe_1 = require("../Confiqe");
const HandelZodError_1 = __importDefault(require("../Errors/HandelZodError"));
const HandleMongooseValidationError_1 = __importDefault(require("../Errors/HandleMongooseValidationError"));
const HandelMongooseCastError_1 = __importDefault(require("../Errors/HandelMongooseCastError"));
const GlobalErrorHandling = (err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || 'Something went wrong!';
    let errorSources = [
        {
            path: "",
            message: ""
        }
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, HandelZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, HandleMongooseValidationError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplifiedError = (0, HandelMongooseCastError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedError = (0, HandelMongooseCastError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    return res.status(500).json({
        success: false,
        message,
        errorSources,
        err,
        stack: Confiqe_1.Confiqe.Node_Env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = GlobalErrorHandling;
