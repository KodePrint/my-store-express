const Joi = require('joi');

const id = Joi.number();
const descount = Joi.number().integer();
const state = Joi.boolean().default(true);
const created_at = Joi.date();
const updated_at = Joi.date();

const createIndicator = Joi.object({
    descount:descount.required(),
})

const updateIndicator = Joi.object({
    descount:descount.optional(),
    state:state.optional(),
})

const getIndicator = Joi.object({
    id:id.required(),
})

module.exports = { createIndicator, updateIndicator, getIndicator }
