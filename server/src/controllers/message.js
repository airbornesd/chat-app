import Message from '../models/message.js';
import { sendResponse } from '../utils/helpers.js';

export const createMessage = async (req, res) => {
  try {
    const { from, to, message } = req.body;
    const data = new Message({ from, to, message });
    await data.save();
    sendResponse(res, 200, 'success', data);
  } catch (e) {
    console.error('error creating message: ', e.message);
    sendResponse(res, 400, 'error creating message', null, e.message);
  }
};

export const getMessageByUserId = async (req, res) => {
  try {
    const message = await Message.find({
      to: req.params.id,
    }).sort({ _id: -1 });

    sendResponse(res, 200, 'success', message);
  } catch (error) {
    console.error('error fetching messages: ', e.message);
    sendResponse(res, 400, 'error fetching message', null, e.message);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    sendResponse(res, 200, 'success', messages);
  } catch (e) {
    console.error('error fetching all messages');
    sendResponse(res, 400, 'error fetching all messages', null, e.message);
  }
};

export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    sendResponse(res, 200, 'success', message);
  } catch (error) {
    console.error('error fetching message');
    sendResponse(res, 400, 'error fetching message', null, e.message);
  }
};
