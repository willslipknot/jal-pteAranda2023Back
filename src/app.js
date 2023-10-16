import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import votoRoutes from './routes/voto.routes.js'
import candidatosRoutes from './routes/candidatos.routes.js'
import resultadosRoutes from './routes/resultados.routes.js'

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(userRoutes);
app.use(votoRoutes);
app.use(candidatosRoutes);
app.use(resultadosRoutes);

export default app;