const express = require('express');
const { json } = require('express/lib/response');
const CustomersService = require('../services/customerService')
const validatorHandler = require('../middlewares/validatorHandler')
const {createUserScheme, updateUserScheme, getUserScheme} = require('../schemas/userSchema')

const router = express.Router();
const service = new CustomersService();

// GET
router.get('', async (req, res) => {
    const customers = await service.getAll();
    res.status(200).json(users)
})

// GET a specific user
router.get('/:id',
  validatorHandler(getUserScheme, 'params'),
  async (req, res, next) => {
      try {
        const {id} = req.params
        const customer = await service.getOne(id)
        res.status(200).json(customer)
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
      const customer = await service.create(body)
      res.status(201).json(customer)
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
      const customer = await service.update(id, body)
      res.status(200).json(customer)
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
      const customer = await service.update(id, body)
      res.status(200).json(customer)
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
      const customer = await service.delete(id);
      res.status(200).json(customer)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
