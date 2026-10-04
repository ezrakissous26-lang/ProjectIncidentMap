import { createUserService, loginService } from "../services/auth.services.js"

export async function registerController(req, res, next) {
    try {
        await createUserService(req.body)

        return res.status(201).json({message: 'User created successfully'})
    } catch (error) {
        next(error)
    }
}

export async function loginController(req, res, next) {
    try {
        const token = await loginService(req.body)
        return res.status(200).json({ token })
    } catch (error) {
        next(error)
    }
}

export async function meController(req, res, next) {
    const { id, role } = req.user
    return res.status(200).json({ userId: id, role})
}