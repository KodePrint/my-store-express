const {UserSchema, User} = require('./userModel')

function setUpModels (sequelize) {
    User.init(UserSchema, User.config(sequelize))
}

module.exports = setUpModels;