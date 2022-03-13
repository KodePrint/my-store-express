require('dotenv').config();

const config = {
    evn: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbMysqlUser: process.env.MYSQL_USER,
    dbMsqlPort: process.env.MYSQL_PORT,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}

module.exports = {config}
