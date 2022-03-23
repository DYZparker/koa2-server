const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')
const { 
  createUser, 
  getUserInfo, 
  updateById 
} = require('../service/user.service')
const { userRegisterError } = require('../constant/err.type')

class UserController {
  async register(ctx, next) {
    const { user_name, password } = ctx.request.body
    try {
      const res = await createUser(user_name, password)
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }
    }catch(err) {
      console.error('用户注册错误', err)
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async login(ctx, next) {
    const { user_name } = ctx.request.body
    try {
      //从返回对象中剔除password属性
      const { password, ...res } = await getUserInfo({ user_name })

      ctx.body = {
        code: 0,
        message: '用户登陆成功',
        result: {
          //登陆后返回token
          token: jwt.sign(res, JWT_SECRET, {expiresIn: '1d'})
        }
      }
    }catch(err) {
      console.error('用户登陆失败', err)
    }
  }

  async changePassword(ctx, next) {
    const id = ctx.state.user._id
    const password = ctx.request.body.password

    if (await updateById({ id, password })) {
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: '',
      }
    } else {
      ctx.body = {
        code: '10007',
        message: '修改密码失败',
        result: '',
      }
    }
  }
}

module.exports = new UserController()