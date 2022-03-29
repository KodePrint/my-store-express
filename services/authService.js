const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')

const { config } = require('../config/config');
const { boomify } = require('@hapi/boom');


class AuthService {

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
