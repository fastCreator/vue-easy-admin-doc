(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{216:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("框架内置 elementUI 组件库")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("ol",[a("li",[t._v("自动加载 svg 目录下面的图片，打包为 sprite 精灵图，一定程度上解决双手；")]),t._v(" "),a("li",[t._v("提供 SvgIcon 组件使用图片")]),t._v(" "),a("li",[t._v("为什么选用 svg 作为图片：数据小，矢量图、比字体图标更容易置换、可以多色、可以动画")]),t._v(" "),a("li",[t._v("可在"),a("a",{attrs:{href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里矢量图标库"),a("OutboundLink")],1),t._v("中下载所需要的图标")])]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),a("ol",[a("li",[t._v("使用 style-loader 中 set\\unset，动态加载主题")]),t._v(" "),a("li",[t._v("这种主题切换好处是，随心所欲的定制")]),t._v(" "),a("li",[t._v("elementUI 提供了"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/theme/preview",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置器"),a("OutboundLink")],1),t._v(",更加方便配置主题色")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"内置服务配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置服务配置"}},[this._v("#")]),this._v(" 内置服务配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基础服务-iass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础服务-iass"}},[this._v("#")]),this._v(" 基础服务 iass")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"状态共享-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态共享-store"}},[this._v("#")]),this._v(" 状态共享-store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("最基础模块，为了方便后续服务，默认最先加载")]),this._v(" "),s("li",[this._v("根据原则，页面之间不能存在耦合，又需要方便开发者页面内状态传值；路由进入：动态加载开发目录下 store.js，以模块独立；路由出去：自动注销;由于 store 为最基本模块，此功能交由 route 服务实现")]),this._v(" "),s("li",[this._v("原本后台系统业务不算太复杂，不需要使用 store 共享状态；这样会增加页面内组件之间的耦合，但是 store 方便开发者跨层级传值，以及上帝视角看数据；于是乎支持模块化 store,混乱也只是在这个应用页，需要开发自我评审，选择")]),this._v(" "),s("li",[this._v("提供 store 模块快速注册机制")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vuex全局模块配置")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"element"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[this._v("#")]),this._v(" element")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"多语言-language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多语言-language"}},[this._v("#")]),this._v(" 多语言-language")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("提供全面的多语言解决方案、集成了 elementUI 多语言"),s("br"),this._v("\n站在页面开发角度思考")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("在当前目录下，自动生成目录级别作用域，避免影响全局")]),t._v(" "),a("li",[t._v("使用便捷，不需要手动定义作用域、直接 this.$lang 便可直接使用该目录下多语言")]),t._v(" "),a("li",[t._v("思考代码书写流程，都是一个个字段开发，所以格式是以字段为 key,再去写各种语言")]),t._v(" "),a("li",[t._v("服务提供了 store 与内置方法；可以直接修改、获取当前语言")]),t._v(" "),a("li",[t._v("有些常见的多语言，需要全局；提供了 this.$globLang ，获取更目录下多语言配置")]),t._v(" "),a("li",[t._v("通过 localstorage 记录当前用户选择语言，避免重复切换")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"配置文件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-2"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      defalut"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认语言、localstorage优先")]),t._v("\n      list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持语言列表")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'中文'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'English'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      glob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据模拟-mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模拟-mock"}},[this._v("#")]),this._v(" 数据模拟-mock")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("提供了真实的 http 请求模拟，更便于开发者调试")]),this._v(" "),s("li",[this._v("内置了 mockJS 可以随机生成模拟数据")]),this._v(" "),s("li",[this._v("内置 delay 函数，将 http 请求时间拉长，模拟各种网络情景")]),this._v(" "),s("li",[this._v("所有请求相关 URL 为 http 请求因子定义，更便捷的一一对应，以及后面权限相关")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"请求配置-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求配置-request"}},[this._v("#")]),this._v(" 请求配置-request")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("提供本地数据 mock,复用 mock.js 文件")]),t._v(" "),a("li",[t._v("提供请求数据格式化，当数据不符合格式时，自动报错")]),t._v(" "),a("li",[t._v("内置 net 函数，以权限因子的形式进行网络请求")]),t._v(" "),a("li",[t._v("自动引用当前开发目录下的 api.js 文件，直接使用 this.$api 即可调用该函数")]),t._v(" "),a("li",[t._v("注册服务，提供请求、响应的过滤器，方便上层应用开发")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"权限因子定义以及使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限因子定义以及使用"}},[this._v("#")]),this._v(" 权限因子定义以及使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("定义：method:url"),s("br"),this._v("\n例如：post:/v1/api/user/{userID}"),s("br"),this._v("\n使用：net(path, { params, query, body })"),s("br"),this._v("\npath:权限因子、params：URL 上变量值、query：URL?参数、body 请求体\n权限相关：sass 模块 permission 中讲到")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"配置文件-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-3"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mock"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开启本地模拟")]),t._v("\n      create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化时配置，内置axios与之一致")]),t._v("\n        baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求数据格式化")]),t._v("\n        codeKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        successCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        msgKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        dataKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"路由-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由-router"}},[this._v("#")]),this._v(" 路由-router")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("根据当前开发目录自动加载路由，无需在同一地方配置，减少代码冲突")]),t._v(" "),a("li",[t._v("提供两种形式路由：全局页面形式、菜单页页面形式")]),t._v(" "),a("li",[t._v("内置服务，页面跳转时开启 NProgress，可通过全局配置文件配置表")]),t._v(" "),a("li",[t._v("注册服务，提供路由'beforeEach', 'beforeResolve', 'afterEach'钩子，方便上层应用开发")]),t._v(" "),a("li",[t._v("内置组件 iframe 组件，通过页面级别 config.js 配置，引用第三方页面")]),t._v(" "),a("li",[t._v("内置 redirect 组件，用来强制刷新 keep-alive 缓存")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"全局配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置文件"}},[this._v("#")]),this._v(" 全局配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexPage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳转首页地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/local/page1'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nProgress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" showSpinner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进度条配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自动加载组件-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动加载组件-components"}},[this._v("#")]),this._v(" 自动加载组件-components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("自动加载 components 目录下面的组件，注册到全局，一定程度上解决双手；")]),this._v(" "),s("li",[this._v(".vue-bk 文件不进行加载")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自动加载-svg-图片-svg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动加载-svg-图片-svg"}},[this._v("#")]),this._v(" 自动加载 SVG 图片-svg")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sass-层-应用解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass-层-应用解决方案"}},[this._v("#")]),this._v(" sass 层-应用解决方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"复制功能-copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制功能-copy"}},[this._v("#")]),this._v(" 复制功能-copy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("提供复制功能；调用 this.$service.copy.copyText(text,cb)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"变化-dom-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变化-dom-title"}},[this._v("#")]),this._v(" 变化 dom.title")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("加载页面配置的 title,当路由变化时，自动改变 dom.title")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"布局-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局-layout"}},[this._v("#")]),this._v(" 布局-layout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("提供内置典型的后台页面布局；如果某个块组件不合适，可以覆盖该组件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"全局配置文件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置文件-2"}},[this._v("#")]),this._v(" 全局配置文件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左边配置")]),t._v("\n        logo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左边logo部分配置")]),t._v("\n          title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VUE ADMIN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VUE后台管理'")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          logo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/logo.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点击logo跳转地址")]),t._v("\n          showLogo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示logo")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        menu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 菜单配置，也可以不配置，通过后面主题来配置各种样式菜单")]),t._v("\n          backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#545c64'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          textColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ffffff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          activeTextColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ffd04b'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右边布局头部")]),t._v("\n        affixHeader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否固定头部")]),t._v("\n        tagsView"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否展示多标签页")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      setting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右边设置")]),t._v("\n        show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户自定义配置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"loading-加载中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-加载中"}},[this._v("#")]),this._v(" loading-加载中")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("页面进入时，便插入了 loading,减少白屏时间")]),t._v(" "),a("li",[t._v("提供服务 open、close loading")]),t._v(" "),a("li",[t._v("设置 loading 最大时长；避免出现某些 BUG 时，一直 loading 阻挡用户操作")]),t._v(" "),a("li",[t._v("注册进入请求服务，请求时开启 loading、请求结束 loading 计数器-1")]),t._v(" "),a("li",[t._v("可快速自定义 loading、在 public 文件夹下加入 loading.svg；svg 动画方便置换、矢量、数据量小")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"navs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navs"}},[this._v("#")]),this._v(" navs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("根据页面配置文件，快速生成菜单")]),this._v(" "),s("li",[this._v("注册进入 store,可以修改")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"用户权限-permission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户权限-permission"}},[this._v("#")]),this._v(" 用户权限-permission")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("token 处理；无 token 或者 token 失效跳转到登录页面；token 过期，自动刷新 token")]),t._v(" "),a("li",[t._v("依赖于 route、reqeust 服务")]),t._v(" "),a("li",[t._v("调用用户信息以及用户权限接口，存入 store 中")]),t._v(" "),a("li",[t._v("提供 this.$hasPermission 判断功能模块是否有权限")]),t._v(" "),a("li",[t._v("页面级别配置，提供了 permission 配置，开发环境当调用接口时，会检查，如果该接口没有在当前页面配置时，会报错提示")]),t._v(" "),a("li",[t._v("npm run permission 会生成整个应用的菜单权限树；在每次部署时，可以将菜单权限树加入到数据库中，避免权限与实际不统一，没有及时更新问题；我看很多后台系统的权限只是个摆设，只是控制到前端页面显隐，并没有控制到后端 API 权限控制；通过这个文件精确的表示到某个功能需要调用的哪些 API，而且不需要手动录入，降低风险")]),t._v(" "),a("li",[t._v("功能依赖于其他页面时，如果不是很熟悉业务，更是不好配置；于是出现 goPage 选项，自动加载引用页的权限进入该功能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[this._v("#")]),this._v(" 全局配置")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("permission"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户信息")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get:/v1/apis/userInfo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPermission")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户权限")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get:/v1/apis/permission'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      whiteSource"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'openNew'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 功能白名单")]),t._v("\n      whiteAPI"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("                                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// API白名单")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get:/v1/apis/userInfo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get:/v1/apis/userInfo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get:/v1/apis/permission'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loginUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/full/login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录页路径，可以是http的登录总登录，然后通过backURL跳转过来")]),t._v("\n      headerKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//token请求头Key")]),t._v("\n      token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//token相关操作")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("refresh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        OverTimeCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//token过期")]),t._v("\n        InvalidCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4002")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//toekn失效")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"监听页面变化-rezie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听页面变化-rezie"}},[this._v("#")]),this._v(" 监听页面变化-rezie")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1. 监听页面大小变化，将尺寸，device放入store\n2. 尺寸小于某个值（框架内置）,每次切换菜单，都会关闭左边菜单，来增加窗口面积\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"主题切换-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题切换-theme"}},[this._v("#")]),this._v(" 主题切换-theme")])}],!1,null,null,null);s.default=e.exports}}]);