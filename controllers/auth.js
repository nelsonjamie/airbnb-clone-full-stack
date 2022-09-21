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
router.post('/login', async (req, res, next) => {
  try {
    let foundUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if (foundUser) {
      req.login(foundUser, err => {
        if (err) {
          console.log('Invalid credentials')
          throw new Error('Invalid credentials')
        } else {
          console.log('Successful login')
          res.redirect('/houses')
        }
      })
    } else {
      console.log('The user does not exist')
      throw new Error('Invalid credentials')
    }
  } catch (err) {
    next(err)
  }
})

// POST / signup
router.post('/signup', async (req, res, next) => {
  try {
    let foundUser = await Users.findOne({
      email: req.body.email
    })
    if (foundUser) {
      console.log('User with this email already exists')
      throw new Error('User with this email already exists')
    } else {
      let saveUser = await Users.create(req.body)
      //Add later: check saveUser exists in the DB
      req.login(saveUser, err => {
        if (err) {
          throw err
        } else {
          console.log(req.body)
          res.redirect('/houses')
        }
      })
    }
  } catch (err) {
    next(err)
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
