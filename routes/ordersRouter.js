const express = require('express');
const passport = require('passport')

const OrderService = require('../services/orderServices')
const validatorHandler = require('../middlewares/validatorHandler')
const { addItemScheme, createOrderScheme, updateOrderScheme, getOrderScheme } = require('../schemas/orderSchema')

const router = express.Router()
const service = new OrderService();

// GET
router.get('/', async (req, res) => {
  const products = await service.getAll();
  res.status(200).json(products)
});

router.get('/:id',
  validatorHandler(getOrderScheme, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.getOne(id)
      res.status(200).json(product)
    } catch (error) {
      next(error);
    }
  }
);

// POST
router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createOrderScheme, 'body'),
  async (req, res, next) => {
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
  }
);

router.post('/add-item',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(addItemScheme, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body)
      res.status(201).json({
        message: 'created',
        newItem:product
      })
    } catch (error) {
      next(error);
    }
  }
);

// PATCH
router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getOrderScheme, 'params'),
  validatorHandler(updateOrderScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)
// PUT
router.put('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getOrderScheme, 'params'),
  validatorHandler(updateOrderScheme, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)
// DELETE
router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getOrderScheme, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.delete(id);
      res.status(200).json(product)
    } catch (error) {
      next(error)
    }
})

module.exports = router
