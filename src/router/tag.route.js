const Router = require('koa-router')

const { 
  findAll, 
  create, 
  update, 
  remove
} = require('../controller/tag.controller')
const { auth } = require('../middleware/auth.middleware')

const router = new Router({ prefix: '/tags' })

//查询标签列表接口
router.get('/', findAll)

//添加标签接口
router.post('/create', auth, create)

//编辑标签接口
router.patch('/update/:id', auth, update)

//删除标签接口
router.delete('/remove/:id', auth, remove)

module.exports = router