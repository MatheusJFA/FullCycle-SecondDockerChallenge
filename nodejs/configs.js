const server = {
    port: 3000
}

const database = {
    host: 'db',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

module.exports = {server, database};