// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')
const Houses = require('../models/houses')

// Create here a controller
router.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    let myHouses = await Houses.find({ host: req.user._id })
    console.log(myHouses)
    res.render('profile', { user: req.user, myHouses })
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
    req.login(updateUser, err => {
      if (err) {
        throw err
      }
    })
    res.render('profile', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
