(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.shadow2 = `
## 这是用来干嘛的

即使在服务器被黑客黑进去的情况下，前端如何保护用户的关键信息不被修改

这是一个真实发生的**黑客入侵**事件<br/>
在区块链交易中，经常涉及到用户的钱包地址操作，<br/>
充币/交易/提币 都会用到这个钱包地址。<br/>

有一天黑客攻破了服务器，在前端代码中注入了一段JS代码，使得本应该显示用户钱包地址的地方被替换为了黑客自己的钱包地址。<br/>
如此一来当用户复制该地址进行充币时，币就会被充到黑客的钱包中去。<br/>
> *好在现代前端代码都经过了webpack编译混淆压缩，使得黑客难以篡改原始代码，而只能自己写一段JS去动态修改页面中的信息*

利用shadow dom mode closed模式，我们可以把用户的关键信息写到shadow中去，这样黑客即便修改了dom中的内容，却无法修改shadow dom中的信息。

HTML：
\`\`\`html
<div id="wallet">此处本应该显示用户的钱包地址，而此时被黑客修改为黑客的钱包地址</div>
\`\`\`

JS:
\`\`\`js
// 当前端请求接口获得用户真实的钱包地址时，我们做如下操作
const wallet = document.getElementById('wallet');
let shadow = wallet.attachShadow({mode: 'closed'}); // 创建shadow，且为closed模式
const t = document.createElement('span'); // 创建一个span
t.innerText = '真实的用户钱包地址'; // 将真实的钱包地址写入span
shadow.appendChild(t) // 将该span放进shadow
shadow = null; // 释放shadow
\`\`\`

只要数据库没有被黑，则我们认为此时接口返回的就是真实的钱包地址。之后即便黑客随意修改页面上的DOM也无法影响到shadow中的信息

## DEMO

<a href="https://codepen.io/javaluo/pen/NWRyXPM" target="_blank" rel="nofollow">https://codepen.io/javaluo/pen/NWRyXPM</a>

  `;
})();
