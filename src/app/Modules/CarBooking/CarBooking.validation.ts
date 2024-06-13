import { z } from 'zod';

const carBookingValidationSchema = z.object({
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  user: z.string().regex(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid user ID format",
  }),
  car: z.string().regex(/^[0-9a-fA-F]{24}$/, {
    message: "Invalid car ID format",
  }),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Invalid time format, should be HH:mm in 24-hour format",
  }),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Invalid time format, should be HH:mm in 24-hour format",
  }),
  totalCost: z.number().nonnegative().default(0),
});


export const CarBookingValidation = {
    carBookingValidationSchema
}


