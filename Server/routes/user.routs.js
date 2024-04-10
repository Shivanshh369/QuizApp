import { Router } from 'express'
import {navres,about} from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.get('/', navres )
userRouter.get('/about', about )

export default userRouter
