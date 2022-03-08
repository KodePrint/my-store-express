const express = require('express');
const router = express.Router()
const {categories} = require('../data/categories')


// GET
router.get('/', (req, res) => {
    res.json(categories)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id > (categories.length)) {
        res.status(404).json({
          message:'not found'
        })
    } else {
        category = categories.filter(categories => categories.id == id)
        res.json(category)
    }
})
// POST
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
      message: 'created',
      data:body
    })
  })
  // PATCH
  router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    if (id > (categories.length)) {
      res.status(404).json({
        message:'not found'
      })
    } else {
      res.status(200).json({
        message: 'update',
        data:body,
        id,
      })
    }
  })
  // PUT
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    if (id > (categories.length)) {
      res.status(404).json({
        message:'not found'
      })
    } else {
      res.status(200).json({
        message: 'update',
        data:body,
        id,
      })
    }
  })
  // DELETE
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id > (categories.length)) {
      res.status(404).json({
        message:'not found'
      })
    } else {
      res.status(200).json({
        message: 'delete',
        id,
      })
    }
  })

module.exports = router
