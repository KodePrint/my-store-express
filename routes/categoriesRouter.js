const express = require('express');
const router = express.Router()
const {categories} = require('../data/categories')


router.get('/', (req, res) => {
    res.json(categories)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    category = categories.filter(categories => categories.id == id)
    res.json(category)
})


module.exports = router
