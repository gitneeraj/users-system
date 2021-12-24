import express from 'express';

import { register, getAll } from '../controllers/users';

const router = express.Router();

router.get('/', getAll);
router.post('/register', register);

export default router;
