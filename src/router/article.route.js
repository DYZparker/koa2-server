const Router = require('koa-router')

const { 
  findAll, 
  findOne, 
  create, 
  update, 
  remove 
} = require('../controller/article.controller')
const { auth } = require('../middleware/auth.middleware')

const router = new Router({ prefix: '/article' })

//文章列表查询接口
router.get('/list', findAll)

//添加文章接口
router.post('/create', create)

//具体文章查询接口
router.post('/:id', findOne)

//编辑文章接口
router.patch('/uodate/:id', update)

//删除文章接口
router.delete('/remove/:id', remove)

module.exports = router