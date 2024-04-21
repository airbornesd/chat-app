import { Router } from 'express';
import userRoutes from './user.js';
import messageRoutes from './message.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/message', messageRoutes);

export default router;
