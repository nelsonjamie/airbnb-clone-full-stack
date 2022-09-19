// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('/houses')
  console.log('Hello from Houses')
})
// Export
module.exports = router
