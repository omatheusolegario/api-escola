const db = require('./db.js');
const Disciplina = require('./Disciplina.js');

const Professor = db.sequelize.define('professor', {

    id_professor: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    fk_disciplina: {
        type: db.Sequelize.INTEGER,
        references: { model: 'disciplina', key: 'id_disciplina' },
        onDelete: 'CASCADE',
        allowNull: false,
    },

    nome: {
        type: db.Sequelize.TEXT
    }


}, { freezeTableName: true });

//Professor.sync({ force: false});

Professor.belongsTo(Disciplina, { foreignKey: 'fk_disciplina', as: 'disciplina' });

module.exports = Professor;



