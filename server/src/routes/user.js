import { Router } from 'express';
import * as controller from '../controllers/user.js';

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.createUser);

export default router;
