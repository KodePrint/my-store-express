const {Sequelize} = require('sequelize')
const {config} = require('../config/config');
const setUpModels = require('../db/models');
const {development, developmentMysql, production} = require('../db/config')

// // POSTGRES CONECTION
// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// const sequelize = new Sequelize(URI, {
//     dialect: 'postgres',
//     logging: false,
// });

// MYSQL CONECTION
// const USER = encodeURIComponent(config.dbMysqlUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbMsqlPort}/${config.dbName}`

const sequelize = new Sequelize(development.url, {
    dialect: development.dialect,
    logging: false,
});

setUpModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
