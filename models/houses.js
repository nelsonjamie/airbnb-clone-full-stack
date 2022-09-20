const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let Houses = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photos: [
    {
      location: String
    }
  ],
  price: {
    type: Number,
    require: true
  },
  rooms: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    require: true
  }
})

module.exports = Houses
