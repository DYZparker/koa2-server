const path = require('path')

const { getTagList } = require('../service/tag.service')
// const { getLinkList } = require('../service/link.service')
const { 
  unSupportedFileType,
  fileUploadError
 } = require('../constant/err.type')

class commonController {
  async sideInfo(ctx, next) {
    try {
      const res1 = await getTagList()
      // const res2 = await getLinkList()
      ctx.body = {
        code: 0,
        message: '初始化side成功',
        result: {
          tagList: res1,
          // linkList: res2
        }
      }
    }catch(err) {
      console.error('初始化side失败', err)
    }
  }

  async upload(ctx, next) {
    const { file } = ctx.request.files
    const fileTypes = ['image/jpeg', 'image/png']

    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit('error', unSupportedFileType, ctx)
      }
      ctx.body = {
        code: 0,
        message: '商品图片上传成功',
        result: {
          img: path.basename(file.path),
        },
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }
}

module.exports = new commonController()