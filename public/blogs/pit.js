(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.pit = `
### 1. Array.sort 在 Firefox 中

\`\`\`javascript
[1,2,3].sort((a,b)=>{...});
\`\`\`

在其他浏览器中，a 是后面一个元素，b 是前面一个元素，是反着来的<br/>
比如上面第一次排序时，a 是 2，b 是 1, 是反着传的<br/>
但在 Firefox 里，是正着的，a 是 1，b 是 2<br/>
事实证明，反着来比较好，正着来，你自定义的排序方法需要完整的排序，否则可能会有遗漏。

### 2. window.location.replace

从 A 页面正常跳转到 B，再从 B \`location.replace\` 跳转到 C<br/>
从 C 按返回键，会直接回到 A<br/>
这没问题<br/>
但如果 C 是一个无效的网址，浏览器会显示“无法打开该网址”，此时再按返回键<br/>
其他浏览器依然会返回到 A<br/>
但 IE/Edge/Safari 会返回到 B

### 3. Firefox mac 版和 windows 版

canvas 绘制阴影，mac 和 windows 下表现不一样，我忘记了，太久了。<br/>
鼠标滚轮事件返回的滚动值，mac 和 windows 下不一样，一个快一个慢

### 4. IE flex:1 问题

IE11 中 flex:1 没高度的，需要用 flex:auto;

### 5. Vue 2.x

在计算属性中调用别的计算属性，调用次数越多越卡，尤其是在循环中

\`\`\`javascript
// 错误的做法：
for (let i = 0; i < 1000; i++) {
    let a = this.B; // B是另一个计算属性
}

// 正确的做法
const b = this.B;
for (let i = 0; i < 1000; i++) {
    let a = b; // 这样就避免了循环中每次都去访问this.B
}
\`\`\`

### 6. safari中grid的坑
一个div设置了min-height, display为grid，并且设置了padding,<br/>
那么其子元素的高度如果是百分比，这个百分比是包含了padding再计算的；所以当父级高度足够小时，子元素会超出父元素。<br/>
详见：https://codepen.io/javaluo/pen/ExPKYpG，在Safari中，高度小于400时，下方padding被超出

 `;
})();
