// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')

// Create here a controller
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

//Routes

// PATCH /
router.patch('/', async (req, res) => {
  if (req.isAuthenticated()) {
    let updateUser = await Users.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
    console.log(updateUser)
    res.render('profile', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
