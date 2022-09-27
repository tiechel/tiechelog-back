import { helloHandler } from './helloHandler';
import { rootHandler } from './rootHandler';
import Router from 'express-promise-router';

export const router = Router();

router.get('/', rootHandler);
router.get('/hello/:name', helloHandler);
