const express = require('express');
const router = express.Router();

const Turma = require("../models/Turma");
const Sala = require("../models/Sala")

router.get('/', async (req, res) => {
    const turmas = await Turma.findAll({
        include: [{
            model: Sala,
            as: 'sala',
            attributes: ['numeroSala', 'predio', 'capacidade'],
            required: true
        }],
        attributes: ['id_turma', 'nomeTurma', 'periodo']
    });

    res.status(200).json(turmas);
});


router.post('/', async (req, res) => {
    const { nomeTurma } = req.body;
    const { fk_sala } = req.body;
    const { periodo } = req.body;
    const newEdit = await Turma.create({ nomeTurma, fk_sala, periodo });
    res.status(200).json({ message: 'Turma cadastrada!' })
});

router.get('/:id', async (req, res) => {
    const turma = await Turma.findByPk(req.params.id, {
        include: [{
            model: Sala,
            as: 'sala',
            attributes: ['numeroSala', 'predio', 'capacidade'],
            required: true
        }],
        attributes: ['id_turma', 'nomeTurma', 'periodo']
    });

    res.status(200).json(turma);
})

router.delete('/:id', async (req, res) => {
    await Turma.destroy({
        where: {
            id_turma: req.params.id,
        },
    });
    res.status(200).json({ message: 'Turma excluída!' });
});

router.put('/:id', async (req, res) => {
    const { nomeTurma } = req.body;
    const { periodo } = req.body;
    const { fk_sala } = req.body;
    await Turma.update(
        { nomeTurma, fk_sala, periodo },
        { where: { id_turma: req.params.id }, }
    );

    res.status(200).json({ message: 'Turma atualizada!' });
});

module.exports = router;

