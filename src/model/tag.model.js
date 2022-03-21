const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Tag = seq.define('Tag', {
  //id会被sequelize自动创建
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '标签名'
  },
  tag_color: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '#ffffff',
    comment: '标签颜色'
  }
}, {
  //数据库中生成数据时不添加时间戳
  //timestamps: false
});

//单独执行此文件在数据库中生成model
// Tag.sync({force: true})

module.exports = Tag