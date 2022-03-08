const express = require('express');
const router = express.Router()

const routes = [
    {
        model: 'Products',
        routes: {
            list_products: '/products',
            get_a_product: '/products/{id}',
        }
    }
]

router.get('/', (req, res) => {
    res.json(routes)
})

module.exports = router