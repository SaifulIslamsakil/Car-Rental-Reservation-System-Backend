"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const CarReturnValidationSchema = zod_1.z.object({
    bookingId: zod_1.z.string(),
    endTime: zod_1.z.string()
});
exports.default = CarReturnValidationSchema;
