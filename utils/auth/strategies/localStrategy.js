const { Strategy } = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')


const UsersService = require('../../../services/usersService')
const service = new UsersService()
const options = {
  usernameField: 'email',
  passwordField: 'password'
}

const LocalStrategy = new Strategy(
  options,
  async (email, password, done) => {
    try {
      const user = await service.getByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false)
      }
      if (!user.dataValues.isActive) {
        done(boom.forbidden(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        done(boom.unauthorized(), false)
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
