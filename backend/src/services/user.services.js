import { createUser, findByEmail } from "../repo/user.repo.js";
import { hashingPassword } from "../utils/password.js";

export async function createUserService({ email, password }) {
    const user = await findByEmail(email)
    if(user) {
        const err = new Error('This user already exist')
        err.status = 409
        throw err
    }
    const hash = await hashingPassword(password)
    await createUser({
        email,
        passwordHash: hash,
        role: 'user',
        createdAt: new Date()
    })
}