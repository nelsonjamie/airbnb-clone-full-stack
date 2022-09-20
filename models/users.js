const mongoose = require('mongoose')

let usersModel = mongoose.model('users', {
  avatar: String,
  email: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})
