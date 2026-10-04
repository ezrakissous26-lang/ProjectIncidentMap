import { userRegister } from "../schemas/user.schema.js";

export async function checkBodyUserRegister(req, res, next) {
    try {
        await userRegister.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({
            error: `Invalid ${error.issues.map(item => item.path[0] || item.message).join(', ')}`
        })
    }
}