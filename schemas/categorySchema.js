const Joi = require('joi');

const id = Joi.number();
const description = Joi.string().max(255);
const state = Joi.boolean().default(true);
const created = Joi.date();
const updated = Joi.date();


const createCategory = Joi.object({
    description:description.required().max(255),
})

const updateCategory = Joi.object({
    description:description.required().max(255),
    state:state.optional(),
})

const getCategory = Joi.object({
    id:id.required(),
})

module.exports = { createCategory, updateCategory, getCategory }
