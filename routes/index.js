const express = require('express')
const productsRouter = require('./productsRouter')
const homeRouter = require('./homeRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')
const measureUnitRouter = require('./measureUnitRouter')
const indicatorRouter = require('./indicatorRouter')

function routerApi(app) {
    const router = express.Router();
    app.use('', homeRouter);
    app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/measure_units', measureUnitRouter);
    router.use('/indicators', indicatorRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
}

module.exports = routerApi
