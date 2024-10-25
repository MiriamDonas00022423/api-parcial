import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.routes.js';
const app = express();
//settings
app.set('port', process.env.PORT || 4000);
//middleware: funciones que se ejecutan antes que lleguen a las rutas o URLS
//middleware: cors para que servidores intercambien datos
app.use(cors());
app.use(express.json());
//routes
app.use('/api/users', usersRouter);

export default app;