# 快速构建

```bash
# 全局安装脚本
npm install -g vue-easy-admin

# 快速构建项目
easy-admin create projectName

# 下载依赖
npm install

# 运行
npm run serve
# 打包
npm run build
# 发布
npm run deploy
```

## 目录结构

通过手脚架已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

```bash
├── dist                            # 打包后资源
├── public                          # 静态资源
│   │── favicon.ico                 # favicon图标
│   │── 其他文件                    # 将会拷贝到dist/public
│   └── index.html                  # html模板
├── src                             # 源代码
│   ├── components                  # 全局公用组件,自动注入
│   ├── pages                       # 页面
│   │   ├── full                    # 不包含菜单、头部布局的页面,如登录页面
│   │   └── local                   # 包含菜单、头部布局的页面
│   │       └─── pageName           # 页面名称，路由自动以名字构建
│   │            ├── api.js         # API封装，在此处处理后端数据与前端数据格式，目的解耦前后端数据，避免污染逻辑层
│   │            ├── config.json    # 页面级别的服务配置文件
│   │            ├── const.js       # 页面使用到的常量
│   │            ├── index.vue      # 界面展示文件
│   │            ├── lang.json      # 多语言配置文件
│   │            └── mock.js        # API数据模拟
│   ├── svg                         # 图片文件目录，自动加载打包为精灵图
│   └── theme                       # 主题文件
├── .eslintrc.js                    # eslint 配置项
├── .gitignore                      # git提交忽略配置
├── .babel.config.js                # babel配置
├── config.js                       # 全局服务配置文件
├── container.js                    # webpack配置
├── deploy.sh                       # 发布脚本
├── globLang                        # 全局多语言
├── mock.js                         # 全局API数据模拟
├── permission.json                 # 生成的权限文件，提供给后端数据库的
└── package.json                    # package.json
```

## 新增菜单页

```bash
# 新增菜单页脚本
easy-admin add local pageName
# 新增菜全屏页脚本
easy-admin add full pageName
```

### 页面级别服务配置-config.js

```js
{
  "nav": {
    "title": "页面1",                             // 页面标题
    "icon": "dashboard",                          // 菜单页图标，svg文件夹下svg文件名
    "parents": [                                  // 父菜单名称
      "菜单1",
      {                                           // 多语言配置
        "en": "nav1-1",
        "zh-CN": "菜单1-1"
      }
    ],
    "noCache": true,                               // 打开多标签时，是否缓存该页面，默认缓存
    "isWhite": true,                               // 将页面添加到白名单，无需权限，即可访问
    "noCache": true,                               // 打开多标签时，是否缓存该页面，默认缓存
    "priority": 1,                                 // 页面优先级，用于菜单排序
  },
  "iframe": {
    "src": "https://www.baidu.com"                  // 菜单页以iframe形式内嵌的第三方应用
  },
  "link": "https://github.com/fastCreator/vue-easy-admin"   // 点击菜单直接打开第三方页面
  "permission": {                                 // 权限配置
    "apis": [                                     // 页面基础API权限
      "get:/v1/apis/testData/{id}"
    ],
    "goPages": [                                  // 需要跳转的公共页配置
      "local/page2"
    ],
    "function": [                                 // 功能按钮配置
      {
        "code": "add",                            // 功能标识
        "title": "新增",                          // 功能名
        "apis": [                                 // 功能需要的API权限配置
          "post:/platform/v1/add"
        ],
        "goPages": [
          "local/page2"                            // 功能需要跳转的公共页配置
        ]
      }
    ]
  }
}
```

### 数据转换-api.js

api.js 存在为了转化后端数据，使之与前端所需数据格式一致；不写在页面中，为了解除后端数据格式与前端业务之间的耦合

api 中的 this 指向该页面实例，为了解决特殊情况，原则上，只允许调用 this.$net，进行网络请求，转换前后端数据格式

```js
export default {
  getTestData() {
    this.$net('get:/v1/apis/testData/{id}', { params: { id: 1 } })
  }
}
```

### 多语言配置-lang.json

在页面中直接使用 this.$lang.langKey 即可直接使用

```json
{
  "langKey": {
    "zh-CN": "登录表单",
    "en": "login from"
  }
}
```

### 常量定义-const.js

```js
// 可以引用多语言
export default function({ $lang, $globLang }) {
  return {
    sex: [
      { label: $globLang.man, value: 0 },
      { label: $globLang.woman, value: 1 }
    ]
  }
}
```

### 数据模拟-mock.js

- 数据模拟复用的 webpack 中的 express 服务
- 随着文件更改而更新服务
- 可以在浏览器中看到 http 请求，方便调试
- delay(毫秒),便于模拟接口响应速度
- 额外：在全局配置文件中配置 request.mock=true 开启的是浏览器请求拦截，无法发送 http 请求

```
module.exports = {
  async 'post:/v1/apis/login' (req,delay) {
    delay(1000)
    return { code: 200, data: { token: 'token1' } }
  }
}
```

## 全局配置

### webpack 配置-container.js

```js
module.exports = {
  // webpack链式修改
  // https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans
  chainWebpack (config) {
    ...
  },
  // webpack merge混入
  configureWebpack: {
    ...
  }
}
```

### 全局服务配置-config.js

```js
// 配套组件库
import vueEasyAdminComponents from 'vue-easy-admin-components'
export default {
  init (service) {   // vueRender前，用户初始化代码
    ...
  },
  iass: {            // 基础服务代码
    ...
  },
  sass: {            // 交互服务代码
    ...
  }
}
```
