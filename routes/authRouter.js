const express = require('express');
const passport = require('passport')
const jwt = require('jsonwebtoken')

const { config } = require('../config/config')

const router = express.Router()

// Realiza la verificacion del login de usuario
router.post('/login',
  passport.authenticate('local', {session: false}),
  async(req, res, next) => {
    const user = req.user;
    try {
      const payload = {
        sub: user.id,
        role: user.role,
        expireIn: config.expireJwt
      }
      const token = jwt.sign(payload, config.secretJwt);
      res.json({user, token});
    } catch (error) {
        next(error)
    }
  }
);

module.exports = router
