const Tag = require('../model/tag.model')

class TagService {
  async createTag(tag_name, color) {
    const res = await new Tag({tag_name, color}).save()
    return res
  }

  async getTagList() {
    const res = await Tag.find()
    return res ? res : null
  }

  async updateTag({ id, tag_name, color }) {
      const newTag = {}
  
      tag_name && Object.assign(newTag, { tag_name })
      color && Object.assign(newTag, { color })
  
      const res = await Tag.findOneAndUpdate({_id:id}, {...newTag})
      return res ? true : false
  }

  async removeTag({ id }) {
    const res = await Tag.findOneAndRemove({ _id:id })
    console.log(res)
    return res ? true : false
  }
}

module.exports = new TagService()