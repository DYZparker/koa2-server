const { createTag, getTagList, updateTag, removeTag } = require('../service/tag.service')
const { userRegisterError } = require('../constant/err.type')

class TagController {
  async create(ctx, next) {
    const { tag_name, color } = ctx.request.body
    try {
      const res = await createTag(tag_name, color)
      ctx.body = {
        code: 0,
        message: '添加标签成功',
        result: {
          id: res.id,
          tag_name: res.tag_name,
          color: res.color
        }
      }
    }catch(err) {
      console.error('标签添加错误', err)
      // ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async findAll(ctx, next) {
    try {
      const res = await getTagList()
      ctx.body = {
        code: 0,
        message: '查询标签列表成功',
        result: {
          tagList: res
        }
      }
    }catch(err) {
      console.error('查询标签列表失败', err)
    }
  }

  async update(ctx, next) {
    const id = ctx.params.id
    const { tag_name, color } = ctx.request.body

    try {
      const res = await updateTag({id, tag_name, color})
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
      const res = await removeTag({ id })
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

module.exports = new TagController()