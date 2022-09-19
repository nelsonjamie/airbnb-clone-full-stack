// Packages
const express = require('express')
const router = express.Router()

//Routes
// GET /
router.get('/', (req, res) => {
  res.render('houses/list')
  console.log('get houses complete')
})
// GET /create
router.get('/create', (req, res) => {
  res.render('houses/create')
})
// GET /:id
router.get('/:id', (req, res) => {
  res.render('houses/one')
  console.log('View this House')
})
// GET /:id/edit
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit')
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
