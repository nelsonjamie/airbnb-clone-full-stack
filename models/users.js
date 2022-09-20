const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let Users = mongoose.model('users', {
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

module.exports = Users
