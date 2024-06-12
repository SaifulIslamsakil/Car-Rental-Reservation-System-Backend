"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    role: zod_1.z.string(),
    passwors: zod_1.z.string(),
    phone: zod_1.z.string(),
    address: zod_1.z.string()
});
exports.userValidation = {
    userValidationSchema
};
