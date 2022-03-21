const { Pool } = require('pg');
const {config} = require('../config/config');

const options = {};

if (config.isProd) {
    options.connectionString = config.dbUrl;
    optons.dialectOptions: {
	ssl: {rejectUnauthorized:false}
    }
}


const pool = new Pool(options);

module.exports = pool;
