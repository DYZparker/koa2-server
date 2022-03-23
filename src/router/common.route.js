const Router = require('koa-router')
const { sideInfo, upload } = require('../controller/common.controller')
// const { auth } = require('../middleware/auth.middleware')
const router = new Router({ prefix: '/common' })

//初始化side接口
router.get('/side/info', sideInfo)

//上传图片接口
router.post('/upload', upload)

module.exports = router