const {Sequelize} = require('sequelize')
const {config} = require('../config/config');
const setUpModels = require('../db/models');
const {development, developmentMysql, production} = require('../db/config')

const options = {
     dialect: 'postges',
     loggin: config.isProd ? false : true,
};

console.log(config.dbDevUrl)

console.log(config.isProd)
if (config.isProd) {
    options.ssl = false
    options.dialectOptions = {
	ssl: {
	    require: true,
	    rejectUnauthorized: false
    	}
    }
}

if (config.isProd) {
    const sequelize = new Sequelize(config.dbUrl, options);
    setUpModels(sequelize);
    module.exports = sequelize;
} else {
    const sequelize = new Sequelize(config.dbDevUrl, {dialect: 'mysql', logging: false})
    setUpModels(sequelize);
    module.exports = sequelize;
}


// sequelize.sync();


