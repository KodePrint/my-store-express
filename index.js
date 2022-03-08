const express = require('express');
const routerApi = require('./routes')
const { products } = require('./data/products')
const {categories} = require('./data/categories')
const app = express();
const port = 3000;
app.use(express.json());
routerApi(app)

// const users = [
//   {
//     name: 'Kevin Alberto Palma Ralda',
//     username: 'kpalma',
//     email: 'kapalma05@gmail.com',
//     password: 'asdasdaq2131231as'
//   },
// ]

// app.get('/', (req, res) => {
//   res.send('Hola Server en Express')
// });

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Soy un nuevo endpoint')
// });
// app.get('/home', (req, res) => {
//   res.json({
//     message: 'Bienvenido al Home'
//   })
// });
// app.get('/categories', (req, res) => {
//   res.json(categories)
// });
// app.get('/category/:id/products', (req, res) => {
//   const { id } = req.params;
//   prod = products.filter(products => products.category == id)
//   res.json(prod)
// });

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//       users
//     })
//   } else {
//     res.json(users)
//   }
// });

app.listen(port, () => {
  console.log('mi port' + port)
});
