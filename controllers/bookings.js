// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.post('/', (req, res) => {
  res.send('your booking has been sent')
  console.log('req.body')
})
// Export
module.exports = router
