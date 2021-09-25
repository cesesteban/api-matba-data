import { Router } from 'express';
const router = Router();
import matbaController from '../controllers/matba.controller.js';

router.post('/login', matbaController.login);

export default router;
