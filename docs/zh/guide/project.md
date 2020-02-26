# 工程化

以下功能已在快速构建项目时，自动添加；无需特别处理

## 代码提交以及发布

### husky

作用：当代码提交时，检查代码是否符合 eslint 规范；不规范自动修复；无法修复时，拒绝提交;[官方文档](https://www.npmjs.com/package/husky)

### commitizen

作用：解决 git commit 不够规范问题；内置 message 格式化选项；
使用：npm run commit [官方文档](https://www.npmjs.com/package/commitizen)

### deploy.sh

作用：快读发布脚本 [官方文档](https://cli.vuejs.org/zh/guide/deployment.html)

## vscode 插件

增加这几款 VS Code 插件，工作效率提升一大截

### GitLens

GitLens 在 Git 管理上有很多强大的功能，比如：将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。

### Chinese

将 VS Code 菜单翻译成中文

### ESLint

作用：将 ESLint 集成到 VS Code 中，集成后可以自动规范我们的代码，保证团队一样的编码风格。

温馨提示：如果你使用的 Vue 项目，还需要手动配置 Eslint 识别 Vue 文件，因为 Eslint 是不识别 Vue 项目的。

### javascript console utils

作用：快速增加 console.log 和删除 console.log

使用：选择要打印的变量，然后使用快捷键 Cmd + Shift + L 会自动在下一行输出 console.log（'variable：'，variable）。使用快捷键 Cmd + Shift + D 会删除当前文件中的所有 console.log

### Vetur

作用：vue 必备插件之一。提供语法高亮、片段、整理/错误检查、代码提示等功能，安装后可以将 Vue 文件识别出来，使代码拥有和普通的 html 一样的高亮颜色与规则。

### Project Manager

作用：是一款项目管理插件，有了这个切换项目就非常方便，不需要每次都重新打开一个 VS Code 编辑器页面。你只需要配置你每个项目的路径以及项目名称就可以了！

配置：
按住 command+ shift + p 打开配置文件，输入 Project Manager: Edit Projects；修改 json，修改每个项目的 name 和 rootPath 即可
