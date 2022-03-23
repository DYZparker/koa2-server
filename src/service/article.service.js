const Article = require('../model/article.model')

class ArticleService {
  async createArticle(payload) {
    const res = await new Article({...payload}).save()
    return res
  }

  async getArticle() {
    const res = await Article.find()
    return res ? res : null
  }

  async getArticleList(payload) {
    const { page, size, search } = payload
    const searchOBJ = JSON.parse(search)
    let total = 0
    let articleList = []
    
    if(searchOBJ.tags) {
      total = await Article.countDocuments({...searchOBJ})
      articleList = await Article.find(
        {...searchOBJ},
        {content: 0},
        {skip:page*size, limit:size, sort: {_id: -1}}
      )
    }else{
      total = await Article.countDocuments({})
      articleList = await Article.find(
        {},
        {content: 0},
        {skip:page*size, limit:size, sort: {_id: -1}}
      )
    }
    return {
      articleList,
      total
    }
  }

  async updateArticle({ id, tag_name, color }) {
      const newTag = {}
  
      tag_name && Object.assign(newTag, { tag_name })
      color && Object.assign(newTag, { color })
  
      const res = await Article.findOneAndUpdate({_id:id}, {...newTag})
      return res ? true : false
  }

  async removeArticle({ id }) {
    const res = await Article.findOneAndRemove({ _id:id })
    console.log(res)
    return res ? true : false
  }
}

module.exports = new ArticleService()