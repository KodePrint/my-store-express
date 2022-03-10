const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')
const {logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')
const path = require('path')

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
swaggerDocument = require('./swagger.json')

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

// Routes
routerApi(app)

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(port, () => {
  console.log('mi port' + port)
});
