const jwt = require('jsonwebtoken')

const { config } = require('./config/config')

const secret = config.secretJwt;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0ODI3Mjc1M30.z4c4iW3hd-kT5fOjm2hP-OBJFqPoSkjPlSFTkZCVOZI';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret)

console.log(payload)
