## 各种高度

```
div.style.height // CSS中定义的高度，content内容区高度
div.clientHeight // div可见区域高度，不包括边框
div.offsetHeight // div可见区域高度，包括边框
div.scrollHeight // div真实高度，包括滚动区域的高度，不包括边框

```

> 普通DOM元素没有innerHeight属性，只有window对象有

```
window.innerHeight // 浏览器窗口中真正的内容区域的高度
window.screen.height // 显示器分辨率的高度
window.screen.availHeight // 显示器分辨率减去底部开始工具栏后的高度

```

## 各种top

```
div.style.top // CSS中定义的元素top，根据position定位而定
div.scrollTop // div的垂直滚动条已滚动的高度
div.offsetTop // div距离其有定位的父元素顶部的距离(滚动条的位置不影响该值)
div.clientTop // div的上边框厚度(border厚度)
```

> window对象没有scrollTop属性

## 位置相关API

### getBoundingClientRect()

```
div.getBoundingClientRect(); // 返回当前DOM元素的各种大小位置信息

{
	bottom, // div的底端离window视口底端的px值
	height, // div可见区域高度，包括边框
	left,   // div的左端离window视口左端的px值
	right,  // div的右端离window视口右端的px值
	top,    // div的顶端离window视口顶端的px值
	width,  // div本身的宽度，包括边框
	x,      // 同left
	y,      // 同top
}

```

### scrollIntoView()

```
div.scrollIntoView();
// 如果div的父级有滚动条，就让滚动条滚动到这个div所在的位置（效果类似锚点）
```

## scrollIntoViewIfNeeded();
```
div.scrollIntoViewIfNeeded();
// 与scrollIntoView类似，但如果div已经在视野内，就不会发生滚动
```

### IntersectionObserver API 元素交叉监听

```
/**
* new一个实例
* @param callback 触发事件时的回调函数
* @param options 配置参数
**/
const observer = new IntersectionObserver((entries, obs)=>{
		// 这里是定义事件的回调函数
		// entries包含了触发该事件的子元素的各种信息
		// obs就是当前这个observer实例
	}, {
		root: document.getElementById("ul"), // 监听哪个元素的滚动条（指定父元素）
		rootMargin: "0px 0px 0px 0px", // 检测元素重叠的偏移值
		threshold: 0.5, // 0~1，0:元素完全重叠时才会触发回调。1:元素只要有1像素交叉就会触发
	});

// 添加需要被监听的子元素
observer.observe(document.querySelector("#ul>li"));

// 也可以添加多个子元素，即监听多个子元素
Array.from(document.querySelectorAll("#ul>li")).forEach((item)=>{
	observer.observe(item)
})

// 每个被监听的子元素每次离开或进入父元素的可见区域时，都会触发一次回调函数
// 需要自己判断是离开，还是进入，是从上面离开或进入，还是从下面离开或进入
```