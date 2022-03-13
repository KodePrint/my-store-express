const Joi = require('joi');

const id = Joi.number();
const email = Joi.string().email();
const name = Joi.string().max(255);
const last_name = Joi.string().max(255);
const image = Joi.string().uri();
const phone = Joi.string().min(6).max(20);
const address1 = Joi.string().max(255);
const address2 = Joi.string().max(255);
const state = Joi.boolean();
const timestamp = +new Date();


const createUserScheme = Joi.object({
  email: email.require(),
  name: name.require(),
  last_name: last_name.require(),
  image: image.require(),
  phone: phone.require(),
  address1: address1.require(),
  address2: address2.require(),
  state: state.require(),
})

const updateUserScheme = Joi.object({
  email: email.optional(),
  name: name.optional(),
  last_name: last_name.optional(),
  image: image.optional(),
  phone: phone.optional(),
  address1: address1.optional(),
  address2: address2.optional(),
  state: state.optional(),
  timestamp: timestamp
})

const getUserScheme = Joi.object({
  id: id.required(),
})
