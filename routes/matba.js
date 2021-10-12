import { Router } from 'express';
const router = Router();
import matbaController from '../controllers/matba.controller.js';

router.get('/login', matbaController.login);
router.get('/instruments', matbaController.instruments);
router.get('/instruments/details', matbaController.instrumentsDetails);
router.get('/instrument/details', matbaController.instrumentDetails);
router.get('/instrument/history', matbaController.instrumentHistory);
router.get('/instrument/intraday', matbaController.instrumentIntraday);
router.get('/instrument/Quarter', matbaController.instrumentQuarter);

export default router;
