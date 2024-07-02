"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBookingValidation = void 0;
const zod_1 = require("zod");
const carBookingValidationSchema = zod_1.z.object({
    carId: zod_1.z.string({
        required_error: "Car ID is required",
        invalid_type_error: "Car ID must be a string",
    }),
    date: zod_1.z.string({
        required_error: "Date is required",
        invalid_type_error: "Date must be a string",
    }).refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
        message: "Date format must be yyyy-mm-dd",
    }),
    startTime: zod_1.z.string({
        required_error: "Start time is required",
        invalid_type_error: "Start time must be a string",
    })
});
exports.CarBookingValidation = {
    carBookingValidationSchema
};
