// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile')
  } else {
    res.redirect('/auth/login')
  }
})

//Routes

// PATCH /
router.patch('/', (req, res) => {
  res.send('Profile updated')
  console.log('profile updated')
})

// Export
module.exports = router
