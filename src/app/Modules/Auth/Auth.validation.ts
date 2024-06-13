
import { z } from 'zod';
const userValidationSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    role: z.enum(["user", "admin"]).optional(),
    password: z.string().min(1, { message: "Password is required" }),
    phone: z.string().nonempty({ message: "Phone number is required" }),
    address: z.string().nonempty({ message: "Address is required" })
});


export const userValidation = {
    userValidationSchema
}