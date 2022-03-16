const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const lastName = Joi.string();
const image = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();
const state = Joi.boolean();
const timestamp = +new Date();

const createProfileScheme = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    image: image.required(),
    phone: phone.required(),
    userId: userId.required()
})

const updateProfileScheme = Joi.object({
    name: name.optional(),
    lastName: lastName.optional(),
    image: image.optional(),
    phone: phone.optional(),
    state: state.optional(),
    updated: timestamp
})

const getProfileScheme = Joi.object({
    id: id.required(),
})

module.exports = {createProfileScheme, updateProfileScheme, getProfileScheme}
