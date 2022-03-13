const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(120);
const description = Joi.string().max(255);
const image = Joi.string().uri();
const price = Joi.number().integer().min(10);
// const category = Joi.number().integer();
// const category = Joi.number().integer();
const state = Joi.boolean().default(true);
const created_at = Joi.date();
const updated_at = Joi.date();

const createProductSchema = Joi.object({
    name: name.required(),
    description:description.required(),
    price: price.required(),
    image: image.required(),
    // category: category.required(),
})

const updateProductSchema = Joi.object({
    name: name.optional(),
    image: image.optional(),
    price: price.optional(),
    // category: category.optional(),
    state: state.optional(),
})

const getProductSchema = Joi.object({
    id: id.required(),
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
