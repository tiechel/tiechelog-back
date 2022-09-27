import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { router } from './handlers';
import { notFound, serverError } from './middlewares/errorHandler';

export const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use(notFound);
app.use(serverError);
