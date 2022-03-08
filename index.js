const express = require('express');

const app = express();
const port = 3000;

const categories = [
  {id:1, name:'Abarroteria'},
  {id:2, name:'Electrodomesticos'},
  {id:3, name:'Linea Blanca'},
  {id:4, name:'Smartphones'},
  {id:5, name:'Oficina'},
]

const products = [
  {
    name: 'Iphone XII',
    price: 8000.00,
    category: categories[3].id
  },
  {
    name: 'Xaomi Y9 Pro',
    price: 4000.00,
    category: categories[3].id
  },
  {
    name: 'Iphone XII Max',
    price: 12000.00,
    category: categories[3].id
  },
  {
    name: 'Resma de Papel Oficio',
    price: 38.00,
    category: categories[4].id
  },
  {
    name: 'lapicero Bic',
    price: 4.50,
    category: categories[4].id
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
  res.json(products)
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(products[id])
});

app.listen(port, () => {
  console.log('mi port' + port)
});
