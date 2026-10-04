import { z } from 'zod'

export const userRegister = z.object({
    email: z.email(),
    password: z.string()
})