const { mongoose } = require('mongoose')

// 配置要连接的数据库
const dbURI = 'mongodb://127.0.0.1/myblog'

// 调用 mongoose 所提供的 connect 方法来连接数据库
mongoose.connect(dbURI,{useNewUrlParser : true,useUnifiedTopology: true})

// 监听 connected 事件，连接成功的话就会触发这个事件
mongoose.connection.on('connected',function(){
    console.log(`数据库已经连接成功，连接至${dbURI}`);
})

module.exports = mongoose