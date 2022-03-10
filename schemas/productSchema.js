const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(150);
const image = Joi.string().uri();
const price = Joi.number().integer().min(10);
const category = Joi.number().positive().integer();
const state = Joi.boolean().truthy('yes');

const createProductSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    price: price.required(),
    category: category.required(),
    state: state,
})

const updateProductSchema = Joi.object({
    name: name,
    image: image,
    price: price,
    category: category,
    state: state,
})

const getProductSchema = Joi.object({
    id: id.required(),
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
