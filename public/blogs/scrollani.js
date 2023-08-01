(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.scrollani = `
# DEMO

[codepen scroll/view animation demo](https://codepen.io/javaluo/pen/JjewBxJ)

# scroll滚动

\`\`\`html
    <div class="box">
        <div class="menu">
            <div class="logo">Logo</div>
        </div>
    </div>
\`\`\`

- 上面的代码将模拟一个头部导航栏，其有一个Logo元素
- 为其添加基本的CSS:(不用细看)
\`\`\`css
.box{
    width: 500px;
    height: 300px;
    overflow: auto;
    background-color: #cccccc;
    & .menu {
        position: sticky;
        top: 20px;
        width: 80%;
        height: 80px;
        margin: 0 auto;
        background-color: #ff0000;
        & .logo{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 32px;
            height: 32px;
            transform: translate(-50%, -50%);
            background-color: #ff00ff;
        }
    }
}
\`\`\`


- 接下来需要为.menu和.logo定义动画：
\`\`\`css
/* 定义.menu的动画 */
@keyframes ani-menu {
    0% {
        background-color: #ff0000;
        height: 80px;
        width: 80%;
        transform: translateY(0);
    }
    100%{
        background-color: #0000ff;
        height: 50px;
        width: 100%;
        transform: translateY(-20px);
    }
}

/* 定义.logo的动画 */
@keyframes ani-logo {
    0% {
        transform: translate(-50%, -50%);
        left: 50%;
    }
    100%{
        transform: translate(0, -50%);
        left: 0;
    }
}
\`\`\`

- 然后在.menu和.logo中应用这些动画：
\`\`\`css
.box{
    scroll-timeline-name: --box;
    scroll-timeline-axis: y;

    & .menu {
        animation: ani-menu linear both;
        animation-timeline: scroll();
        animation-range: 0 100%;

        & .logo{
            animation: ani-logo linear both;
            animation-timeline: --box;
            animation-range: 0 100%;
        }
    }
}
\`\`\`

- 解析.menu<br/>
在.menu中添加了\`animation-timeline: scroll();\`,<br/>
表示根据滚动条的滚动位置来控制动画的进展。<br/>
同时添加了\`animation-range: 0 100%;\`<br/>
表示从滚动条的高度0开始到100%的范围都作为动画的关联范围。<br/>
可以根据不同的需求定义，比如：\`animation-range: 50px 80%\`,<br/>
则表示动画从滚动条滚动到50px开始，滚动到80%时播放完毕。<br/>

- 解析.logo<br/>
由于.logo元素是.menu的子集，.menu是.box的子集，要想.logo根据.box的滚动进度来执行动画，<br/>
就需要在.box中定义\`scroll-timeline-name: --box;\`, 需要用一个css变量来赋值。<br/>
然后在.logo中定义 \`animation-timeline: --box;\`;<br/>
如果采用了这种方式，那还可以在.box中加上\`scroll-timeline-axis: x/y/block/inline;\`来定义监听的轴。

### animation-timeline: srcoll()
- 定义动画根据滚动条来作为时间线

#### scroll(scroller axis)
- 可接受两个参数：<br/>
1. scroller: <br/>
    - nearest: 使用最近的祖先滚动容器, 默认值<br/>
    - root: 使用文档根元素，即\`document.documentElent\`<br/>
    - self: 使用元素自身<br/>

2. axis: <br/>
    - y: 监听y轴滚动条<br/>
    - x: 监听x轴滚动条<br/>
    - block: 监听块级滚动条<br/>
    - inline: 监听行内滚动条<br/>

（inline始终与文字方向保持一致，通常就是x轴，但当设置\`writing-mode: vertical-rl;\`时，inline就会变成y轴。block正好相反）

### animation-range: 0 100%;
- 定义动画开始和结束的范围
- 对于scroll动画，表示滚动条从上到下或从左到右的开始位置和结束位置
- 对于view动画，表示从下进入到从上离开 或 从右进入到从左离开 的开始位置和结束位置

### scroll-timeline-name: --name;
- 定义滚动容器的引用名，通常用于给孙辈或其它非子集的元素赋值

### scroll-timeline-axis: x/y/block/inline;
- 定义滚动容器监听哪一个轴

### scroll-timeline: --name axis;
- 是上面两个属性的简写

## 注意点
一个完整的animation通常会定义这些属性：<br/>
\`animation: name duration timing-function delay iteration-count direction fill-mode;\`<br/>
但是当使用了\`animation-timeline\`时：<br/>
- 不要设置\`duration\`（动画持续时间），会出现奇怪的问题。<br/>
- \`delay\`（动画延迟时间）会失效，由\`animation-range\`接管<br/>
- \`iteration-count\`(动画执行次数)不要设置为\`infinite\`(无限)，这样就不会有动画了

# view滚动

\`animation-timeline\` 除了可以赋值\`scroll()\`外，还可以赋值\`view()\`<br/>
表示当元素从页面的下方进入可视区域时，开始动画，<br/>
当元素由页面上方消失在视野外时，动画执行完毕。

### animation-timeline: view()
- 定义动画根据自身在可视区域的位置来执行

#### view(axis inset)
- 可接受两个参数<br/>
1. axis: <br/>
    - y: 监听y轴滚动条<br/>
    - x: 监听x轴滚动条<br/>
    - block: 监听块级滚动条<br/>
    - inline: 监听行内滚动条<br/>

inset: (视口偏移量，类似\`scroll-padding\`)
    可以是1个值或两个值

例子：
\`\`\`css
    div{
        animation-timeline: view();
        animation-timeline: view(x);
        animation-timeline: view(y 20%); /* 20% ~ 80% */
        animation-timeline: view(20% auto);
        animation-timeline: view(y 50px 40%); /* 50px ~ 60%， 这个40%表示距离下边缘的偏移量 */
    }
\`\`\`

#### view-timeline-name: --name;
- 定义滚动区域的引用

### view-timeline-axis: x/y/block/inline;
- 如果使用了\`view-timeline-name\`来指定\`animation-timeline\`的值<br/>
则可以使用\`view-timeline-axis\`单独指定轴

#### view-timeline-inset: 0 100%;
- 如果使用了\`view-timeline-name\`来指定\`animation-timeline\`的值<br/>
则可以使用\`view-timeline-inset\`单独指定偏移量
- 这个属性和\`animation-range\`会同时起作用(叠加)

#### view-timeline: --name block;
- \`view-timeline-name\` 和 \`view-timeline-axis\` 的简写

## 注意
由于\`view()\`是根据自身相对于可视区域来执行动画，所以不需要关心是根据哪个容器。<br/>
因此当定义\`view-timeline\`相关的属性时，是直接在自身上定义，而不是在容器上定义。<br/>
这跟\`scroll-timeline\`不同，\`scroll-timeline\`需要在容器上定义，然后在子元素上使用。

所以看起来\`view-timeline\`相关的属性显得有些多余，直接\`animation-timeline:view()\`就好了。

## timeline-scope: --name;
- 在scroll滚动动画中，所有的设置都只能在容器的后代中生效<br/>
如果在容器之外有一个元素需要根据滚动条来执行动画，则需要在它们的共同父级设置\`timeline-scope\`，比如在body上设置这个属性<br/>
直接把\`scroll-timeline-name\`的值赋给\`timeline-scope\`<br/>
这样在容器外面的元素上也能通过\`animation-timeline: --name\`来应用动画了<br/>
这个属性需要Chrome116以上
    
# @scroll-timeline 规则

\`\`\`css
@scroll-timeline moveTimeline {
    source: auto;
    orientation: vertical;
    scroll-offsets: 0px, 500px;
}
\`\`\`

这个是完全另外一种语法，暂时没有浏览器支持，略。
  `;
})();
