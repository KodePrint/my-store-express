const express = require('express');
const passport = require('passport')

const validatorHandler = require('../middlewares/validatorHandler')
const {createAddressScheme, updateAddressScheme, getAddressScheme} = require('../schemas/addressSchema')
const addressService = require('../services/addressService')

const router = express.Router();
const service = new addressService();

// GET
router.get('', async (req, res) => {
  const address = await service.getAll();
  res.status(200).json(address)
})

// GET a specific user
router.get('/:id',
  validatorHandler(getAddressScheme, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params
      const address = await service.getOne(id)
      res.status(200).json(address)
    } catch (error) {
      next(error)
    }
  }
)

// POST
router.post('',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createAddressScheme, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const address = await service.create(body)
      res.status(201).json(address)
    } catch (error) {
      next(error)
    }
  }
)

// PATCH
router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAddressScheme, 'params'),
  validatorHandler(updateAddressScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const address = await service.update(id, body)
      res.status(200).json(address)
    } catch (error) {
      next(error)
    }
  }
)

// PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAddressScheme, 'params'),
  validatorHandler(updateAddressScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const address = await service.update(id, body)
      res.status(200).json(address)
    } catch (error) {
      next(error)
    }
  }
)

// DELETE
router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAddressScheme, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const address = await service.delete(id);
      res.status(200).json(address)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
