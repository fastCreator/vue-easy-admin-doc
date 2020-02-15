# 快速构建

```bash
# 全局安装脚本
npm install -g vue-easy-admin

# 快速构建项目
easy-admin create projectName

# 下载依赖
npm install

# 运行
easy-admin run serve
```

## 目录结构

通过手脚架已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

```bash
├── public                          # 静态资源
│   │── favicon.ico                 # favicon图标
│   └── index.html                  # html模板
├── src                             # 源代码
│   ├── components                  # 全局公用组件,自动注入
│   ├── pages                       # 页面
│   │   ├── full                    # 不包含菜单、头部布局的页面
│   │   └── local                   # 包含菜单、头部布局的页面
│   │       └─── pageName           # 页面名称，路由自动以名字构建
│   │            ├── api.js         # API封装，数据逻辑与业务逻辑解耦
│   │            ├── config.json    # 页面界别配置分拣
│   │            ├── index.vue      # 界面展示文件
│   │            ├── lang.json      # 多语言配置文件
│   │            └── mock.js        # 页面API数据模拟
│   ├── svg                         # svg文件
│   └── theme                       # 主题文件
├── .eslintrc.js                    # eslint 配置项
├── .gitignore                      # git提交忽略配置
├── config.js                       # 全局服务配置文件
├── container.js                    # 容器配置文件
├── permission.json                 # 生成的权限文件
└── package.json                    # package.json
```

## 新增菜单页

```bash
# 新增菜单页脚本
easy-admin add local pageName
# 新增菜全屏页脚本
easy-admin add full pageName
```

### 页面配置-config.js

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
    "noCache": true                               // 打开多标签时，是否缓存该页面，默认缓存
  },
  "permission": {                                 // 权限配置,权限章节详解
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

### 数据模拟-mock.js

- 数据模拟复用的 webpack 中的 express 服务
- 随着文件更改而更新服务
- 可以在浏览器中看到 http 请求，方便调试
- delay(毫秒),便于模拟接口响应速度

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
