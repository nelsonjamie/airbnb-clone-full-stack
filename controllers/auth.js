// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('/auth')
  console.log('Hello from Auth')
})

// Export
module.exports = router
