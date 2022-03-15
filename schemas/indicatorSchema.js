const Joi = require('joi');

const id = Joi.number();
const discount = Joi.number().integer();
const state = Joi.boolean().default(true);
const created_at = Joi.date();
const updated_at = Joi.date();
const timestamp = +new Date();

const createIndicator = Joi.object({
    discount:discount.required(),
})

const updateIndicator = Joi.object({
    discount:discount.optional(),
    state:state.optional(),
    updated: timestamp
})

const getIndicator = Joi.object({
    id:id.required(),
})

module.exports = { createIndicator, updateIndicator, getIndicator }
