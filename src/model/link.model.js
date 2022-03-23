const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Link = seq.define('Link', {
  //id会被sequelize自动创建
  link_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '链接名称'
  },
  link_href: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '链接地址'
  },
  type_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '链接类型'
  },
  img_src: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '图标地址'
  }
}, {
  //数据库中生成数据时不添加时间戳
  //timestamps: false
});

//单独执行此文件在数据库中生成model
// Link.sync({force: true})

module.exports = Link