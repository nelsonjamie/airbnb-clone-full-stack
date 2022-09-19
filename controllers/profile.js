// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('profile')
  console.log('Hello from Profile')
})
// Export
module.exports = router
