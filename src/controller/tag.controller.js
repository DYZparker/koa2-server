const { createTag, getTagList, updateTag, deleteTag } = require('../service/tag.service')
const { userRegisterError } = require('../constant/err.type')

class TagController {
  async addTag(ctx, next) {
    const { tag_name, tag_color } = ctx.request.body
    try {
      const res = await createTag(tag_name, tag_color)
      ctx.body = {
        code: 0,
        message: '添加标签成功',
        result: {
          id: res.id,
          tag_name: res.tag_name,
          tag_color: res.tag_color
        }
      }
    }catch(err) {
      console.error('标签添加错误', err)
      // ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async getTag(ctx, next) {
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

  async editTag(ctx, next) {
    const id = ctx.params.id
    const { tag_name, tag_color } = ctx.request.body

    try {
      const res = await updateTag({id, tag_name, tag_color})
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

  async removeTag(ctx, next) {
    const id = ctx.params.id
    try {
      const res = await deleteTag({ id })
      ctx.body = {
        code: 0,
        message: '标签删除成功',
        result: ''
      }
    }catch(err) {
      console.error('标签删除失败', err)
    }
  }
}

module.exports = new TagController()