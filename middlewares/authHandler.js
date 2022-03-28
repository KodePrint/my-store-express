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

function checkAdminRole(req, res, next) {
  console.log(req.user)
  const user = req.user;
  if (user.role != 'admin') {
    next(boom.forbidden('unauthorized, you need administrator permissions..!'))
  }
  next()
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    console.log('Rol permision: ' + roles);
    console.log('User Role: ' + user.role)
    if (!roles.includes(user.role)) {
      next(boom.forbidden('unauthorized, you need administrator permissions..!'));
    }
    next();
  }
}

module.exports = {checkApiKey, checkAdminRole, checkRoles}
