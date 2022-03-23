const mongoose = require('../db')

const User = mongoose.model('User', {
  user_name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  is_admin: {
    type: Boolean,
    default: false
  }
});

//单独执行此文件在数据库中生成model
// User.sync({force: true})
// User().save()

module.exports = User