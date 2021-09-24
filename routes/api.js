import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('api-rofex-data');
});
export default router;
