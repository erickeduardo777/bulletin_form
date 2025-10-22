import z from "zod";

const objValid = z.object({
    email: z.email('Valid email required')
})

export default objValid