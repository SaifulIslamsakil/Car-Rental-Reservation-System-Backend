import { z } from "zod";


const CarReturnValidationSchema =z.object({
    bookingId : z.string(),
    endTime : z.string()
})

export default CarReturnValidationSchema