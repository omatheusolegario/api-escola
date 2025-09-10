const db = require('./db.js');

const Sala = db.sequelize.define('sala', {

    id_sala: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    numeroSala: {
        type: db.Sequelize.INTEGER
    },

    predio: {
        type: db.Sequelize.INTEGER
    },

    capacidade: {
        type: db.Sequelize.INTEGER
    }

}, { freezeTableName: true });

//Sala.sync({ force: false });

module.exports = Sala;


