const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    const res = await new User({user_name, password}).save()
    return res
  }

  async getUserInfo({user_name}) {
    const res = await User.findOne({ user_name })
    return res ? res : null
  }

  async updateById({ id, user_name, password, is_admin }) {
    const newUser = {}

    user_name && Object.assign(newUser, { user_name })
    password && Object.assign(newUser, { password })
    is_admin && Object.assign(newUser, { is_admin })

    const res = await User.findOneAndUpdate({_id:id}, {...newUser})
    return res ? true : false
  }
}

module.exports = new UserService()