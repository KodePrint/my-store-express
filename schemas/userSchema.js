const Joi = require('joi');

const id = Joi.number();
const email = Joi.string().email();
const name = Joi.string().max(255);
const last_name = Joi.string().max(255);
const image = Joi.string().uri();
const is_active = Joi.boolean();
const is_admin = Joi.boolean();
const is_staff = Joi.boolean();
const password = Joi.string();
const role = Joi.string();

const createUserScheme = Joi.object({
    email: email.required(),
    name: name.required(),
    last_name: last_name.required(),
    image: image.required(),
    password: password.required(),
    role:role.required(),
    is_staff: is_staff.optional(),
    is_admin: is_admin.optional()
})

const updateUserScheme = Joi.object({
    email: email,
    name: name,
    last_name: last_name,
    image: image,
    is_active: is_active,
    password: password,
    role:role
})

const getUserScheme = Joi.object({
    id: id.required(),
})

module.exports = {createUserScheme, updateUserScheme, getUserScheme}
