import { register, verifyToken } from "../controllers/user.controller.js"
import { Router } from "express";
import {validateSchema} from '../middlewares/validator.Middleware.js'
import {registerSchema} from '../schemas/user.Schema.js'
import {login} from '../controllers/admin.controllers.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register);

router.post('/login', login);

router.get('/verify', verifyToken)

export default router