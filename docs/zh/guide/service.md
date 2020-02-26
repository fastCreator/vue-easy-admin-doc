# 内置服务配置

## 基础服务 iass

### 状态共享-store

1. 最基础模块，为了方便后续服务，默认最先加载
2. 根据原则，页面之间不能存在耦合，又需要方便开发者页面内状态传值；路由进入：动态加载开发目录下 store.js，以模块独立；路由出去：自动注销;由于 store 为最基本模块，此功能交由 route 服务实现
3. 原本后台系统业务不算太复杂，不需要使用 store 共享状态；这样会增加页面内组件之间的耦合，但是 store 方便开发者跨层级传值，以及上帝视角看数据；于是乎支持模块化 store,混乱也只是在这个应用页，需要开发自我评审，选择
4. 提供 store 模块快速注册机制

#### 配置文件

```js
store: {             //vuex全局模块配置
    state: {},
    mutations: {}
}
```

### element

框架内置 elementUI 组件库

### 多语言-language

提供全面的多语言解决方案、集成了 elementUI 多语言<br/>
站在页面开发角度思考

1. 在当前目录下，自动生成目录级别作用域，避免影响全局
2. 使用便捷，不需要手动定义作用域、直接 this.$lang 便可直接使用该目录下多语言
3. 思考代码书写流程，都是一个个字段开发，所以格式是以字段为 key,再去写各种语言
4. 服务提供了 store 与内置方法；可以直接修改、获取当前语言
5. 有些常见的多语言，需要全局；提供了 this.$globLang ，获取更目录下多语言配置
6. 通过 localstorage 记录当前用户选择语言，避免重复切换

#### 配置文件

```js
{
      defalut: 'en',             // 默认语言、localstorage优先
      list: [                    // 支持语言列表
        {
          label: '中文',
          value: 'zh-CN'
        },
        {
          label: 'English',
          value: 'en'
        }
      ],
      glob:{}                     // 全局配置
    }
```

### 数据模拟-mock

1. 提供了真实的 http 请求模拟，更便于开发者调试
2. 内置了 mockJS 可以随机生成模拟数据
3. 内置 delay 函数，将 http 请求时间拉长，模拟各种网络情景
4. 所有请求相关 URL 为 http 请求因子定义，更便捷的一一对应，以及后面权限相关

### 请求配置-request

1. 提供本地数据 mock,复用 mock.js 文件
2. 提供请求数据格式化，当数据不符合格式时，自动报错
3. 内置 net 函数，以权限因子的形式进行网络请求
4. 自动引用当前开发目录下的 api.js 文件，直接使用 this.$api 即可调用该函数
5. 注册服务，提供请求、响应的过滤器，方便上层应用开发

#### 权限因子定义以及使用

定义：method:url<br/>
例如：post:/v1/api/user/{userID}<br/>
使用：net(path, { params, query, body })<br/>
path:权限因子、params：URL 上变量值、query：URL?参数、body 请求体
权限相关：sass 模块 permission 中讲到

#### 配置文件

```js
request: {
      mock: true,                                                       // 是否开启本地模拟
      create: {                                                         // 初始化时配置，内置axios与之一致
        baseURL: process.env.NODE_ENV === 'development' ? '/' : '',
        timeout: 5000
      },
      format: {                                                          // 请求数据格式化
        codeKey: 'code',
        successCode: 200,
        msgKey: 'message',
        dataKey: 'data'
      }
    },
```

### 路由-router

1. 根据当前开发目录自动加载路由，无需在同一地方配置，减少代码冲突
2. 提供两种形式路由：全局页面形式、菜单页页面形式
3. 内置服务，页面跳转时开启 NProgress，可通过全局配置文件配置表
4. 注册服务，提供路由'beforeEach', 'beforeResolve', 'afterEach'钩子，方便上层应用开发
5. 内置组件 iframe 组件，通过页面级别 config.js 配置，引用第三方页面
6. 内置 redirect 组件，用来强制刷新 keep-alive 缓存

#### 全局配置文件

```js
router: {
      indexPage () {                         // 跳转首页地址
        return '/local/page1'
      },
      nProgress: { showSpinner: false }      // 进度条配置
    },
```

### 自动加载组件-components

1. 自动加载 components 目录下面的组件，注册到全局，一定程度上解决双手；
2. .vue-bk 文件不进行加载

### 自动加载 SVG 图片-svg

1. 自动加载 svg 目录下面的图片，打包为 sprite 精灵图，一定程度上解决双手；
2. 提供 SvgIcon 组件使用图片
3. 为什么选用 svg 作为图片：数据小，矢量图、比字体图标更容易置换、可以多色、可以动画
4. 可在[阿里矢量图标库](https://www.iconfont.cn/)中下载所需要的图标

## sass 层-应用解决方案

### 复制功能-copy

1. 提供复制功能；调用 this.$service.copy.copyText(text,cb)

### 变化 dom.title

1. 加载页面配置的 title,当路由变化时，自动改变 dom.title

### 布局-layout

1. 提供内置典型的后台页面布局；如果某个块组件不合适，可以覆盖该组件

#### 全局配置文件

```js
layout: {
      sidebar: {                                  // 左边配置
        logo: {                                   // 左边logo部分配置
          title: {
            en: 'VUE ADMIN',
            'zh-CN': 'VUE后台管理'
          },
          logo: 'public/logo.png',
          link: '/',                              // 点击logo跳转地址
          showLogo: true                          // 是否显示logo
        },
        menu: {                                   // 菜单配置，也可以不配置，通过后面主题来配置各种样式菜单
          backgroundColor: '#545c64',
          textColor: '#ffffff',
          activeTextColor: '#ffd04b'
        }
      },
      header: {                                   // 右边布局头部
        affixHeader: true,                        // 是否固定头部
        tagsView: true                            // 是否展示多标签页
      },
      setting: {                                  // 右边设置
        show: true,
        list: []                                  // 用户自定义配置
      }
    },
```

### loading-加载中

1. 页面进入时，便插入了 loading,减少白屏时间
2. 提供服务 open、close loading
3. 设置 loading 最大时长；避免出现某些 BUG 时，一直 loading 阻挡用户操作
4. 注册进入请求服务，请求时开启 loading、请求结束 loading 计数器-1
5. 可快速自定义 loading、在 public 文件夹下加入 loading.svg；svg 动画方便置换、矢量、数据量小

### navs

1. 根据页面配置文件，快速生成菜单
2. 注册进入 store,可以修改

### 用户权限-permission

1. token 处理；无 token 或者 token 失效跳转到登录页面；token 过期，自动刷新 token
2. 依赖于 route、reqeust 服务
3. 调用用户信息以及用户权限接口，存入 store 中
4. 提供 this.$hasPermission 判断功能模块是否有权限
5. 页面级别配置，提供了 permission 配置，开发环境当调用接口时，会检查，如果该接口没有在当前页面配置时，会报错提示
6. npm run permission 会生成整个应用的菜单权限树；在每次部署时，可以将菜单权限树加入到数据库中，避免权限与实际不统一，没有及时更新问题；我看很多后台系统的权限只是个摆设，只是控制到前端页面显隐，并没有控制到后端 API 权限控制；通过这个文件精确的表示到某个功能需要调用的哪些 API，而且不需要手动录入，降低风险
7. 功能依赖于其他页面时，如果不是很熟悉业务，更是不好配置；于是出现 goPage 选项，自动加载引用页的权限进入该功能

#### 全局配置

```js
permission: {
      getUserInfo (request) {                        // 获取用户信息
        return request.net('get:/v1/apis/userInfo')
      },
      async getPermission (request) {                // 获取用户权限
        return request.net('get:/v1/apis/permission')
      },
      whiteSource: ['openNew'],                       // 功能白名单
      whiteAPI: [                                     // API白名单
        'get:/v1/apis/userInfo',
        'get:/v1/apis/userInfo',
        'get:/v1/apis/permission'
      ],
      loginUrl: '/full/login',                         //登录页路径，可以是http的登录总登录，然后通过backURL跳转过来
      headerKey: 'token',                              //token请求头Key
      token: {                                         //token相关操作
        refresh (request) {
          return Promise.resolve('token1')
        },
        get () {
          return localStorage.token
        },
        set (token) {
          localStorage.token = token
        },
        remove () {
          localStorage.removeItem('token')
        },
        OverTimeCode: 4001,                             //token过期
        InvalidCode: 4002                               //toekn失效
      }
    }
```

### 监听页面变化-rezie

```
1. 监听页面大小变化，将尺寸，device放入store
2. 尺寸小于某个值（框架内置）,每次切换菜单，都会关闭左边菜单，来增加窗口面积
```

### 主题切换-theme

1. 使用 style-loader 中 set\unset，动态加载主题
2. 这种主题切换好处是，随心所欲的定制
3. elementUI 提供了[配置器](https://element.eleme.cn/#/zh-CN/theme/preview),更加方便配置主题色
