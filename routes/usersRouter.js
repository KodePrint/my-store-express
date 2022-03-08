const express = require('express');
const {users} = require('../data/users')


const router = express.Router()

// GET
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
    if (id > (users.length)) {
        res.status(404).json({
          message:'not found'
        })
    } else {
        const user = users.filter(users => users.id == id)
        res.status(200).json(user)
    }
})

// POST
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
      message: 'created',
      data:body
    })
  })
  // PATCH
  router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    if (id > (users.length)) {
      res.status(404).json({
        message:'not found'
      })
    } else {
      res.status(200).json({
        message: 'update',
        data:body,
        id,
      })
    }
  })
  // PUT
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    if (id > (users.length)) {
      res.status(404).json({
        message:'not found'
      })
    } else {
      res.status(200).json({
        message: 'update',
        data:body,
        id,
      })
    }
  })
  // DELETE
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id > (users.length)) {
      res.status(404).json({
        message:'not found'
      })
    } else {
      res.status(200).json({
        message: 'delete',
        id,
      })
    }
  })

module.exports = router
