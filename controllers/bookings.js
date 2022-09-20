// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('your booking has been sent')
    console.log('req.body')
  } else {
    res.redirect('/login')
  }
})
// Export
module.exports = router
