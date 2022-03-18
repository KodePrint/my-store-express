const { config } = require('./../config/config');

// POSTGRES CONECTION
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// MYSQL CONECTION
const USER_MYSQL = encodeURIComponent(config.dbMysqlUser)
const _MYSQL = encodeURIComponent(config.dbPassword)
const URI_MYSQL = `mysql://${USER_MYSQL}:${_MYSQL}@${config.dbHost}:${config.dbMsqlPort}/${config.dbName}`

module.exports = {
  development: {
    url: URI_MYSQL,
    dialect: 'mysql'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  },
}
