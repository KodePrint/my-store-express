const Joi = require('joi');

const id = Joi.number();
const postal_code = Joi.string();
const country = Joi.string();
const city = Joi.string();
const description = Joi.string();
const reference = Joi.string();
const profile_id = Joi.number().integer();
const state = Joi.boolean();
const timestamp = +new Date();

const createAddressScheme = Joi.object({
    postal_code: postal_code.required(),
    country: country.required(),
    city: city.required(),
    description: description.required(),
    reference: reference.optional(),
    profile_id: profile_id.required()
})

const updateAddressScheme = Joi.object({
    postal_code: postal_code.optional(),
    country: country.optional(),
    city: city.optional(),
    description: description.optional(),
    reference: reference.optional(),
    profile_id: profile_id.optional(),
    updated: timestamp
})

const getAddressScheme = Joi.object({
    id: id.required(),
})

module.exports = {createAddressScheme, updateAddressScheme, getAddressScheme}
