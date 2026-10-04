import { createUserService } from "../services/user.services.js"

export async function registerController(req, res, next) {
    try {
        await createUserService(req.body)

        return res.status(201).json({message: 'User created successfully'})
    } catch (error) {
        next(error)
    }
}