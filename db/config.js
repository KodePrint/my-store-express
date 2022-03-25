const { config } = require('./../config/config');

module.exports = {
  development: {
    url: config.dbDevUrl,
    dialect: 'mysql'
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
