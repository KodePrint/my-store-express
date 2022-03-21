const { config } = require('./../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres'
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    ssl: false,
    dialectOptions: {
	ssl: {
	    require: true,
	    rejectUnautorized: false
	}
    }
  },
}
