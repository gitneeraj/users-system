import express from 'express';

import { login, logout } from '../controllers/auth';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Inside Auth');
});

router.post('/login', login);
router.post('/logout', logout);

export default router;
