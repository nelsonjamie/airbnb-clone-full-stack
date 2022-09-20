// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  console.log('Hello from Index')
  res.redirect('/houses')
})
// Export
module.exports = router
