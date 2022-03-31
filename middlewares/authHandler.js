const boom = require('@hapi/boom');
const { config } = require('../config/config')

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (!apiKey) {
      return next(boom.forbidden('prohibited, you must login as administrator to get a valid token..!'))
  }
  if (apiKey === config.apiKey) {
      next();
  } else {
      next(boom.unauthorized('unauthorized, the provided token is not correct..!'))
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (!roles.includes(user.role)) {
      next(boom.forbidden('unauthorized, you need administrator permissions..!'));
    }
    next();
  }
}

module.exports = {checkApiKey, checkRoles}
