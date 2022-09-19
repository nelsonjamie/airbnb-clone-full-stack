// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('index')
  console.log('Hello from Index')
})
// Export
module.exports = router
