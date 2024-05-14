import { Router } from 'express';
import * as controller from '../controllers/user.js';
import * as validation from '../validations/user.js';
import { validate } from '../utils/helpers.js';

const router = Router();

// router.get('/', controller.getUsers);
// router.get('/', controller.getUserById);
router.post('/', validate(validation.createUser), controller.createUser);
router.post('/login', validate(validation.loginUser), controller.loginUser);

export default router;
