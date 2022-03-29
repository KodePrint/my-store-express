const {createProfileScheme, updateProfileScheme} = require('./profileSchema')
const {createAddressScheme, updateAddressScheme, getAddressScheme} = require('./addressSchema')
const Joi = require('joi');

const id = Joi.number();
const email = Joi.string();
const password = Joi.string();
const role = Joi.string();
const is_active = Joi.boolean();
const is_admin = Joi.boolean();
const is_staff = Joi.boolean();
const timestamp = +new Date();
const profile = updateProfileScheme;
const address = updateAddressScheme;

const createUserScheme = Joi.object({
    email: email.required(),
    password: password.required(),
    role:role.optional(),
    is_staff: is_staff.optional(),
    is_admin: is_admin.optional(),
    profile: profile.optional(),
    address: address.optional(),
})

const updateUserScheme = Joi.object({
  password: password.required(),
  role:role.optional(),
  is_active: is_active.optional(),
  is_staff: is_staff.optional(),
  is_admin: is_admin.optional(),
  updated: timestamp
})

const getUserScheme = Joi.object({
    id: id.required(),
})

module.exports = {createUserScheme, updateUserScheme, getUserScheme}
