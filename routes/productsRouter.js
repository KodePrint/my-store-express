const express = require('express');
// const { products } = require('./products')
// const {categories} = require('./categories')
const faker = require('faker')

const router = express.Router()

router.get('/', (req, res) => {
    const prod = []
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i ++){
      prod.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }
    res.json(prod)
  });

  router.get('/filter', (req, res) => {
      res.send('Soy un filtro')
  })
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(products[id])
  });

module.exports = router