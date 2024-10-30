import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import indexRoutes from './route/index.route'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo desde TypeScript!');
});

app.use('/api/', indexRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});