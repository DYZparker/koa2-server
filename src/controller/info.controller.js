const { getTagList } = require('../service/tag.service')
// const { getLinkList } = require('../service/link.service')
const { userRegisterError } = require('../constant/err.type')

class InfoSideController {
  async infoSide(ctx, next) {
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
}

module.exports = new InfoSideController()