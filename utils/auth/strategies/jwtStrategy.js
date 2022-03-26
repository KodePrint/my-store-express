const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom')
const JwtStrategy = require('passport-jwt/lib/strategy');

const { config } = require('../../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretJwt
};

const JwtStrtategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = JwtStrtategy;
