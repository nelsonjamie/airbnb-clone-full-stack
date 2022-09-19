// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('/auth')
  console.log('Hello from Auth')
})

//Routes

//GET / login

router.get('/login', (req, res) => {
  res.render('login')
  console.log('redirect to login')
})

// GET / signup
router.get('/signup', (req, res) => {
  res.render('signup')
  console.log('redirect to signup')
})

// POST / login
router.post('/login', (req, res) => {
  console.log(req.body)
  res.send('logged in')
})

// POST / signup
router.post('/signup', (req, res) => {
  console.log(req.body)
  res.redirect('/profile')
})

// GET / logout
router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
  })
})

// Export
module.exports = router
