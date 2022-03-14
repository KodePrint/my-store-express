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


const createCustomerScheme = Joi.object({
  email: email.required(),
  name: name.required(),
  last_name: last_name.required(),
  image: image.required(),
  phone: phone.required(),
  address1: address1.required(),
  address2: address2.required(),
  state: state.required(),
})

const updateCustomerScheme = Joi.object({
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

const getCustomerScheme = Joi.object({
  id: id.required(),
})
