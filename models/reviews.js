const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let Reviews = mongoose.model('reviews', {
  author: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: ObjectId,
    ref: houses,
    required: true
  }
})

module.exports = Reviews
