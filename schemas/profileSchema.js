const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const lastName = Joi.string();
const image = Joi.string();
const phone = Joi.string();
const email = Joi.string();
const password = Joi.string();
const userId = Joi.number().integer();
const state = Joi.boolean();
const timestamp = +new Date();

const createProfileScheme = Joi.object({
    name: name.required(),
    lastName: lastName.optional(),
    image: image.required(),
    phone: phone.required(),
    user: Joi.object({
      email: email.required(),
      password: password.required(),
    })
})

const updateProfileScheme = Joi.object({
    name: name.optional(),
    lastName: lastName.optional(),
    image: image.optional(),
    phone: phone.optional(),
    state: state.optional(),
    user: Joi.object({
      password: password.optional(),
    }),
    updated: timestamp
})

const getProfileScheme = Joi.object({
    id: id.required(),
})

module.exports = {createProfileScheme, updateProfileScheme, getProfileScheme}
