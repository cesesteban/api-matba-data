import { Router } from 'express';
const router = Router();
import matbaController from '../controllers/matba.controller.js';

router.get('/login', matbaController.login);
router.get('/instruments', matbaController.instruments);

export default router;
