const mongoose = require('../db')

const Tag = mongoose.model('Tag', {
  tag_name: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true
  }
});

//单独执行此文件在数据库中生成model
// User.sync({force: true})
// Tag().save()

module.exports = Tag