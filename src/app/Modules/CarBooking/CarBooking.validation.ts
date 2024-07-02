import { z } from 'zod';

const carBookingValidationSchema = z.object({
  carId: z.string({
    required_error: "Car ID is required",
    invalid_type_error: "Car ID must be a string",
  }),
  date: z.string({
    required_error: "Date is required",
    invalid_type_error: "Date must be a string",
  }).refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
    message: "Date format must be yyyy-mm-dd",
  }),
  startTime: z.string({
    required_error: "Start time is required",
    invalid_type_error: "Start time must be a string",
  })
});




export const CarBookingValidation = {
  carBookingValidationSchema
}


