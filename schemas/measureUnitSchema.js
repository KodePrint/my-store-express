const Joi = require('joi');

const id = Joi.number();
const description = Joi.string().min(3).max(256);

const createMeasureUnit = Joi.object({
    description:description.required(),
})

const updateMeasureUnit = Joi.object({
    description:description.optional(),
})

const getMeasureUnit = Joi.object({
    id:id.required(),
})

module.exports = { createMeasureUnit, updateMeasureUnit, getMeasureUnit }