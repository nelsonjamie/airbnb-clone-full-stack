const mongoose = require('mongoose')

let bookingsModel = mongoose.model('bookings', {
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
    type: Text,
    required: true
  },
  house: {
    type: ObjectId,
    ref: 'houses',
    required: true
  }
})
