const express = require('express');
const CategoriesService = require('../services/categoriesService')
const validatorHandler = require('../middlewares/validatorHandler')
const { createCategory, updateCategory, getCategory } = require('../schemas/categorySchema')

const router = express.Router()
const service = new CategoriesService();



// GET
router.get('/', async (req, res, next) => {
  const categories = await service.getAll();
  res.status(200).json(categories)
})
// Obtener por nombre
router.get('/search',
  async (req, res, next) => {
    try {
      const { name } = req.query;
      const category = await service.getByName(name)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/:id',
  validatorHandler(getCategory, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.getOne(id)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)
// POST
router.post('/',
  validatorHandler(createCategory, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const category = await service.create(body)
      res.status(201).json(category)
    } catch (error) {
      next(error)
    }
  }
)

// PATCH
router.patch('/:id',
  validatorHandler(getCategory, 'params'),
  validatorHandler(updateCategory, 'body'),
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
router.put('/:id',   validatorHandler(getCategory, 'params'),
  validatorHandler(updateCategory, 'body'),
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
// DELETE
router.delete('/:id',
  validatorHandler(getCategory, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.delete(id)
      res.status(200).json(category)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
