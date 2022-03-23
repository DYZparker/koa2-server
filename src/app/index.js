const path = require('path')

const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static')

const errHandler = require('./errHandler')
const userRouter = require('../router/user.route')
const commonRouter = require('../router/common.route')
const tagRouter = require('../router/tag.route')
const articleRouter = require('../router/article.route')

const app = new Koa()

app.use(KoaBody({
  //上传文件配置
  multipart: true,
  formidable: {
    // 在配制选项option里, 不推荐使用相对路径
    // 在option里的相对路径, 不是相对的当前文件. 相对process.cwd()
    uploadDir: path.join(__dirname, '../upload'),
    keepExtensions: true,
  },
  parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
}))
app.use(KoaStatic(path.join(__dirname, '../upload')))
app.use(userRouter.routes())
app.use(commonRouter.routes())
app.use(tagRouter.routes())
app.use(articleRouter.routes())

//统一的错误处理
app.on('error', errHandler)

module.exports = app