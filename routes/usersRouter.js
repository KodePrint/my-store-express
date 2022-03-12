const express = require('express');
const { json } = require('express/lib/response');
const UsersService = require('../services/usersService')
const validatorHandler = require('../middlewares/validatorHandler')
const {createUserScheme, updateUserScheme, getUserScheme} = require('../schemas/userSchema')

const router = express.Router();
const service = new UsersService();

// GET
router.get('', async (req, res) => {
    const users = await service.getAll();
    res.status(200).json(users)
})

// GET a specific user
router.get('/:id',
  validatorHandler(getUserScheme, 'params'),
  async (req, res, next) => {
      try {
        const {id} = req.params
        const user = await service.getOne(id)
        res.status(200).json(user)
      } catch (error) {
        next(error)
      }
  }
)

// POST
router.post('',
  validatorHandler(createUserScheme, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.create(body)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
)

// PATCH
router.patch('/:id',
  validatorHandler(getUserScheme, 'params'),
  validatorHandler(updateUserScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)
// PUT
router.put('/:id',
  validatorHandler(getUserScheme, 'params'),
  validatorHandler(updateUserScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)
// DELETE
router.delete('/:id',
  validatorHandler(getUserScheme, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.delete(id);
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
