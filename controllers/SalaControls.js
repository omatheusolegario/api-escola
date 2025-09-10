const express = require('express');
const router = express.Router();

const Sala = require('../models/Sala.js');

router.get('/', async (req, res) => {
    const salas = await Sala.findAll();
    res.status(200).json(salas);
})


router.post('/', async (req, res) => {
    const { numeroSala } = req.body;
    const { predio } = req.body;
    const { capacidade } = req.body;
    const newEdit = await Sala.create({ numeroSala, predio, capacidade });
    res.status(200).json({ message: 'Sala cadastrada!' })
});

router.get('/:id', async (req, res) => {
    const sala = await Sala.findByPk(req.params.id);
    res.status(200).json(sala);
})

router.delete('/:id', async (req, res) => {
    await Sala.destroy({
        where: {
            id_sala: req.params.id,
        },
    });
    res.status(200).json({ message: 'Sala excluída!' });
});

router.put('/:id', async (req, res) => {
    const { numeroSala } = req.body;
    const { predio } = req.body;
    const { capacidade } = req.body;
    await Sala.update(
        { numeroSala, predio, capacidade },
        { where: { id_sala: req.params.id }, }
    );

    res.status(200).json({ message: 'Sala atualizada!' });
});

module.exports = router;
