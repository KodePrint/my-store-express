const jwt = require('jsonwebtoken')

const { config } = require('./config/config')

const secret = config.secretJwt;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0ODUxNzg1MywiZXhwIjoxNjQ4NTIxNDUzfQ.NGtUw4YnYIAOiHQ-QU7AFNgDQVvx_CzQjrAB2jbsFlw';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret)

console.log(payload)
