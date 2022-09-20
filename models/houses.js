const mongoose = require('mongoose')

let housesModel = mongoose.model('houses', {
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
