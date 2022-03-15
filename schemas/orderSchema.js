const Joi = require('joi');

const id = Joi.number();
const userId = Joi.number().integer();
const state = Joi.number().integer();
const timestamp = +new Date();


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

module.exports = {createOrderScheme, updateOrderScheme, getOrderScheme}