import request from 'supertest';
import { app } from '../src/app';

export const headers = { 'Content-Type': 'application/json' };
export const server = request(app);
