const { config, postgresUrl } = require('./../config/config');

const USER = encodeURIComponent(config.dbMysqlUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbMsqlPort}/${config.dbName}`

console.log(postgresUrl)

module.exports = {
  development: {
    url: postgresUrl,
    dialect: 'postgres'
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
	ssl: {
	    require: true,
	    rejectUnauthorized: false
	}
    }
  },
}
