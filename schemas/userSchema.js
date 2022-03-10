const Joi = require('joi');

const id = Joi.number();
const email = Joi.string().email();
const name = Joi.string().max(255);
const last_name = Joi.string().max(255);
const image = Joi.string().uri();
const is_active = Joi.boolean();
const password = Joi.string();

const createUserScheme = Joi.object({
    email: email.required(),
    name: name.required(),
    last_name: last_name.required(),
    image: image.required(),
    is_active: is_active.default(true),
    password: password.required()
})

const updateUserScheme = Joi.object({
    email: email,
    name: name,
    last_name: last_name,
    image: image,
    is_active: is_active,
    password: password
})

const getUserScheme = Joi.object({
    id: id.required(),
})

module.exports = {createUserScheme, updateUserScheme, getUserScheme}