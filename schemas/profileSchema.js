const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const last_name = Joi.string();
const image = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();
const state = Joi.boolean();
const timestamp = +new Date();

const createProfileScheme = Joi.object({
    name: name.required(),
    last_name: last_name.required(),
    image: image.required(),
    phone: phone.required(),
    userId: userId.required()
})

const updateProfileScheme = Joi.object({
    name: name.required(),
    last_name: last_name.required(),
    image: image.required(),
    phone: phone.required(),
    state: state.optional(),
    updated: timestamp
})

const getProfileScheme = Joi.object({
    id: id.required(),
})

module.exports = {createProfileScheme, updateProfileScheme, getProfileScheme}
