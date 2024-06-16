"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBookingValidation = void 0;
const zod_1 = require("zod");
const carBookingValidationSchema = zod_1.z.object({
    date: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }).optional(),
    user: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, {
        message: "Invalid user ID format",
    }).optional(),
    car: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, {
        message: "Invalid car ID format",
    }).optional(),
    startTime: zod_1.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Invalid time format, should be HH:mm in 24-hour format",
    }).optional(),
    endTime: zod_1.z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Invalid time format, should be HH:mm in 24-hour format",
    }).optional(),
    totalCost: zod_1.z.number().nonnegative().default(0),
}).optional();
exports.CarBookingValidation = {
    carBookingValidationSchema
};
