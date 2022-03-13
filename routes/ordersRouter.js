const express = require('express');
const OrderService = require('../services/orderServices')
const validatorHandler = require('../middlewares/validatorHandler')
const { createMeasureUnit, updateMeasureUnit, getMeasureUnit } = require('../schemas/measureUnitSchema');

const router = express.Router()
const service = new OrderService();

// Retorna todas las unidades de medida
router.get('/', async (req, res, next) => {
    const orders = await service.getAll()
    res.status(200).json(orders)
})

// Retorna una unidad de medida por ID
router.get('/:id',
    validatorHandler(getMeasureUnit, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const order = await service.getOne(id)
            res.status(200).json(order)
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
            const order = await service.create(body)
            res.status(201).json(order)
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
            const order = await service.partialDelete(id)
            res.status(200).json(order)
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router
