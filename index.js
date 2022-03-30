const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler, dbOrmErrorHandler } = require('./middlewares/errorHandler')
const path = require('path')
const { checkApiKey } = require('./middlewares/authHandler')
// Estrategias
// const { strategies } = require('./utils/auth/index')

// Settings
const whiteList = ['http://localhost:5500','http://127.0.0.1:5500']

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Cors
const options = {
 origin: (origin, callback) => {
   if(whiteList.includes(origin) || !origin) {
     callback(null, true)
   } else {
     callback(new Error('Error Forbidden'))
   }
 }
}
app.use(cors());

// Se ejecuta la estrategia
require('./utils/auth/index')

// Routes
routerApi(app)

// Test Routes
app.get('/test', checkApiKey, (req, res) => {
  res.send('Soy una ruta de prueba')
})
app.get('/recovery', (req, res) => {
  res.send('Formulario de recuperacion..!')
})

// Middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('mi port' + port);
  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
});
