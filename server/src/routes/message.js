import { Router } from 'express';
import * as controller from '../controllers/message.js';

const router = Router();

router.post('/', controller.createMessage);
router.get('/', controller.getMessages);
router.get('/:id', controller.getMessageByUserId);
router.get('/:id/message', controller.getMessageById);

export default router;
