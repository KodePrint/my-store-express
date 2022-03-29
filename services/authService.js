const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')

const { config } = require('../config/config');
const { boomify } = require('@hapi/boom');


class AuthService {

  async createTokens(user) {
    const loginTokenPayload = {
      sub: user.id,
      role: user.role,
    }
    const refreshTokenPayload = {
      sub: user.id,
      role: user.role,
    }
    const accessToken = jwt.sign(loginTokenPayload, config.secretJwt, {expiresIn: config.expireJwt});
    const refreshToken = jwt.sign(refreshTokenPayload, config.secretJwt, {expiresIn: '3h'});

    const loginInfo = {
      user,
      accessToken,
      refreshToken
    }
    return loginInfo
  }
}

module.exports = AuthService
