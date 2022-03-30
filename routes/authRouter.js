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
    try {
      const user = req.user;
      res.status(200).json(service.singToken(user))
    } catch (error) {
        next(error)
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body
      const rta = await service.sendRecovery(email)
      res.status(200).json(rta)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const changes = await service.changePassword(token, newPassword)
      res.status(200).json(changes)
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
