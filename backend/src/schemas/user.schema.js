import { z } from 'zod'

export const userCredentials = z.object({
    email: z.email(),
    password: z.string()
})