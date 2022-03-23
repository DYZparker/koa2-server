const mongoose = require('../db')

const Article = mongoose.model('Article', {
  title: {
    type: String,
    required: true,
    trim: true
  },
  tags: {
    type: Array,
    required: true
  },
  img: {
    type: String
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Article