(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.wasm = `
## 别 BB，赶紧说怎么用

<br/>
**搞个 package.json， 然后安装：**

\`\`\`javascript
    yarn add AssemblyScript/assemblyscript -D
\`\`\`

> assemblyscript 是一个能把 TypeScript 文件编译为 wasm 二进制文件的编译器<br/>
> 它本身也是 TypeScript 的子集

<br/>
**然后运行初始化npx指令**

\`\`\`javascript
    npx asinit .
\`\`\`

> 表示把当前目录构建成一个最基本的 AssemblyScript 项目<br/>
> 最后目录结构看起来像这样：

![wasm1](https://raw.githubusercontent.com/javaLuo/javaimluo/master/blog-wasm/wasm1.png)

> 只需要关心 index.ts 就可以了，这就是最终要编译为 wasm 的东西

<br/>
**然后运行 build 指令**

\`\`\`javascript
    yarn asbuild
\`\`\`

> 会在 build 文件夹下生成最终文件

\`\`\`javascript
optimized.wasm; // 最终wasm
optimized.wasm.map; // 对应的map文件，调试用
optimized.wat; // 文本格式的文件，可以看到里面生成的文本格式代码
untouched.wasm; // 未压缩过的wasm，也能用
untouched.wasm.map; // 调试用
untouched.wat; // 文本格式代码
\`\`\`

> 最终只需要用到 optimized.wasm

<br/>
**在 js 中加载 wasm**

\`\`\`javascript
fetch('./optimized.wasm')
    .then(res => {
    return res.arrayBuffer();
    })
    .then(res => {
    return WebAssembly.instantiate(res);
    })
    .then(res => {
    console.log(res.instance.exports.add(1, 2)); // 3
    });
\`\`\`

- 以上是浏览器原生 WebAssembly API 加载 wasm 的方式
- 需要异步加载，fetch 或 ajax 都行
- 我上面分成了好几步，全部写在一步里也可以
- 官方提供了好几个 API，但大致功能差不多
- 参见：<a href="https://developer.mozilla.org/zh-CN/docs/WebAssembly" target="_blank">https://developer.mozilla.org/zh-CN/docs/WebAssembly</a>

<br/>
**使用 webpack 加载 wasm**

> webpack 原生支持加载 wasm 文件<br/>
> webpack.config.js 中加一个配置：

\`\`\`javascript
module: {
    rules: [
    {
        test: /\.wasm$/,
        type: 'webassembly/experimental',
    },
    ];
}
\`\`\`

> js 代码中像普通 model 一样引入：

\`\`\`javascript
import * as wasm from './optimized.wasm';

wasm.add(1, 2); // 3
\`\`\`

> **注意：** 在 webpack4.x 可以像上面那样直接引入，但 webpack3.x 只能异步引入：

\`\`\`javascript
import('./optimized.wasm').then(wasm => {
    wasm.add(1, 2); // 3
});
\`\`\`

- 搞定了！

<br/>
## WebAssembly 能用来做什么

- 把一些复杂计算的东西封装成函数，编译为 wasm，运行起来更快
- AssemblyScript 是 TypeScript 的子集，用得最多的类型如 i32,i64,f32,f64,bool，所以与传统 JS 有很多不同的地方
- 需要学习 assemblyscript 的一些东西
- 参见：<a href="https://github.com/AssemblyScript/assemblyscript/wiki" target="_blank">https://github.com/AssemblyScript/assemblyscript/wiki</a>

## 嘿嘿嘿

- wasm 是二进制文件，里面写了什么内容只有程序员自己知道
- 但它本质还是通过浏览器来解释，比如V8引擎
- 目前我实在没找到有什么特别复杂的计算需要用 wasm 来显著提高性能的。除非是大型网页游戏或 3D 网页应用

`;
})();
