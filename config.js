const config = require("./config/config.json")

//console.log(config)
module.exports = {
    user: config.development.username,
    password: config.development.password,
    host: config.development.host,
    port: config.development.port,
    database: config.development.database

}