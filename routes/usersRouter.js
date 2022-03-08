const express = require('express');
const { json } = require('express/lib/response');
const UsersService = require('../services/usersService')

const router = express.Router();
const service = new UsersService();

// GET
router.get('', async (req, res) => {
    const users = await service.find();
    res.status(200).json(users)
})

router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params
      const user = await service.findOne(id)
      res.status(200).json(user)
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
    const user = await service.create(body)
    res.status(201).json(user)
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
    const user = await service.update(id, body)
    res.status(200).json(user)
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
    const user = await service.update(id, body)
    res.status(200).json(user)
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
    const user = await service.delete(id);
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
  }
})

module.exports = router
