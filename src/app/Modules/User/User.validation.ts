
import { z } from 'zod';
const userValidationSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    role: z.enum(["user", "admin"]).optional(),
    password: z.string().min(1, { message: "Password is required" }),
    phone: z.string().nonempty({ message: "Phone number is required" }),
    address: z.string().nonempty({ message: "Address is required" })
});

const loginUserValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),

})

const refreshTokenValidationSchema = z.object({
    cookies: z.object({
      refreshToken: z.string({
        required_error: 'Refresh token is required!',
      }),
    }),
  });


export const userValidation = {
    userValidationSchema,
    loginUserValidationSchema,
    refreshTokenValidationSchema
}