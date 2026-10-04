import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET

export function generateToken(userId, role) {
    return jwt.sign({ id: userId, role }, JWT_SECRET, {expiresIn: '1d'})
}