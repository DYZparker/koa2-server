const Tag = require('../model/tag.model')

class TagService {
  async createTag(tag_name, tag_color) {
    const res = await Tag.create({tag_name, tag_color})
    return res.dataValues
  }

  async getTagList() {
    const res = await Tag.findAll()
    return res ? res : null
  }

  async updateTag({ id, tag_name, tag_color }) {
      const whereOpt = { id }
      const newTag = {}
  
      tag_name && Object.assign(newTag, { tag_name })
      tag_color && Object.assign(newTag, { tag_color })
  
      const res = await Tag.update(newTag, { where: whereOpt })
      console.log(res)
      return res[0] > 0 ? true : false
  }

  async deleteTag({ id }) {
    const whereOpt = { id }

    const res = await Tag.destroy({ where: whereOpt })
    console.log(res)
    return res ? res.dataValues : null
  }
}

module.exports = new TagService()