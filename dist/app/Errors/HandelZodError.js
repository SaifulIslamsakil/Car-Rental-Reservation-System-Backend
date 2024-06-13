"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handelZodError = (err) => {
    var _a;
    const errorSources = (_a = err === null || err === void 0 ? void 0 : err.issues) === null || _a === void 0 ? void 0 : _a.map(issuse => {
        return {
            path: issuse === null || issuse === void 0 ? void 0 : issuse.path[(issuse === null || issuse === void 0 ? void 0 : issuse.path.length) - 1],
            message: issuse === null || issuse === void 0 ? void 0 : issuse.message
        };
    });
    const statusCode = 400;
    return {
        statusCode: statusCode,
        message: 'Validation Error',
        errorSources
    };
};
exports.default = handelZodError;
