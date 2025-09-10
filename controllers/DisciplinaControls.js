const express = require('express');
const router = express.Router();

const Disciplina = require('../models/Disciplina.js');

router.get('/', async (req, res) => {
    const disciplinas = await Disciplina.findAll();
    res.status(200).json(disciplinas);
})


router.post('/', async (req, res) => {
    const { descricao } = req.body;
    const { nomeDisciplina } = req.body;
    const newEdit = await Disciplina.create({ descricao, nomeDisciplina });
    res.status(200).json({ message: 'Disciplina cadastrada!' })
});

router.get('/:id', async (req, res) => {
    const disciplina = await Disciplina.findByPk(req.params.id);
    res.status(200).json(disciplina);
})

router.delete('/:id', async (req, res) => {
    await Disciplina.destroy({
        where: {
            id_disciplina: req.params.id,
        },
    });
    res.status(200).json({ message: 'Disciplina excluída!' });
});

router.put('/:id', async (req, res) => {
    const { descricao } = req.body;
    const { nomeDisciplina } = req.body;
    await Disciplina.update(
        { descricao, nomeDisciplina },
        { where: { id_disciplina: req.params.id }, }
    );

    res.status(200).json({ message: 'Disciplina atualizada!' });
});

module.exports = router;

