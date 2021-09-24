import express from 'express';
import api from './api';

var router = express.Router();

router.use('/', api);

export default router;
