// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('bookings')
  console.log('Hello from Bookings')
})
// Export
module.exports = router
