"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Name is required" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    role: zod_1.z.enum(["user", "admin"]).optional(),
    password: zod_1.z.string().min(1, { message: "Password is required" }),
    phone: zod_1.z.string().nonempty({ message: "Phone number is required" }),
    address: zod_1.z.string().nonempty({ message: "Address is required" })
});
const loginUserValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    password: zod_1.z.string().min(1, { message: "Password is required" }),
});
exports.userValidation = {
    userValidationSchema,
    loginUserValidationSchema
};
