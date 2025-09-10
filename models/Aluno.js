const db = require('./db.js');
const Turma = require('./Turma.js');

const Aluno = db.sequelize.define('aluno', {

    cod_matricula: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    fk_turma: {
        type: db.Sequelize.INTEGER,
        references: { model: 'turma', key: 'id_turma' },
        onDelete: 'CASCADE',
        allowNull: false,
    },

    nome: {
        type: db.Sequelize.TEXT
    },

    dataMatricula: {
        type: db.Sequelize.DATE,
    }

}, { freezeTableName: true });

//Aluno.sync({ force: false });

Aluno.belongsTo(Turma, { foreignKey: 'fk_turma', as: 'turma' });

module.exports = Aluno;
