const express = require('express');
const passport = require('passport')

const router = express.Router()

// Realiza la verificacion del login de usuario
router.post('/login',
  passport.authenticate('local', {session: false}),
  async(req, res, next) => {
      try {
        res.json(req.user);
      } catch (error) {
          next(error)
      }
  }
);

module.exports = router
