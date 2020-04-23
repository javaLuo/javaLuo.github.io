(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.shadow = `
新版本 Chrome 浏览器默认的\`<audio>\`标签长这样：

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow5.jpg)

这体积实在太大，且颜色常常与 UI 设计不符。

在 Firefox、Safari 等现代浏览器中直接通过 CSS 可一定层度改变原生样貌，比如宽高和背景色。但如果想改变内部按钮形状、字体颜色就捉襟见肘。Chrome 更是封装得连背景色也改不了。

通常的做法是网上找个播放器插件代替，或自己动手实现 audio 的 API 做一个简易的播放器。

有没有即不用找插件也不用动手造轮子的方法呢？

## Shadow DOM

打开 Chrome 开发者工具（F12），右上角三个点的那个按钮中有个“Setting”，里面有个“Show user agent shadow DOM”, 勾上

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow4.jpg)

再来看页面中的\`<audio>\`会发现是这样的：

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow3.jpg)

其内部有个#shadow-root，这便是\`<audio>\`的影子 DOM 结构了。显然\`<audio>\`也是用一堆\`<div>\`做出来的控件，这些内部的\`<div>\`上都有"pseudo"属性，这都是伪元素，所以想要改变内部样式只需要这么做：

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow2.jpg)

原生\`<audio>\`就变成了这样：

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow1.jpg)

清爽多了，如果想要改变字体颜色或图标，只需要找到对应的伪元素，覆盖其 CSS 即可。

值得注意的是，影子 DOM 里有一些特殊的 CSS, 比如要覆盖\`<audio>\`中的小图标需要这样写：background:-webkit-image-set(url(...))。而有些样式无论怎么覆盖都没有用，或许是 Chrome 中的优先级很高。

除了\`<audio>\`，还有\`<video>\`、\`<input type="range">\`等原生控件通过以上方法均可以修改其内部样式。

## Shadow DOM 例子

我们可以给任意普通标签附加影子，使普通的标签拥有丰富的功能。看过《JOJO 的奇妙冒险》吗，这就像是替身；或者比如你在镜子前，发现镜子里的人竟然不是自己是什么感觉呢。例：

\`\`\`javascript
// 获取一个div，这个div的内容原本是“Hello World”
const dom = document.querySelector('div');

// 创建shadow
const shadow = dom.attachShadow({ mode: 'open' });

// 创建一个p标签，其内容为“Hei Hei Hei”
const p = document.createElement('p');
p.innerText = 'Hei Hei Hei';

// 把p添加到shadow中
shadow.appendChild(p);
\`\`\`

最终渲染的结果是：

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow0.jpg)

由于这样的特性我们可以做出丰富的自定义标签，这种技术也可以用于局部 CSS 处理和反爬虫（爬虫爬不到影子中的内容）

## Shadow DOM API

1. **dom.attachShadow(mode)**

给 dom 元素创建影子

参数：\`{mode: 'open'/'closed'}\`<br/>
mode 为'open'时，可以通过 dom.shadowRoot 拿到该 dom 元素的影子根节点，<br/>
反之‘closed’只会得到 null

返回值：shadow 根节点

2. **dom.shadowRoot**

影子本身，即影子的根节点

跟 document 一样可以 appendChild 一系列操作，普通 DOM 和影子是相互隔离的，普通 DOM 的 CSS 无法影响影子中的样式，影子中的样式也无法影响普通 DOM

属性：

\`\`\`javascript
shadowRoot.mode; // 只读， 'open'或'closed'
shadowRoot.host; // 只读，返回影子的宿主DOM元素
shadowRoot.innerHTML; // 影子中的内容
\`\`\`

3. **shadow 中的伪类选择器**

\`\`\`javascript
:host // 定义所有内部的通用样式
:host() // 比如:host(p), 当宿主为<p>时才生效
:host-context() // 比如:host-context(p), 当宿主或其祖先级所有宿主中只要有<p>就生效
\`\`\`

这几个是用在 shadow 中的，比如在 shadowRoot 上 appendChild \`<style>\`标签，在这个\`<style>\`标签中就可以用这些伪类定义 CSS 样式

4. **伪元素**

\`::shadow\`, \`::content\`, \`/deep/\`, 均已废弃，经测试没有任何效果，所以我琢磨着已经被废弃了，MDN 上的相关文档也已被删除。

## 兼容性

目前只有 Chrome 浏览器支持，其他浏览器正在跟进。

![](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/shadow/shadow6.jpg)

## 欢迎关注我的公众号: 雨世界

![雨世界](https://raw.githubusercontent.com/javaLuo/javaLuo.github.io/master/assets/qrcode.jpg)

这篇文章首次发表在公众号上，现在搬到 github

  `;
})();
