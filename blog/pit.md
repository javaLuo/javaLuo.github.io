### 1. Array.sort 在 Firefox 中

```javascript
[1,2,3].sort((a,b)=>{...});
```

在其他浏览器中，a 是后面一个元素，b 是前面一个元素，是反着来的<br/>
比如上面第一次排序时，a 是 2，b 是 1, 是反着传的<br/>
但在 Firefox 里，是正着的，a 是 1，b 是 2<br/>
事实证明，反着来比较好，正着来，你自定义的排序方法需要完整的排序，否则可能会有遗漏。

### 2. window.location.replace

从 A 页面正常跳转到 B，再从 B `location.replace` 跳转到 C<br/>
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
