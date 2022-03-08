const express = require('express');
const CategoriesService = require('../services/categoriesServices')

const router = express.Router()
const service = new CategoriesService();


// GET
router.get('/', async (req, res) => {
  const categories = await service.find();
  res.status(200).json(categories)
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id)
    res.status(200).json(category)
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
  }
    
})
// POST
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const category = await service.create(body)
    res.status(201).json(category)
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
  })
  // PATCH
  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body)
      res.status(200).json(category)
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  })
  // PUT
  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body)
      res.status(200).json(category)
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  })
  // DELETE
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const category = await service.delete(id)
      res.status(200).json(category)
    } catch (error) {
      res.status(404).json({
        message:error.message
      })
    }
  })

module.exports = router
