const express = require('express');
const MeasureUnitService = require('../services/measureUnitService')
const validatorHandler = require('../middlewares/validatorHandler')
const { createMeasureUnit, updateMeasureUnit, getMeasureUnit } = require('../schemas/measureUnitSchema');

const router = express.Router()
const service = new MeasureUnitService();

// Retorna todas las unidades de medida
router.get('/', async (req, res, next) => {
    const measure_unit = await service.getAll()
    res.status(200).json(measure_unit)
})

// Retorna una unidad de medida por ID
router.get('/:id',
    validatorHandler(getMeasureUnit, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const measuer_unit = await service.getOne(id)
            res.status(200).json(measuer_unit)
        } catch (error) {
            next(error)
        }
    }
)

// Crea una nueva unidad de medida
router.post('/',
    validatorHandler(createMeasureUnit, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const measure_unit = await service.create(body)
            res.status(201).json(measure_unit)
        } catch (error) {
            next(error)
        }
    }
)

// Elimina una unidad de medida por su ID
router.delete('/:id',
    validatorHandler(getMeasureUnit, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const measuer_unit = await service.partialDelete(id)
            res.status(200).json(measuer_unit)
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router
