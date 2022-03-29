const jwt = require('jsonwebtoken')

const { config } = require('./config/config')

const secret = config.secretJwt;
const jwtConfig = {
  expiresIn: '1h',
};
const payload = {
  sub: 1,
  role: 'customer'
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret, jwtConfig);
}

const token = signToken(payload, secret)

console.log(token)
