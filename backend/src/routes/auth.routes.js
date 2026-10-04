import express from 'express'
import { checkBodyUserCredentials } from '../middleware/user.middleware.js'
import { loginController, registerController } from '../controllers/auth.controller.js'

export const router = express.Router()

router.post('/auth/register', checkBodyUserCredentials, registerController)

router.post('/auth/login', checkBodyUserCredentials, loginController)