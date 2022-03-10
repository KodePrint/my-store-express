const express = require('express');
const router = express.Router()

const routes = [
    {
        Home: 'Documentacion',
    }
]

router.get('/', (req, res) => {
    res.json(routes)
})

module.exports = router