import joi from 'joi';

export const createUser = joi.object({
  email: joi.string().email().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});

export const loginUser = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});
