// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('/reviews')
  console.log('Hello from Reviews')
})
// Export
module.exports = router
