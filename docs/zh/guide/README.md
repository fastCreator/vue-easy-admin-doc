# 介绍

Vue Easy Admin 致力于为开发者提供一个快速开发，快速交付的，维护性高的中后台开发体系，提供：

- 通过 `easy-admin` 脚手架快速构建项目。
- 通过基于典型中后台系统`easy-admin-components` ，提供了丰富的 VUE 功能组件
- 通过基于典型中后台系统`easy-admin-demo` ，提供典型的中后台开发交互场景
- 通过 `easy-admin-doc` 提供详细的文档说明以及学习。

## 快速构建

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
│   ├── components                  # 全局公用组件
│   ├── pages                       # 全局指令
│   │   ├── full                    # 不包含菜单、头部布局的页面
│   │   └── local                   # 包含菜单、头部布局的页面
│   │       └─── pageName           # 页面名称，路由自动以名字构建
│   │            ├── api.js         # API封装，是后端数据转化为前端合适数据
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

## 添加一个页面
