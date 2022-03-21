const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const { userFormateError,
  userAlreadyExisted,
  userRegisterError,
  userDoesNotExist,
  userLoginError,
  invalidPassword
 } = require('../constant/err.type')

//注册或登录非空检测
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if( !user_name || !password ) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}

//注册用户名重复检测
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  try {
    const res = await getUserInfo({ user_name })
    if(res) {
      console.error('用户名已经存在', { user_name })
      ctx.app.emit('error', userAlreadyExisted, ctx)
      return
    }
  }catch (err) {
    console.error('用户注册错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

//登录用户名与密码检测
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  try {
    const res = await getUserInfo({ user_name })
    if(!res) {
      console.error('用户名不存在', { user_name })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }
    if(!bcrypt.compareSync(password, res.password)) {
      console.error('用户密码错误', { user_name })
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  }catch (err) {
    console.error('用户登陆失败', err)
    ctx.app.emit('error', userLoginError, ctx)
    return
  }
  await next()
}

//密码加密
const bcryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  ctx.request.body.password = hash
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  verifyLogin,
  bcryptPassword
}