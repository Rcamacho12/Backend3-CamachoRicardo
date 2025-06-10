import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import { connectDB } from './config/db.config.js';
import usersRouter from './routes/users.routes.js';
import petsRouter from './routes/pets.routes.js';
import mocksRouter from './routes/mocks.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Conectar a Mongo
connectDB();

// Montar routers
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/mocks', mocksRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server en http://localhost:${PORT}`));
