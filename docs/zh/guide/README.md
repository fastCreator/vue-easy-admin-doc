# 介绍

Vue Easy Admin 致力于为开发者提供一个快速开发，快速交付的，维护性高的中后台开发体系，提供：

- 通过 `vue-easy-admin` 脚手架快速构建项目。
- 通过基于典型中后台系统`vue-easy-admin-components` ，提供了丰富的 VUE 功能组件
- 通过基于典型中后台系统`vue-easy-admin-demo` ，提供典型的中后台开发交互场景
- 通过 `vue-easy-admin-doc` 提供详细的文档说明以及学习。

## vue-easy-admin

vue-easy-admin 提供了`快速构建项目`、`快速添加页面`脚本；快速构建的项目提供了，代码提交、代码格式化、发布等`工程化解决方案`；同时内置了许多典型`服务`

#### 服务

中后台中有许多的基础封装，如：路由、请求、多语⾔、mock、框架布局；

中后台中有许多典型的交互场景，如：权限控制体系、登录 token 刷新、打开页面时 loading、请求 net 时 loading、页面切换时置换 dom.title

`vue-easy-admin`提供了服务注册器，服务注册器内置配置：修改 webpack 运⾏环境、添加 VUE 插件、自动加载全局用户配置、加载页面用户配置文件、服务注册机制

服务注册机制：如：封装了 router 服务，每次路由切换的时候需要 loading;于是这个交互依赖于 router 服务；我们提供统一的事件注册机制，使用它；然后设置该回调权重‘pre、normal、end’,对这个交互进行排序；可以阻止后续事件

服务依赖关系与服务分层:

1. iass 层：基础库封装
2. pass 层：典型的交互场景封装,与业务逻辑无关
3. sass 层：与业务强关联的某⼀类业务封装、交由项⽬开发
4. 服务只能上层调⽤下层
5. 所有服务继承服务类；可使用服务加载器、可以提供服务注册机制

#### 框架开发原则

1. 服务之间尽量解耦；
2. BUG 限制在固定页，⽆相互影响；
3. ⼀个独⽴⽂件夹下⾯开发⼀个完整的页⾯（包括权限、菜单、路由、多语⾔、等服务配置）；
4. 站在页⾯开发者的⾓度思考使⼯作量最少，开发更⽅便,知识⾯更⼩,配置更符合开发流程；

## 工程化

以下功能已在快速构建项目时，自动添加；无需特别处理

### husky

作用：当代吗提交时，检查代码是否符合 eslint 规范；不规范自动修复；无法修复时，拒绝提交;[官方文档](https://www.npmjs.com/package/husky)

### commitizen

作用：解决 git commit 不够规范问题；内置 message 格式化选项；
使用：npm run commit [官方文档](https://www.npmjs.com/package/commitizen)

### deploy.sh

作用：快读发布脚本 [官方文档](https://cli.vuejs.org/zh/guide/deployment.html)

### vscode 插件

增加这几款 VS Code 插件，工作效率提升一大截

#### GitLens

GitLens 在 Git 管理上有很多强大的功能，比如：将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。

#### Chinese

将 VS Code 菜单翻译成中文

#### ESLint

作用：将 ESLint 集成到 VS Code 中，集成后可以自动规范我们的代码，保证团队一样的编码风格。
温馨提示：如果你使用的 Vue 项目，还需要手动配置 Eslint 识别 Vue 文件，因为 Eslint 是不识别 Vue 项目的。

#### javascript console utils

作用：快速增加 console.log 和删除 console.log

使用：选择要打印的变量，然后使用快捷键 Cmd + Shift + L 会自动在下一行输出 console.log（'variable：'，variable）。使用快捷键 Cmd + Shift + D 会删除当前文件中的所有 console.log

#### Vetur

作用：vue 必备插件之一。提供语法高亮、片段、整理/错误检查、代码提示等功能，安装后可以将 Vue 文件识别出来，使代码拥有和普通的 html 一样的高亮颜色与规则。

#### Project Manager

作用：是一款项目管理插件，有了这个切换项目就非常方便，不需要每次都重新打开一个 VS Code 编辑器页面。你只需要配置你每个项目的路径以及项目名称就可以了！

配置：
按住 command+ shift + p 打开配置文件，
输入 Project Manager: Edit Projects
修改 json，修改每个项目的 name 和 rootPath 即可
