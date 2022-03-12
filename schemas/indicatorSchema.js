const Joi = require('joi');

const id = Joi.number();
const descount = Joi.number().integer();

const createIndicator = Joi.object({
    descount:descount.required(),
})

const updateIndicator = Joi.object({
    descount:descount.optional(),
})

const getIndicator = Joi.object({
    id:id.required(),
})

module.exports = { createIndicator, updateIndicator, getIndicator }
