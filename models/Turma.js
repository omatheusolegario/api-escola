const db = require('./db.js');

const Turma = db.sequelize.define('turma', {

    id_turma: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    fk_sala: {
        type: db.Sequelize.INTEGER,
        references: { model: 'sala', key: 'id_sala' },
        onDelete: 'CASCADE',
        allowNull: false,
    },

    nomeTurma: {
        type: db.Sequelize.TEXT,
    },

    periodo: {
        type: db.Sequelize.ENUM("manha", "tarde"),
        allowNull: false,
        defaultValue: "manha",
    }

}, { freezeTableName: true });

//Turma.sync({ force: false });

module.exports = Turma;

