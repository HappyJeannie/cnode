# cnode

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 项目目录结构说明：
```
- build
|-- build.js              生产环境构建代码
|-- check-version.js      检查 node/npm 等版本
|-- logo.png              
|-- utils.js              构建配置公用工具
|-- vuw-loader.conf.js    vue 加载器
|-- webpack.base.conf.js  webpack 基础环境配置
|-- webpack.dev.conf.js   webpack 开发环境配置
|-- webpack.prod.conf.js  webpack 生产环境配置
- config
|-- dev.env.js            开发环境变量
|-- index.js              项目一些配置变量
|-- prod.env.js           生产环境变量  
|-- test.env.js           测试环境变量
- src
|-- assets                资源目录
|-- components            组件文件夹
|-- router                前端路由文件夹
|-- App.vue               页面入口文件，根组件
|-- main.js               程序入口文件，入口 js 文件
- static                  静态文件，比如一些图片，json 数据等
- .babelrc                ES6 语法编译配置
- .editorconfig           定义代码格式
- .gitignore              git 上传需要忽略的文件格式
- index.html              入口页面   
- package.json            项目基本信息
- README.md               项目说明

```
### 项目架构说明：
#### 1、组件
* header
* list
* slide
* pagination
* userInfo
* Detail

