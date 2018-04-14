# Zero - jslib

<p align="center"> <img src="https://github.com/nullice/zero-jslib/raw/master/logo.png"> </p>

[![Build Status](https://travis-ci.org/nullice/zero-jslib.svg?branch=master)](https://travis-ci.org/nullice/zero-jslib) [![Coverage Status](https://coveralls.io/repos/github/nullice/zero-jslib/badge.svg?branch=master)](https://coveralls.io/github/nullice/zero-jslib?branch=master)

从 0 开始创建一个 JavaScritp / TypeScript 库。

创建一个**现代的**（用最新的 ECMAScript 语法或者 TypeScript 编写，并且提供向下兼容性），**有质量的**（拥有单元测试、覆盖率测试），**友好的**（jsdoc 注释、自动生成文档、提供 d.ts 供 IDE 显示提示）的代码库并不是一件轻松的事，往往代码还没开始写就要为工具链配置写繁杂的配置，还要调试工具链，甚至还要各种工具中做比较和挑选，而且这一切会浪费大量时间。
而这个项目就是一个帮你配置好完整工具链，能让你立即开始写代码的模板。


**0 配置** : 预置了所有配置，可以直接开始编写代码，并且立即享受以下功能：

- 模块打包(Rullup + Webpack)
- Babel 语法转换
- TypeScript 支持
- 单元测试 (Jest）
- 覆盖率测试 (Jest）
- 自动文档生成（jsdoc）
- 基本的持续集成配置（travis-ci, coverall）



## 开始

```
$ git clone https://github.com/nullice/zero-jslib.git
$ cd zero-jslib
$ npm i
$ npm run zero-init your-package-name YouPackgeFullName



然后就可以删除本项目的 .git 了：

unix：
$ rm -rf .git

windows：
rmdir /s/q .git
 

```

## npm script

```
npm run build
```

命令|参数|描述
---|---|----
`dev`| |开发，将开启 rullup 的 watch 模式，对源文件修改会触发 `build`。
`build`| |构建代码，源文件被构建为最终生成文件放在 `dist` 目录下的
`build-all`| |相当于清空 `dist` 目录 + `build` + `build-bundle`
`build-bundle`| |使用 webpack 构建 bundle，bundle 用在对兼容性要求高的场合
`build-and-publish`| |相当于  `build-all` + `doc` + `publish`
`doc`| |根据源码的注释（jsdoc）生成文档，并把文档和 `README-HEAD.md` 合并生成 `README.md`
`test`| |启动测试（Jest）
`test-coverage`| |启动覆盖率测试并生成报告放在 `coverage` 目录下
`publish`| |发布包到 npm
`zero-init`|`name`  `fullName`| 用指定的名字初始化库

## 目录说明
 - `dist`：打包生成的最终产品 
 - `doc`：文档
 - `src`：源代码
 - `temp`：临时文件
 - `test`：测试代码
 - `coverage`：覆盖率测试报告
 - `dev`：开发时在浏览器中用的测试 html
 - `typings`：d.ts 声明文件
 - `.zero`：初始化模板




## Enjoy
你只需要将你编写的库的接口写在 `src/index.js` 和 `src/index.typescript.ts` 中就可以了，`src/index.typescript.ts` 会用来生成
`/typings` 给库的使用者提供类型检查和代码提示。
 
  
## 注意

- 默认会进行 node.js 和 Web 2 种打包，如果你是纯 node.js 库，并引入了 `fs` 这种只有 node.js 才能用的库，需要手动修改 `webpack.config.js` 去掉 Web 部分的打包，否则可能会打包失败。
- `README.md` 文件会自动生成，所以你要写 README 要写在 `README-HEAD.md` 中，否则用 `npm run doc `生成文档时，`README.md` 会被覆盖。

