import cors from 'cors';
import express, { Request, Response } from 'express';
// import "express-async-errors";
import dotenv from 'dotenv';
import router from './routers/index.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
// app.use(HandleErrors)

export default app