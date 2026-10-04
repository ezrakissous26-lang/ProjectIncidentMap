import express from 'express'
import { checkBodyUserRegister } from '../middleware/user.middleware.js'
import { registerController } from '../controllers/auth.ctrl.js'

export const router = express.Router()

router.post('/auth/register', checkBodyUserRegister, registerController)