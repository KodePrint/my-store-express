const express = require('express');
const boom = require('@hapi/boom')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const { config } = require('../config/config')
const AuthService = require('../services/authService')

const router = express.Router();
const service = new AuthService();

// Realiza la verificacion del login de usuario
router.post('/login',
  passport.authenticate('local', {session: false}),
  async(req, res, next) => {
    const user = req.user;
    try {
      const tokensInfo = await service.createTokens(user)
      res.json({user, 
        accesToken: tokensInfo.token,
        refreshToken: tokensInfo.refreshToken
      })
    } catch (error) {
        next(error)
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body
    } catch (error) {
      next(error)
    }
  }
)

router.post('/refresh-token',
  async (req, res, next) => {
    // Obtenemos el token del header pero lo ideal seria que se guardase en la base de datos
    const refreshToken = req.headers.refresh
    if (!refreshToken) {
      throw boom.badRequest()
    }
    try {
      const newToken = await service.refreshToken(refreshToken)
      res.status(201).json(newToken)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
