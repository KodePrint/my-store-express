const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(150);
const description = Joi.string().min(3).max(256);

const createCategory = Joi.object({
    name:name.required(),
    description:description.optional(),
})

const updateCategory = Joi.object({
    name:name.optional(),
    description:description.optional(),
})

const getCategory = Joi.object({
    id:id.required(),
})

module.exports = { createCategory, updateCategory, getCategory }