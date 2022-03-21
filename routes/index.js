const express = require('express');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition:  {
	openapi:"3.0.0",
	info: {
	    title: "My Store API",
	    version: "1.0.0",
	},
	servers: [
	    {url: "https://my-store-kodeprint.herokuapp.com/"},
	],
    },
    apis: ["../*.js"]
}

const productsRouter = require('./productsRouter');
const homeRouter = require('./homeRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const orderRouter = require('./ordersRouter');
const measureUnitRouter = require('./measureUnitRouter');
const indicatorRouter = require('./indicatorRouter');
const addressRouter = require('./addressRouter');
const profilesRouter = require('./profilesRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/'. swaggerUI.serve, swaggerUI.stup(swaggerJsDoc(swaggerSpec)));
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
