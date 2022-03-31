const { configs } = require('eslint-plugin-prettier');

require('dotenv').config();


const config = {
    evn: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    // Gobal DB Configuration
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    // Postges configuration
    dbUser: process.env.DB_USER,
    dbPort: process.env.DB_PORT,
    // MySQL Configuration
    dbMysqlUser: process.env.MYSQL_USER,
    dbMsqlPort: process.env.MYSQL_PORT,
    // Production db Configuration
    dbUrl: process.env.DATABASE_URL,

    apiKey: process.env.API_KEY,
    dbDevUrl: `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_NAME}`,
    secretJwt: process.env.SECRET_JWT,
    expireJwt: process.env.EXPIRE_JWT,
    secretRefreshJwt: process.env.REFRESH_JWT,
    expireJwtRefresh: process.env.EXPIRE_REFRESH_JWT,
    secretRecoveryhJwt: process.env.REFRESH_JWT,

    // Send email configuration
    email_backend: process.env.EMAIL_SEND,
    gmail_pass: process.env.PASSWORD_GMAIL_API,
}
const postgresUrl = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`
const mysqlUrl = `mysql://${config.dbMysqlUser}:${config.dbPassword}@${config.dbHost}:${config.dbMsqlPort}/${config.dbName}`
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-')

module.exports = {config, postgresUrl, mysqlUrl}
