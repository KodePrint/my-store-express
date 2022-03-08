const express = require('express');
const { products } = require('./products')
const {categories} = require('./categories')
const faker = require('faker')
const app = express();
const port = 3000;

const users = [
  {
    name: 'Kevin Alberto Palma Ralda',
    username: 'kpalma',
    email: 'kapalma05@gmail.com',
    password: 'asdasdaq2131231as'
  },
]

app.get('/', (req, res) => {
  res.send('Hola Server en Express')
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Soy un nuevo endpoint')
});
app.get('/home', (req, res) => {
  res.json({
    message: 'Bienvenido al Home'
  })
});
app.get('/categories', (req, res) => {
  res.json(categories)
});
app.get('/category/:id/products', (req, res) => {
  const { id } = req.params;
  prod = products.filter(products => products.category == id)
  res.json(prod)
});
app.get('/products', (req, res) => {
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(products[id])
});
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
      users
    })
  } else {
    res.json(users)
  }
});

app.listen(port, () => {
  console.log('mi port' + port)
});
