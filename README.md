# react-component-boilerplate

一个快速创建 react 组件的脚手架。

## 如何使用

### 第一步：配置 VSCode

请先安装下列插件：

* [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### 第二步：本地开发

```
// 安装依赖
yarn

// 本地调试
yarn start

// 编译打包
yarn build
```

### 第三部：提交代码

创建 commit 时不再使用 `git commit -m "你的内容"` 命令而是改用 `yarn commit`。它可以帮助你规范你的 git commit 格式。

## 为什么不直接使用开源的脚手架

开源的项目中有用于创建组件相关的脚手架，比如 [nwb](https://github.com/insin/nwb#react-components-and-libraries)。但是它没有以下功能：

* 支持 TypeScript
* 支持 CSS 预处理器或后置处理器

## 目录说明

#### src

用于存放你组件的源码

#### lib

用于存放组件编译后的代码，为 ES5 的语法。当其他开发者使用你的组件时，`lib/index.js` 就是你的入口文件。

#### example

用于进行本地调试以及组件功能演示。

## 结语

如果你也想自己搭建一个脚手架，你可以参考我写的这篇文章 [手摸手教你发布一个 react 组件](https://yingkaixiang.gitbook.io/frontend-wiki/web/javascript/react/how-to-create-a-react-component)。
