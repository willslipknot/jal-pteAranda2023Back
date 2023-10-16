import { register } from "../controllers/user.controller.js"
import { Router } from "express";
import {validateSchema} from '../middlewares/validator.Middleware.js'
import {registerSchema} from '../schemas/user.Schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register);

export default router