# react-component-boilerplate

用于快速创建 react 组件的脚手架。

> 本项目默认使用 `yarn` 作为包管理器，以及使用 `npx` 执行命令行。你可以自行修改 `package.json` 来修改这些脚本。

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

## 如何使用

```
// 本地调试
yarn start

// 编译打包
yarn build
```

## 结语

如果你也想自己搭建一个脚手架，你可以参考我写的这篇文章 [手摸手教你发布一个 react 组件](https://yingkaixiang.gitbook.io/frontend-wiki/web/javascript/react/how-to-create-a-react-component)。
