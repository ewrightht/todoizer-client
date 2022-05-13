const Joi = require('joi');
const bcrypt = require('bcrypt');

const generateId = require('../../../lib/generateid');
const validateSchema = require('../../../lib/validate.schema');
const { registerUserDao, getUserByEmailDao } = require('../dao/access.dao');

const USER_SCHEMA = Joi.object({
  user_id: Joi.string().max(15).required(),
  user_name: Joi.string().max(15).required(),
  user_email: Joi.string().max(30).required(),
  user_password: Joi.string().required()
});

async function registerUserModel(user) {
  const user_id = generateId('U');
  const email = await getUserByEmailDao(user.user_email);

  if (email.length > 0) {
    throw new Error('The email you are trying to use already exists.');
  }

  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(user.user_password, salt);

  user.user_id = user_id;
  user.user_password = hash;

  delete user.user_confirm_password;

  validateSchema(USER_SCHEMA, user);
  await registerUserDao(user);

  return {};
}

async function loginUserModel(payload) {
  return payload;
}

module.exports = {
  registerUserModel,
  loginUserModel
};