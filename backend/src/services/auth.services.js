import { createUser, findByEmail } from "../repo/user.repo.js";
import { generateToken } from "../utils/generateToken.js";
import { comparePassword, hashingPassword } from "../utils/password.js";

export async function createUserService({ email, password }) {
    const user = await findByEmail(email)
    if(user) {
        const err = new Error('This user already exist, please login')
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

export async function loginService({ email, password }) {
    const user = await findByEmail(email)
    if(!user) {
        const err = new Error('This user not exist, please register')
        err.status = 409
        throw err
    }
    const isValid = await comparePassword(password, user.passwordHash)
    if (!isValid) {
        const err = new Error('Wrong password')
        err.status = 401
        throw err
    }
    const token = generateToken(user._id, user.role)
    return token
}