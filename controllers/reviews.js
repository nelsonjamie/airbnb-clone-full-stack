// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('/reviews')
  console.log('Hello from Reviews')
})

//Routes
//POST /
router.post('/', (req, res) => {
  res.send('your review has been sent')
  console.log('review submitted')
})
// Export
module.exports = router
