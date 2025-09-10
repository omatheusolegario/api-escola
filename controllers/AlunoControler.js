const express = require('express');
const router = express.Router();

const Aluno = require("../models/Aluno");
const Turma = require("../models/Turma")

router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll({
        include: [{
            model: Turma,
            as: 'turma',
            attributes: ['nomeTurma', 'periodo'],
            required: true
        }],
        attributes: ['cod_matricula', 'nome', 'dataMatricula']
    });

    res.status(200).json(alunos);
});


router.post('/', async (req, res) => {
    const { nome } = req.body;
    const { fk_turma } = req.body;
    const { dataMatricula } = req.body;
    const newEdit = await Aluno.create({ nome, fk_turma, dataMatricula });
    res.status(200).json({ message: 'Aluno cadastrado!' })
});

router.get('/:id', async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id, {
        include: [{
            model: Turma,
            as: 'turma',
            attributes: ['nomeTurma', 'periodo'],
            required: true
        }],
        attributes: ['cod_matricula', 'nome', 'dataMatricula']
    });

    res.status(200).json(aluno);
})

router.delete('/:id', async (req, res) => {
    await Aluno.destroy({
        where: {
            id_aluno: req.params.id,
        },
    });
    res.status(200).json({ message: 'Aluno excluído!' });
});

router.put('/:id', async (req, res) => {
    const { nome } = req.body;
    const { fk_turma } = req.body;
    const { dataMatricula } = req.body;
    await Aluno.update(
        { nome, fk_turma, dataMatricula },
        { where: { id_aluno: req.params.id }, }
    );

    res.status(200).json({ message: 'Aluno atualizado!' });
});

module.exports = router;

