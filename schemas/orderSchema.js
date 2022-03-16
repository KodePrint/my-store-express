const Joi = require('joi');

const id = Joi.number();
const userId = Joi.number().integer();
const state = Joi.number().integer();
const timestamp = +new Date();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const createOrderScheme = Joi.object({
    userId: userId.required()
})

const updateOrderScheme = Joi.object({
  state: state.optional(),
  updated: timestamp
})

const getOrderScheme = Joi.object({
    id: id.required(),
})

const addItemScheme = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
})


module.exports = { addItemScheme, createOrderScheme, updateOrderScheme, getOrderScheme}