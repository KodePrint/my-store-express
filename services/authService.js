const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')


const UserService = require('./usersService');
const { config } = require('../config/config');

const service = new UserService()

class AuthService {

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
