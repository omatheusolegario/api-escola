const Sequelize = require('sequelize');

const sequelize = new Sequelize('escola', 'api-escola', 'api@escol4', {
    host: "localhost",
    port: "3306",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

