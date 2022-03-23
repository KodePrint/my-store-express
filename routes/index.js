const path = require('path')
const express = require('express');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = require('../swaggerSpec.js')

const productsRouter = require('./productsRouter');
const homeRouter = require('./homeRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const orderRouter = require('./ordersRouter');
const measureUnitRouter = require('./measureUnitRouter');
const indicatorRouter = require('./indicatorRouter');
const addressRouter = require('./addressRouter');
const profilesRouter = require('./profilesRouter');

console.log(path.resolve(__dirname, '../src'))

function routerApi(app) {
    const router = express.Router();
    app.use(express.static(path.resolve(__dirname, '../src')))
    app.get('/', (request, response) => {
      response.sendFile(path.resolve(__dirname, '../index.html'))
    })
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/measure_units', measureUnitRouter);
    router.use('/indicators', indicatorRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/orders', orderRouter);
    router.use('/user-address', addressRouter);
    router.use('/user-profiles', profilesRouter);
}

module.exports = routerApi
