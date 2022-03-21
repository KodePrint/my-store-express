const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(120);
const description = Joi.string().max(255);
const image = Joi.string().uri();
const price = Joi.number().precision(2);
const price_min = Joi.number().precision(2);
const price_max = Joi.number().precision(2);
const categoryId = Joi.number().integer();
const measureUnitId = Joi.number().integer();
const state = Joi.boolean().default(true);
const created_at = Joi.date();
const updated_at = Joi.date();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const timestamp = +new Date();

const createProductSchema = Joi.object({
    name: name.required(),
    description:description.required(),
    price: price.required(),
    image: image.required(),
    categoryId: categoryId.required(),
    measureUnitId: measureUnitId.required(),
})

const updateProductSchema = Joi.object({
    name: name.optional(),
    image: image.optional(),
    price: price.optional(),
    state: state.optional(),
    categoryId: categoryId.optional(),
    measureUnitId: measureUnitId.optional(),
    updated: timestamp
})

const getProductSchema = Joi.object({
    id: id.required(),
})
const queryProductSchema = Joi.object({
  limit: limit.optional(),
  offset: offset.optional(),
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().precision(2),
    then: Joi.required()
  })
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema}
