const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const last_name = Joi.string();
const image = Joi.string();
const phone = Joi.string();
const user_id = Joi.number().integer();
const state = Joi.boolean();
const timestamp = +new Date();

const createProfileScheme = Joi.object({
    name: name.required(),
    last_name: last_name.required(),
    image: image.required(),
    phone: phone.required(),
    user_id: user_id.required()
})

const updateProfileScheme = Joi.object({
    name: name.required(),
    last_name: last_name.required(),
    image: image.required(),
    phone: phone.required(),
    user_id: user_id.required(),
    state: state.optional(),
    updated: timestamp
})

const getProfileScheme = Joi.object({
    id: id.required(),
})

module.exports = {createProfileScheme, updateProfileScheme, getProfileScheme}
