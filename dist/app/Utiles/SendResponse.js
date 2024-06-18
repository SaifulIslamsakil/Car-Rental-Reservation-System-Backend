"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, payload) => {
    res.status(payload.statusCode).json({
        success: payload.success,
        message: payload.message,
        data: payload.data,
    });
};
exports.sendResponse = sendResponse;
