// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.post('/', async (req, res) => {
  if (req.isAuthenticated()) {
  } else {
    res.redirect('/login')
  }
})
// Export
module.exports = router
