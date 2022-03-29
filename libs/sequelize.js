const {Sequelize} = require('sequelize')
const {config, postgresUrl, mysqlUrl} = require('../config/config');
const setUpModels = require('../db/models');
const {development, developmentMysql, production} = require('../db/config')


const options = {
     dialect: 'postgres',
     logging: config.isProd ? false : true,
};

console.log("Production: " + config.isProd)

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
    const USER = encodeURIComponent(config.dbMysqlUser)
    const PASSWORD = encodeURIComponent(config.dbPassword)
    const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbMsqlPort}/${config.dbName}`

    const sequelize = new Sequelize(mysqlUrl, {
        dialect: 'mysql',
        logging: false,
    });

    setUpModels(sequelize);
    module.exports = sequelize;
}


// sequelize.sync();


