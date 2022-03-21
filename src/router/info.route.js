const Router = require('koa-router')
const { infoSide } = require('../controller/info.controller')
const router = new Router({ prefix: '/info' })

//初始化side接口
router.get('/side', infoSide)

module.exports = router