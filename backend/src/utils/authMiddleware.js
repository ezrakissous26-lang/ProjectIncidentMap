import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET

export function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({error: 'Authorization header required'})
    }

    const [type, token] = authHeader.split(' ')

    if (!token || type !== 'Bearer') {
        return res.status(401).json({error: 'Bearer token required'})
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded

        next()
    } catch (error) {
        return res.status(401).json({error: 'Invalid or expired token'})
    }
}