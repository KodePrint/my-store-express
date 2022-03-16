const Joi = require('joi');

const id = Joi.number();
const postalCode = Joi.string();
const country = Joi.string();
const city = Joi.string();
const description = Joi.string();
const reference = Joi.string();
const userId = Joi.number().integer();
const state = Joi.boolean();
const timestamp = +new Date();

const createAddressScheme = Joi.object({
    postalCode: postalCode.required(),
    country: country.required(),
    city: city.required(),
    description: description.required(),
    reference: reference.optional(),
    userId: userId.required()
})

const updateAddressScheme = Joi.object({
    postalCode: postalCode.optional(),
    country: country.optional(),
    city: city.optional(),
    description: description.optional(),
    reference: reference.optional(),
    userId: userId.optional(),
    updated: timestamp
})

const getAddressScheme = Joi.object({
    id: id.required(),
})

module.exports = {createAddressScheme, updateAddressScheme, getAddressScheme}
