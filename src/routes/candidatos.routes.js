import express from 'express';
import { getCandidato, getCand } from '../controllers/candidatos.controllers.js';

const router = express.Router();

router.get('/candidatos/:partido', getCandidato);

router.get('/candidato/:id', getCand);

export default router;
