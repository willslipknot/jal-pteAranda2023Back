import { getCands } from '../controllers/resultados.controller.js';
import { Router } from "express";


const router = Router()

router.get('/resultados', getCands);

export default router