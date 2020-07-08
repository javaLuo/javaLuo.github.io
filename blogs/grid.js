(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.grid = `
##父级属性
**display**

* grid;	// 块级网格
* inline-grid;	// 行级网格
* subgrid;	// 继承父级的网格属性（行列大小都会被继承）

> column、float、clear、vertical-align 对 grid 失效

**grid-template-columns  定义列**

> 语法：<track-size><line-name><track-size><line-name>...<br/>
> 例子：1fr 2fr 1fr;<br/>
> &#12288;&#12288;&#12288;100px auto 1fr;<br/>
> &#12288;&#12288;&#12288;2rem 20% 1fr;<br/>
> &#12288;&#12288;&#12288;[line1] 40vw [line2] 1fr;<br/>
> &#12288;&#12288;&#12288;20px repeat(2, 1fr) 5%; // 使用repeat可以重复定义<br/>

> auto与fr不同，auto以元素自身内容的宽高决定宽高，fr以剩余空间大小平均分配

**grid-template-rows 定义行 同上**

**grid-template-areas 定义具名的区域 非必要**
> 例子：

\`\`\`
    grid-template-areas:
        "header header header"
        "menu main main main"

    .item-a{ grid-area: header; }
    .item-b{ grid-area: menu; }
    .item-c{ grid-area: main; }
    .item-d{ grid-area: footer; }

    <div class="container">
        <div class="item-a">1</div>
        <div class="item-b">2</div>
        <div class="item-c">3</div>
        <div class="item-d">4</div>
    </div>
\`\`\`

> 就像table合并行列一样，可以纵横合并，但只能是矩形，不能是奇怪的形状

**grid-template 简写grid-template-rows、grid-template-columns、grid-template-areas**

* none;	// 都设置为默认值
* subgrid;	// grid-template-rows 和 grid-template-columns 设为subgrid.grid-template-areas设为默认值
* rows/columns: 1fr 1fr 1fr/1fr 50px 1fr; 设置grid-template-rows 和 grid-template-columns; grid-template-areas为none;

> 还可以接受一个更复杂但更方便的参数来同时设置3个值：

\`\`\`
[line-name] "header header header header" 25px [line-name]
[line-name] "menu main main main" auto [line-name]
[line-name] "footer footer footer footer" 25px [line-name]
\`\`\`
>第1行，是header 区域，4列，这一行有25px高<br/>
第2行，menu区域和main区域，4列，这一行高度为auto<br/>
第3行，footer区域，4列，这一行有25px高<br/>

> 我觉得我不会这么用，而且我也不想用grid-template-areas

**grid-column-gap 指定列与列之间的间隙，不包括两端**

**grid-row-gap 指定行与行之间的间隙，不包括两端**

**grid-gap 简写grid-row-gap/grid-column-gap**
>例：
>grid-gap: 10px 5px; // 行与行10px 列与列5px

**justify-items 主轴对齐方式（规定每一个单元格中的内容的对齐方式）**
* start; // 主轴前端对齐
* end; // 主轴末端对齐
* center; // 居中对齐
* stretch; // 内容占据整个宽度 默认值

**align-items 交叉轴对齐方式（规定每一个子级中的内容的对齐方式）**
* start; // 交叉轴前端对齐
* end; // 交叉轴末端对齐
* center; // 居中
* stretch; // 占据整个高度 默认值

**justify-content 主轴对齐方式（规定每一个单元格的对齐方式）**
即当子级的总宽度小于容器宽度时，子级的排列方式
* start; // 与网格容器前端对齐
* end; // 与网格容器末端对齐
* center; // 整体居中
* stretch; // 充满 默认值
* space-around; // 两端对齐，有边距
* space-between; // 两端对齐，无边距
* space-evenly; // 两端对齐，等距边距（两端和中间的间隙都一样大）

**align-content 交叉轴对齐方式（规定每一个单元格的对齐方式）**
* start; // 与网格容器前端对齐
* end; // 与网格容器末端对齐
* center; // 整体居中
* stretch; // 充满 默认值
* space-around; // 两端对齐，有边距
* space-between; // 两端对齐，无边距
* space-evenly; // 两端对齐，等距边距（两端和中间的间隙都一样大）

**grid-auto-columns 隐式网格轨道列，即子级多于父级定义的网格时，如何排列**

50px 80px; // 多出的列会交替为一列50px、下一列80px, 再50px...
<br/>默认会跟之前的单元格大小一致

**grid-auto-rows 隐式网格轨道行，即子级多于父级定义的网格时，如何排行**

50px 80px; // 多出的行会交替为一行50px，下一行80px，再50px
<br/>默认会跟之前的单元格大小一致

**grid-auto-flow 定义子元素的排列方式（并不是改变主轴方向）**
* row; // 横向依次排列 默认， 超出的子项会新建行来存放
* column; // 纵向依次排列，超出的子项会新建列来存放
* dense; // 如果超出的元素很小，自动填充空洞而不扩展行或列，我没发现有什么卵用。

**grid 简写以上所有属性，我觉得我不会习惯全部写在一起**

##子级

**grid-column-start 用一根垂直线定义网格区域起始位置**
* <line> 可以是一个数字，代表第几根列网格线，也可使用已命名的列网格线
* auto 自动

**grid-column-end 用一根垂直线定义网格区域结束位置**
* <line> 可以是一个数字，代表第几根列网格线，也可使用已命名的列网格线
* span <number> 直接指定跨越几栏，span+空格+数字
* auto 自动

> grid-column-end 可以比 grid-column-start小，表示从右向左定义。但用span来指定跨越几行最好是从左向右，不然grid会多创建隐式的列，效果很奇怪

**grid-row-start 用一根水平线定义网格开始行的位置**
* <line> 可以是一个数字，代表第几根行网格线，也可使用已命名的行网格线
* auto 自动

**grid-row-end 用一根水平线定义网格结束行的位置**
* <line> 可以是一个数字，代表第几根行网格线，也可使用已命名的行网格线
* auto 自动

**grid-column 简写grid-column-start/grid-column-end**

例： 
\`\`\`
grid-column: 1/3; 或 1/span 2;
\`\`\`

**grid-row 简写grid-row-start/grid-row-end**

例：
\`\`\`
grid-row: 1/3; 或 1/span 2;
\`\`\`

**grid-area 指定所占区域，配合父级的grid-template-areas使用**

可以是父级grid-template-areas定义的区域名<br/>
也可以是grid-row-start/grid-column-start/grid-row-end/grid-column-end 简写

**justify-self 单独设置子级网格中的内容主轴对齐方式**
* start
* end
* center
* stretch 默认

**align-self 单独设置子级网格中的内容交叉轴对齐方式**
* start
* end
* center
* stretch 默认
`;
})();
