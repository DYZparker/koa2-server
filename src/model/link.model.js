const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Link = seq.define('Link', {
  //id会被sequelize自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员，0：不是（默认），1：是'
  }
}, {
  //数据库中生成数据时不添加时间戳
  //timestamps: false
});

//单独执行此文件在数据库中生成model
// Link.sync({force: true})

module.exports = Link