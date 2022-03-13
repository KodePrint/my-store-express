const Joi = require('joi');

const id = Joi.number();
const password = Joi.string();
const role = Joi.string();
const is_active = Joi.boolean();
const is_admin = Joi.boolean();
const is_staff = Joi.boolean();
const userId = Joi.number();
const timestamp = +new Date();

const createUserScheme = Joi.object({
    password: password.required(),
    role:role.required(),
    is_staff: is_staff.optional(),
    is_admin: is_admin.optional(),
    userId: userId.required()
})

const updateUserScheme = Joi.object({
  password: password.required(),
  role:role.required(),
  is_active: is_active.optional(),
  is_staff: is_staff.optional(),
  is_admin: is_admin.optional(),
  userId: userId.required(),
  updated: timestamp
})

const getUserScheme = Joi.object({
    id: id.required(),
})

module.exports = {createUserScheme, updateUserScheme, getUserScheme}
