"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalErrorHandling = (err, req, res, next) => {
    let status = 500;
    let message = err.message || 'Something went wrong!';
    let errorSources = {
        path: "",
        message: ""
    };
};
