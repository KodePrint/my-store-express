const express = require('express');
const ProductsService = require('../services/prductsService')

const router = express.Router()
const service = new ProductsService();

// GET
router.get('/', async (req, res) => {
    const products = await service.find();
    res.status(200).json(products)
  });

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id)
    res.status(200).json(product)  
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }  
});

// POST
router.post('/', async (req, res) => {
  const body = req.body;
  const product = await service.create(body)
  res.status(201).json({
    message: 'created',
    product:product
  })
})
// PATCH
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
  }
})
// PUT
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
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