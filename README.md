# Zero - jslib


从 0 开始创建一个 JavaScritp / TypeScript 库

**0 配置** : 预置了所有配置，可以直接开始编写代码，并且立即享受以下功能：

- 模块打包(Rullup + Webpack)
- Babel 语法转换
- 单元测试 (Jest）
- 覆盖率测试 (Jest）
- TypeScript 支持
- 文档生成（jsdoc）



## npm script

```
npm run build
```

命令|描述
---|----
`dev`|开发，将开启 rullup 的 watch 模式，对源文件修改会触发 `build`。
`build`|构建代码，源文件被构建为最终生成文件放在 `dist` 目录下的
`build-all`|相当于清空 `dist` 目录 + `build` + `build-bundle`
`build-bundle`|使用 webpack 构建 bundle，bundle 用在对兼容性要求高的场合
`build-and-publish`|相当于  `build-all` + `doc` + `publish`
`doc`|根据源码的注释（jsdoc）生成文档，并把文档和 `README-HEAD.md` 合并生成 `README.md`
`test`|启动测试（Jest）
`test-coverage`|启动覆盖率测试并生成报告放在 `coverage` 目录下
`publish`|发布包到 npm

## Enjoy
你只需要将你编写的库的接口写在 `src/index.js` 和 `src/index.typescript.ts` 中就可以了，`src/index.typescript.ts` 会用来生成
`/typings` 给库的使用者提供类型检查和代码提示。
 
  
