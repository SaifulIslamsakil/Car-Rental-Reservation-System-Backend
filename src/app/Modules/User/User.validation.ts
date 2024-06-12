import { z } from "zod";


const userValidationSchema = z.object({
    name: z.string(),
    email: z.string(),
    role: z.string(),
    passwors: z.string(),
    phone: z.string(),
    address: z.string()
})

export const userValidation = {
    userValidationSchema
}