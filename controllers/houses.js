// Packages
const express = require('express')
const router = express.Router()

// Create here a controller
router.get('/', (req, res) => {
  res.render('/houses')
  console.log('Hello from Houses')
})

//Routes
// GET /
router.get('/houses', (req, res) => {
  res.send('Hello from Houses')
  console.log('get houses complete')
})
// GET /create
router.get('/create', (req, res) => {
  res.send('Create your house')
})
// GET /:id
router.get('/:id', (req, res) => {
  res.send('it worked')
  console.log('View this House')
})
// GET /:id/edit
router.get('/:id/edit', (req, res) => {
  res.send('Edit your house')
  console.log('ready to edit')
})
// POST /
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('created')
})
// PATCH /:id
router.patch('/:id', (req, res) => {
  res.send('change made')
  console.log('Changed this House')
})
// DELETE /:id

router.delete('/:id', (req, res) => {
  res.send('goodbye')
  console.log('deleted')
})

// Export
module.exports = router
