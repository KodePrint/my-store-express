const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler')
const {createProfileScheme, updateProfileScheme, getProfileScheme} = require('../schemas/profileSchema')
const profileService = require('../services/profilesService')

const router = express.Router();
const service = new profileService();

// GET
router.get('', async (req, res) => {
    const profiles = await service.getAll();
    res.status(200).json(profiles)
})

// GET a specific user
router.get('/:id',
  validatorHandler(getProfileScheme, 'params'),
  async (req, res, next) => {
      try {
        const {id} = req.params
        const profile = await service.getOne(id)
        res.status(200).json(profile)
      } catch (error) {
        next(error)
      }
  }
)

// POST
router.post('',
  validatorHandler(createProfileScheme, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const profile = await service.create(body)
      res.status(201).json(profile)
    } catch (error) {
      next(error)
    }
  }
)

// PATCH
router.patch('/:id',
  validatorHandler(getProfileScheme, 'params'),
  validatorHandler(updateProfileScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const profile = await service.update(id, body)
      res.status(200).json(profile)
    } catch (error) {
      next(error)
    }
  }
)
// PUT
router.put('/:id',
  validatorHandler(getProfileScheme, 'params'),
  validatorHandler(updateProfileScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const profile = await service.update(id, body)
      res.status(200).json(profile)
    } catch (error) {
      next(error)
    }
  }
)
// DELETE
router.delete('/:id',
  validatorHandler(getProfileScheme, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const profile = await service.delete(id);
      res.status(200).json(profile)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router