const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom')
const JwtStrategy = require('passport-jwt/lib/strategy');

const { config } = require('../../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretJwt
};

const JwtStrtategy = new Strategy(options, (payload, done) => {
  const creado = new Date(payload.iat)
  console.log('Tiempo Actual: ' + new Date())
  console.log('Tiempo Creacion: ' + creado)
  const timeTOken = new Date().getTime() - creado.getTime()
  console.log('Tiempo de vida: ' + timeTOken)
  console.log('Tiempo de expiracion: '+parseInt(payload.expireIn))
  // if (timeTOken > parseInt(payload.expireIn)){
  //   throw boom.forbidden('This Toke is expired..!')
  // }
  return done(null, payload);
});

module.exports = JwtStrtategy;
