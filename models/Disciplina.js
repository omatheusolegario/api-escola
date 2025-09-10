const db = require('./db.js');

const Disciplina = db.sequelize.define('disciplina', {

    id_disciplina: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    descricao: {
        type: db.Sequelize.TEXT
    },

    nomeDisciplina: {
        type: db.Sequelize.TEXT
    }

}, { freezeTableName: true });

//Disciplina.sync({ force: false });

module.exports = Disciplina;


