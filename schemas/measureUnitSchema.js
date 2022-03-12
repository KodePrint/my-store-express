const Joi = require('joi');

const id = Joi.number();
const description = Joi.string().max(256);
const state = Joi.boolean().default(true);
const created_at = Joi.date();
const updated_at = Joi.date();

const createMeasureUnit = Joi.object({
    description:description.required(),
})

const updateMeasureUnit = Joi.object({
    description:description.optional(),
    state:state.optional(),
})

const getMeasureUnit = Joi.object({
    id:id.required(),
})

module.exports = { createMeasureUnit, updateMeasureUnit, getMeasureUnit }
