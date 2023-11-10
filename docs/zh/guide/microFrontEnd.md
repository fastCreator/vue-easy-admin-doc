# 云前端

## 云服务

云服务理解成一栋大楼，而这栋楼又可以分为顶楼、中间、低层三大块。那么我们就可以把 Iass(基础设施)、Pass(平台)、Sass(软件)理解成这栋楼的三部分。基础设施在最下端，平台在中间，软件在顶端。

easy-admin 累比云服务的思想来实现

- store 内置为最底层，以便服务注册
- iass 解释为：中后台开发中使用的基础工具型服务，如：路由、请求、UI 组件库、mock 数据、多语言、布局等;与交互流程无关
- sass 解释为：中后台开发中使用的交互流程型服务，如：整个登录、token 流程、如根据页面，自动配置 document.title 等；与业务逻辑无关
- pass 解释为：公用的某个或多功能页面；复用业务逻辑

easy-admin 剥离并封装中后台典型的 iass、sass 服务；pass 服务提供了，规范的解决方案

### 内部实现要素

- iass、sass、pass 之间依赖关系；只能向下层引用，同层之间不能相互引用，避免代码耦合，逻辑混乱
- iass 与 sass 服务通过统一的注入机制，注入到整个框架中，注入代码逻辑、注入 vue 插件、注入 webpack 打包逻辑
- 容器：整个框架使用 npm 脚本的形式运行，内置了常见典型服务、内置 webpack 打包逻辑、开发者只需要关注当前页面逻辑开发
- 约定优于配置原则
- 从开发者的角度出发，尽量减少开发者工作量

### 未来

- 完善服务注册机制
- 开放服务注册机制，将服务单独设立库
- 完善组件库
- 开发框架流程分析以及优化

## 中后台云前端

## 微前端

微前端架构是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。

微前端主要解决以下问题

1. 后台比较分散，体验差别大，因为要频繁跳转导致操作效率低，希望能统一收口的一个系统内
2. 单页面应用非常庞大，多人协作成本高，开发/构建时间长，依赖升级回归成本高
3. 系统有二方/三方接入的需求

总结：后端解耦，前端聚合

目前微前端的主流做法是，搭建一个公用的平台，通过平台来引用独立子应用,好处主要是子应用完全独立；由于样式和脚本隔离问题，iframe 或者规范约束成为目前主要选择；选择规范，第三方应用无法规范；选择 iframe 通信将会成为问题

### 问题分析

- 技术栈问题：作为一个团队我们可以保证技术栈的统一，技术栈的统一减少开发成本、也有利于规范，快速解决问题
- 多人协作问题：通过 router、nav、permission 服务将每个页面独立在一个文件夹内，文件夹内拥有自己的完整配置，包括权限、菜单、路由等等;保证页面之间不出现耦合，这样能减少系统性 BUG，同时方便页面迁移与复用
- 多个后台出现微前端问题时，我们通过 iframe 服务引用第三方系统；
- 微前端解决的问题应该成为云前端的一个子服务而已