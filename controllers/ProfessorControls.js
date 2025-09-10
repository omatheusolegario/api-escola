const express = require('express');
const router = express.Router();

const Professor = require("../models/Professor");
const Disciplina = require("../models/Disciplina.js")

router.get('/', async (req, res) => {
    const professores = await Professor.findAll({
        include: [{
            model: Disciplina,
            as: 'disciplina',
            attributes: ['nomeDisciplina', 'descricao'],
            required: true
        }],
        attributes: ['id_professor', 'nome']
    });

    res.status(200).json(professores);
});


router.post('/', async (req, res) => {
    const { nome } = req.body;
    const { fk_disciplina } = req.body;
    const newEdit = await Professor.create({ nome, fk_disciplina });
    res.status(200).json({ message: 'Professor cadastrado!' })
});

router.get('/:id', async (req, res) => {
    const professor = await Professor.findByPk(req.params.id, {
        include: [{
            model: Disciplina,
            as: 'disciplina',
            attributes: ['nomeDisciplina', 'descricao'],
            required: true
        }],
        attributes: ['id_professor', 'nome']
    });

    res.status(200).json(professor);
})

router.delete('/:id', async (req, res) => {
    await Professor.destroy({
        where: {
            id_professor: req.params.id,
        },
    });
    res.status(200).json({ message: 'Professor excluído!' });
});

router.put('/:id', async (req, res) => {
    const { nome } = req.body;
    const { fk_disciplina } = req.body;
    await professor.update(
        { nome, fk_disciplina },
        { where: { id_professor: req.params.id }, }
    );

    res.status(200).json({ message: 'Professor atualizado!' });
});

module.exports = router;
