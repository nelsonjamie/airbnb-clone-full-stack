const mongoose = require('mongoose')

let usersModel = mongoose.model('users', {
  avatar: Text,
  email: {
    type: Text,
    require: true
  },
  name: {
    type: Text,
    require: true
  },
  password: {
    type: Text,
    require: true
  }
})
