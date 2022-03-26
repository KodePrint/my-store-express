const express = require('express');
const passport = require('passport')

const MeasureUnitService = require('../services/indicatorService')
const validatorHandler = require('../middlewares/validatorHandler')
const { createIndicator, updateIndicator, getIndicator } = require('../schemas/indicatorSchema');

const router = express.Router()
const service = new MeasureUnitService();

// Retorna todas las unidades de medida
router.get('/', async (req, res, next) => {
  const indicator = await service.getAll()
  res.status(200).json(indicator)
})

// Retorna una unidad de medida por ID
router.get('/:id',
  validatorHandler(getIndicator, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const indicator = await service.getOne(id)
      res.status(200).json(indicator)
    } catch (error) {
      next(error)
    }
  }
)

// Crea una nueva unidad de medida
router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createIndicator, 'body'),
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

// PATCH
router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getIndicator, 'params'),
  validatorHandler(updateIndicator, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

// PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getIndicator, 'params'),
  validatorHandler(updateIndicator, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

// Elimina una unidad de medida por su ID
router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getIndicator, 'params'),
  async(req, res, next) => {
    try {
      const {id} = req.params;
      const indicator = await service.partialDelete(id)
      res.status(200).json(indicator)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
