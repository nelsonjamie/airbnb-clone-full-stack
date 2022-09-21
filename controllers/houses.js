// Packages
const express = require('express')
const router = express.Router()

const Houses = require('../models/houses')

//Routes
// GET /
router.get('/', (req, res) => {
  res.render('houses/list', { user: req.user })
  console.log('get houses complete')
})
// GET /create
router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create', { user: req.user })
  } else {
    res.redirect('../auth/login')
  }
})
// GET /:id
router.get('/:id', async (req, res) => {
  let house = await Houses.findById(req.params.id).populate('host')
  console.log(house)
  res.render('houses/one', { user: req.user, house })
  console.log('View this House')
})
// GET /:id/edit
router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})
// POST /
router.post('/', async (req, res) => {
  if (req.isAuthenticated()) {
    req.body.host = req.user._id
    let house = await Houses.create(req.body)
    res.redirect(`/houses/${house._id}`)
  } else {
    res.redirect('/auth/login')
  }
})
// PATCH /:id
router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/:id')
  } else {
    res.redirect('/auth/login')
  }
})
// DELETE /:id

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/profile')
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
