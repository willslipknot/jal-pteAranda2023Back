import { createVoto } from '../controllers/voto.controllers.js'
import { Router } from "express";


const router = Router()

router.post('/voto', createVoto);

export default router