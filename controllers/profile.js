// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('profile')
  console.log('Hello from Profile')
})

//Routes
// GET /
router.get('/', (req, res) => {
  res.send('Profile')
  console.log('profile displayed')
})
// PATCH /
router.patch('/', (req, res) => {
  res.send('Profile updated')
  console.log('profile updated')
})

// Export
module.exports = router
