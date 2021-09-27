import { Router } from 'express';
const router = Router();
import matbaController from '../controllers/matba.controller.js';

router.get('/login', matbaController.login);
router.get('/instruments', matbaController.instruments);
router.get('/instruments/details', matbaController.instrumentsDetails);
router.get('/instrument/details', matbaController.instrumentDetails);

export default router;
