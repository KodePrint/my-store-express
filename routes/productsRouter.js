const express = require('express');
const ProductsService = require('../services/prductsService')

const router = express.Router()
const service = new ProductsService();

// GET
router.get('/', async (req, res) => {
    const products = await service.find();
    res.status(200).json(products)
  });

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id)
    res.status(200).json(product)  
  } catch (error) {
    next(error);
  }  
});

// POST
router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const product = await service.create(body)
    res.status(201).json({
      message: 'created',
      product:product
    })
  } catch (error) {
    next(error);
  }
})
// PATCH
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  } catch (error) {
    next(error)
  }
})
// PUT
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  } catch (error) {
    next(error)
  }
})
// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
  }
})

module.exports = router