import { z } from "zod";

const carValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean(),
    status: z.enum(["available", "not available"]),
    features: z.array(z.string()),
    pricePerHour: z.number(),
    isDeleted: z.boolean().optional()
  });
const updatecarValidationSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    color: z.string().optional(),
    isElectric: z.boolean().optional(),
    status: z.enum(["available", "not available"]).optional(),
    features: z.array(z.string()).optional(),
    pricePerHour: z.number().optional(),
    isDeleted: z.boolean().optional()
  });


  export const CarValidations = {
    carValidationSchema,
    updatecarValidationSchema
  }