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

const allowedOrigins = [
  'https://jal-pte-aranda2023-front1.vercel.app',
  'https://containers-us-west-88.railway.app:5586',
  'http://localhost:5173',
  'https://api.ipify.org?format=json'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(userRoutes);
app.use(votoRoutes);
app.use(candidatosRoutes);
app.use(resultadosRoutes);

export default app;
