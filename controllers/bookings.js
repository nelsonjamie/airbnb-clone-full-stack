// Packages
const express = require('express')
const router = express.Router()

const Bookings = require('../models/bookings')

// Create here a controller
router.post('/', async (req, res) => {
  if (req.isAuthenticated()) {
    console.log('this is the thing', req.body)
    req.body.user = req.user._id

    let booking = await Bookings.create(req.body)
    res.redirect(`/houses/${req.body.house}`)
  } else {
    res.redirect('/login')
  }
})
// Export
module.exports = router
