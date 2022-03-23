const Router = require('koa-router')
const { addTag, getTag, editTag, removeTag } = require('../controller/tag.controller')
const router = new Router({ prefix: '/tags' })

//添加链接接口
router.post('/add', addTag)

//查询标签列表接口
router.get('/', getTag)

//编辑标签接口
router.patch('/edit/:id', editTag)

//删除标签接口
router.post('/delete/:id', removeTag)

module.exports = router