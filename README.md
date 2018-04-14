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

### `src/index.js`
主入口，会生成下列文件：
   - `XXXX.es.js`
   - `XXXX.umd.js`
   - `XXXX.web-bundle.js`

### `src/index.node.js`
Node.js 入口，用来与主入口区分，集成仅在 Node.js 环境才有的部分，需要手动编写。会生成下列文件：
   - `XXXX.node.js `
   - `XXXX.node-bundle.js`

### `src/index.typescript.ts`
TypeScript 入口，主要用来生成 TypeScript 定义文件，需要手动编写。会生成下列文件：
   - `types/index.typescript.d.ts`

## Usage

### Install
```bash
npm i -S XXXX
```

### Import
```js
// ES6 modules
import XXXX from "XXXX"

// Node.js (CJS) modules
var XXXX =  require ("XXXX")

// 浏览器载入
<script src="XXXX.umd.js"></script>

// 捆绑了所有 node_modules 依赖
import XXXX from "XXXX/dist/XXXX.node-bundle.js"

// 捆绑了所有 node_modules 依赖，浏览器适用
import XXXX from "XXXX/dist/XXXX.web-bundle.js"
```













## Functions

<dl>
<dt><a href="#sayHi">sayHi(text)</a> ⇒ <code>string</code></dt>
<dd><p>say hai boy</p>
</dd>
<dt><a href="#genColor">genColor(inColor, [upperCase])</a> ⇒ <code>string</code></dt>
<dd><p>转换一个色彩对象为文本</p>
</dd>
<dt><a href="#getNowTime">getNowTime()</a> ⇒ <code>number</code></dt>
<dd><p>获取当前 ms</p>
</dd>
</dl>

<a name="sayHi"></a>

## sayHi(text) ⇒ <code>string</code>
say hai boy

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 一段文本 |

<a name="genColor"></a>

## genColor(inColor, [upperCase]) ⇒ <code>string</code>
转换一个色彩对象为文本

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| inColor | <code>Color</code> | 色彩对象 |
| [upperCase] | <code>boolean</code> | 是否大写 |

<a name="getNowTime"></a>

## getNowTime() ⇒ <code>number</code>
获取当前 ms

**Kind**: global function  
