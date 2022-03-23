const { 
  createArticle, 
  getArticle, 
  getArticleList, 
  updateArticle, 
  removeArticle 
} = require('../service/article.service')
const { userRegisterError } = require('../constant/err.type')

class ArticleController {
  async create(ctx, next) {
    const payload = ctx.request.body
    try {
      const res = await createArticle(payload)
      ctx.body = {
        code: 0,
        message: '添加文章成功',
        result: ''
      }
    }catch(err) {
      console.error('文章添加失败', err)
      // ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async findOne(ctx, next) {
    try {
      const res = await getArticle()
      ctx.body = {
        code: 0,
        message: '查询标签列表成功1',
        result: {
          tagList: res
        }
      }
    }catch(err) {
      console.error('查询标签列表失败', err)
    }
  }

  async findAll(ctx, next) {
    const payload = ctx.request.query
    try {
      const res = await getArticleList(payload)
      ctx.body = {
        code: 0,
        message: '查询文章列表成功',
        result: res
      }
    }catch(err) {
      console.error('查询文章列表失败', err)
    }
  }

  async update(ctx, next) {
    const id = ctx.params.id
    const { tag_name, color } = ctx.request.body

    try {
      const res = await updateArticle({id, tag_name, color})
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改标签成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: '10007',
          message: '修改标签失败',
          result: ''
        }
      }
    }catch(err) {
      console.error(err)
    }
  }

  async remove(ctx, next) {
    const id = ctx.params.id
    try {
      const res = await removeArticle({ id })
      if (res) {
        ctx.body = {
          code: 0,
          message: '标签删除成功',
          result: ''
        }
      } else {
        ctx.body = {
          code: '10008',
          message: '没有此标签',
          result: ''
        }
      }
    }catch(err) {
      console.error('标签删除失败', err)
    }
  }
}

module.exports = new ArticleController()