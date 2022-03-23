# 文件目录

- app--封装koa，注册全局中间件

- config--用dotenv将环境变量挂载到process.env
- constant--保存常量，（错误类型等等）
- controller--控制器，处理匹配的路由回调（操作数据库）
- db--用Sequelize连接mysql数据库
- middleware--自定义中间件
- model--对应数据库的对象，转换为可操作
- router--路由，并为单个路由注册所需中间件
- service--数据库操作
- main.js--文件入口
- .env--环境变量



# 接口文档

## react前端页面

1. 侧边栏初始化请求：

   ```
   url: '/info',
   method: 'get'
   
   //响应
   data: {
   	tagList: {
   		id: string,
   		title: string,
   		color: string
   	},
   	linkList: {
   		id: string,
   		name: string,
   		content: {
             id: number,
             title: string,
             src: string,
             href: string
           }
   	},
   }
   ```

2. 请求文章列表：

   ```
   url: '/article/list',
   method: 'post',
   data: {
   	payload
   }
   
   //响应
   data: {
   	total: number
   	page: number
   	articleList: {
           id: string
           date: string
           title: string
           img: string
           summary: string
           tags: Array<string>
         	content?: string
   	}
   }
   ```

3. 请求文章内容：

   ```
   url: '/article/id',
   method: 'post',
   data: {
   	id
   }
   
   //响应
   data: {
       id: string
       date: string
       title: string
       img: string
       summary: string
       tags: Array<string>
       content?: string
   }
   ```

   







## vue管理页面

### 1.1 用户登录



### 1.2 页面初始化