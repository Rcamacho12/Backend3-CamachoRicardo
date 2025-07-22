import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.config.js';
import swaggerRouter from './config/swagger.js';
import usersRouter from './routes/users.routes.js';
import petsRouter from './routes/pets.routes.js';
import mocksRouter from './routes/mocks.routes.js';
import adoptionRouter from './routes/adoption.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use('/api/docs', swaggerRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/adoptions', adoptionRouter);

export default app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`🚀 Server en http://localhost:${PORT}`));
}