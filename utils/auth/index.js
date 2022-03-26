const passport = require('passport')

const LocalStrategy = require('./strategies/localStrategy')

const pasport = passport.use(LocalStrategy);

module.exports = {passport}

