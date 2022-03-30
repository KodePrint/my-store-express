const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')
const nodemailer = require("nodemailer");

const UserService = require('./usersService');
const { config } = require('../config/config');
const { template } = require('../utils/mails/templateRecoveryMail')

const service = new UserService()

class AuthService {

  // Get user in the middleware local login
  async getUser(email, password) {
    const user = await service.getByEmail(email);
    if (!user) {
      // Si no existe el usuario se envia el error por boom
      throw boom.unauthorized();
    }
    if (!user.dataValues.isActive) {
      throw boom.forbidden();
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  // Crea un token para el usuario logueado
  singToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    }
    const token = jwt.sign(payload, config.secretJwt)
    return {
      user, 
      token
    }
  }

  // Envia un correo de con token para cambio de password
  async sendRecovery(email) {
    // Verificamos que el usuario exista
    const user = await service.getByEmail(email);
    if (!user) {
      // Si no existe el usuario se envia el error por boom
      throw boom.unauthorized();
    }
    if (!user.dataValues.isActive) {
      throw boom.forbidden();
    }
    const payload = {sub: user.id}
    const token = jwt.sign(payload, config.secretJwt, {expiresIn: '10min'})
    let link = ''
    if (config.isProd) {
      link = `http://myfrontend.com/recovery?token=${token}`
    } else {
      link = `http://localhost:3000/recovery?token=${token}`
    }
    await service.update(user.id, {recoveryToken: token})
    const mail = {
      from: `"KodePrint" <${config.email_backend}>`, // sender address
      to: `"Dear. ${user.name}" <${user.email}>`, // list of receivers
      subject: "Recovery Password🔑 ", // Subject line
      html: template(user, link), // html body
    }
    const response = await this.sendMail(mail)
    return response
  }

  // Realiza el cambio del password que envia el usuario por el Formulario
  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.secretJwt)
      console.log(payload)
      const user = await service.getOne(payload.sub)
      if (user.recoveryToken !== token) {
        throw boom.unauthorized('The token is no equal')
      }
      const hashPass = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, {recoveryToken: null, password: hashPass})
      return {
        message: `Password change successfull..!`
      }
    } catch (error) {
      throw boom.unauthorized()
    }
  }

  // Envia un email para recuperar contraseña
  async sendMail(infoMail) {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.email_backend, // generated ethereal user
        pass: config.gmail_pass, // generated ethereal password
      },
    });

    await transporter.sendMail(infoMail);
    return { message: 'mail sent..!'}
  }

  async createTokens(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    }
    const token = jwt.sign(payload, config.secretJwt, {expiresIn: config.expireJwt});
    const refreshToken = jwt.sign(payload, config.refreshJwt, {expiresIn: config.expireJwtRefresh});
    return {token, refreshToken}
  }

  async refreshToken(refreshToken) {
    if (!refreshToken) {
      throw boom.forbidden('Se a desconectado de la sesion, Inicie sesion nuevamente..!')
    }
    const verifyResult = jwt.verify(refreshToken, config.refreshJwt);
    if (new Date().getDate() > (verifyResult.exp * 1000)) {
      throw boom.forbidden('Se a desconectado de la sesion, Inicie sesion nuevamente..!')
    }
    const payload = {
      sub: verifyResult.sub,
      role: verifyResult.role,
    }
    const token = jwt.sign(payload, config.secretJwt, {expiresIn: config.expireJwt});
    return {accesToken: token}
  }
}

module.exports = AuthService
