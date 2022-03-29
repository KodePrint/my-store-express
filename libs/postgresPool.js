const { Pool } = require('pg');
const {config} = require('../config/config');

const options = {};

if (config.isProd) {
    options.connectionString = config.dbUrl;
    options.dialect = 'postgres',
    options.dialectOptions = {ssl: {require:true, rejectUnauthorized:false}}
}


const pool = new Pool(options);

module.exports = pool;
