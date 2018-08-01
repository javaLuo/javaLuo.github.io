* 这一次用的IntersectionObserver API实现的进入和离开动画
* 以前做过类似的，用的遍历，监听滚动条滚动位置，遍历所有子元素当前应有的状态，若子元素过多，难免会卡顿。

html:
```
<div id="scroll-box" class="scroll-box">
	<p>1</p>
	... 很多p标签
</div>
```

css:
```
.scroll-box{
	height: 300px;
	overflow: hidden;
}
.scroll-box>p{
	opacity: 0;
	transform: translateX(-20px);
	transition: all 300ms;
}

.scroll-box>p.show{
	opacity: 1;
	transform: translateX(0);
}
```

JS:
```
const p = document.querySelectorAll("#scroll-box>p");

const observer = new IntersectionObserver((entries)=>{
	entries.forEach((item)=>{
		if(item.isIntersecting){
			item.target.classList.toggle("show");
		} else {
			item.target.classList.remove("show");
		}
	})
},{
	root: document.getElementById("scroll-box"),
	rootMargin: "-10px 0px -10px 0px",
	threshold:0
});

Array.from(p).forEach((item)=>{
	observer.observe(item);
})
```

### 效果图：

![效果图](https://github.com/javaLuo/javaLuo.github.io/blob/master/assets/smooth_img1.gif)

* 想过用CSS变量来控制，但好像不行。CSS变量貌似不适合控制这种动态添加的长列表