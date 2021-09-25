import express from 'express';
import api from './api';
import matba from './matba';

var router = express.Router();

router.use('/', api);
router.use('/matba', matba);

export default router;
