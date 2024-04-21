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
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();

    sendResponse(res, 200, 'success', user);
  } catch (e) {
    console.error('error creating user: ', e.message);
    sendResponse(res, 400, 'error creating user', null, e.message);
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
