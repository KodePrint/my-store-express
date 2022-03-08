const express = require('express');
const {users} = require('../data/users')


const router = express.Router()

router.get('', (req, res) => {
    res.json(users)
})
// router.get('', (req, res) => {
//     const {username, email} = req.query;
//     console.log(username)
//     console.log(email)
//     const user = users.filter(users => users.email == email || users.username == username)
//     res.json(user)
// })
router.get('/:id', (req, res) => {
    const {id} = req.params
    const user = users.filter(users => users.id == id)
    res.json(user)
})


module.exports = router
