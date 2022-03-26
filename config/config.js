require('dotenv').config();


const config = {
    evn: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbMysqlUser: process.env.MYSQL_USER,
    dbMsqlPort: process.env.MYSQL_PORT,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbUrl: process.env.DATABASE_URL,
    apiKey: process.env.API_KEY,
    dbDevUrl: `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_NAME}`
}

module.exports = {config}
