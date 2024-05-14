import User from '../models/user.js';
import { sendResponse } from '../utils/helpers.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    sendResponse(res, 200, 'success', users);
  } catch (e) {
    console.error('no user found ', e.message);
    sendResponse(res, 400, 'user not found', null, e.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) return sendResponse(res, 400, 'email/username already in use');

    const data = new User({ email, username, password });
    await data.save();

    sendResponse(res, 200, 'success');
  } catch (e) {
    console.error('error creating user: ', e.message);
    sendResponse(res, 404, 'error creating user', null, e.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    sendResponse(res, 200, 'success', user);
  } catch (e) {
    console.error('no user found ', e.message);
    sendResponse(res, 400, 'user not found', null, e.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username,
      password,
    });

    if (!user) return sendResponse(res, 400, 'no user found');

    sendResponse(res, 200, 'success');
  } catch (e) {
    console.error('no user found', e.message);
    sendResponse(res, 400, 'error', null, e.message);
  }
};
