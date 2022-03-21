const express = require('express');
const router = express.Router()
const swaggerUI = require('swagger-ui-express');
const swaaggerJsDoc = require('swagger-jsdoc');

const routes = [
    {
        Home: 'Documentacion',
    }
]

router.get('/', (req, res) => {
    res.json(routes)
})

module.exports = router
