import express from 'express'
import { checkBodyUserCredentials } from '../middleware/user.middleware.js'
import { loginController, meController, registerController } from '../controllers/auth.controller.js'
import { authMiddleware } from '../utils/authMiddleware.js'

export const router = express.Router()

router.post('/auth/register', checkBodyUserCredentials, registerController)

router.post('/auth/login', checkBodyUserCredentials, loginController)

router.get('/auth/me', authMiddleware, meController)