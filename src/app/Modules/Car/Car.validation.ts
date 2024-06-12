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


  export const CarValidations = {
    carValidationSchema
  }