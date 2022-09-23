// Packages
const express = require('express')
const router = express.Router()

const Houses = require('../models/houses')
const Bookings = require('../models/bookings')

//Routes
// GET /
router.get('/', async (req, res, next) => {
  try {
    let searchObj = {}
    if (req.query.location) {
      searchObj.location = req.query.location
    }
    if (req.query.rooms) {
      searchObj.rooms = req.query.rooms
    }
    if (req.query.price) {
      searchObj.price = { $lte: req.query.price }
    }
    if (req.query.title) {
      searchObj.title = { $regex: req.query.title, $options: 'i' }
    }
    console.log(searchObj)
    let houses = await Houses.find(searchObj).sort(req.query.sort)
    console.log(houses)
    res.render('houses/list', { user: req.user, houses })
  } catch (err) {
    next(err)
  }
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
  let booking = await Bookings.find({
    user: req.user._id,
    house: house._id
  })
  console.log(house)
  res.render('houses/one', { user: req.user, house, booking })
  console.log('View this House')
})
// GET /:id/edit
router.get('/:id/edit', async (req, res) => {
  if (req.isAuthenticated()) {
    let house = await Houses.findById(req.params.id).populate('host')
    console.log(house)
    res.render('houses/edit', { user: req.user, house })
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
router.patch('/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    let house = await Houses.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }).populate('host')
    console.log(house)
    res.redirect('/')
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
