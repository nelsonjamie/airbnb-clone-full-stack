// Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')
// Create here a controller

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
router.post('/signup', async (req, res) => {
  let foundUser = await Users.findOne({
    email: req.body.email
  })
  if (foundUser) {
    console.log('Err')
  } else {
    let saveUser = await Users.create(req.body)
    req.login(saveUser, err => {
      if (err) {
        throw err
      } else {
        console.log(req.body)
        res.redirect('/houses')
      }
    })
  }
})

// GET / logout
router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    res.redirect('login')
  })
})

// Export
module.exports = router
