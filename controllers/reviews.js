// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/reviews')
  } else {
    res.redirect('/auth/login')
  }
})

//Routes
//POST /
router.post('/', (req, res) => {
  res.send('your review has been sent')
  console.log('review submitted')
})
// Export
module.exports = router
