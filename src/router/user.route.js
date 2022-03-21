const Router = require('koa-router')
const { userValidator, verifyUser, verifyLogin, bcryptPassword } = require('../middleware/user.middleware')
const { register, login, changePassword } = require('../controller/user.controller')
const { auth } = require('../middleware/auth.middleware')
const router = new Router({ prefix: '/users' })

//注册接口
router.post('/register', userValidator, verifyUser, bcryptPassword, register)

//登录接口
router.post('/login', userValidator, verifyLogin, login)

//修改密码接口
router.patch('/', auth, bcryptPassword, changePassword)

module.exports = router