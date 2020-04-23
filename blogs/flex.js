(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.flex = `
原文教程：[Flex布局教程 - 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

以下只是简要总结笔记

### 1.容器属性

\`\`\`
display: flex;	// 设置为flex弹性盒子

flex-direction	   /* 改变主轴的方向 */
    row            // 横向 起点在左，子元素表现为从左到右排列（默认）
    row-reverse    // 横向 起点在右，子元素表现为从右到左排列
    column         // 纵向 起点在上，子元素表现为从上到下排列
    column-reverse // 纵向 起点在下，子元素表现为从下到上排列
    
flex-wrap		   /* 子元素放不下时，是否换行 */
    nowrap         // 不换行，子元素缩小（默认）
    wrap           // 根据交叉轴的方向 换行排列
    wrap-reverse   // 根据交叉轴的反方向 换行排列
    
flex-flow			/* flex-direction 和 flex-wrap 的合体简写 */

justify-content		/* 子元素在容器中的主轴上对齐方式 */
    flex-start      // 与主轴的起点对齐（默认）
    flex-end        // 与主轴的末尾对齐
    center          // 居中
    space-between   // 两端对齐，两边不留缝隙，各元素等距
    space-around    // 两端对齐，两边留缝隙，各元素等距
    
align-items         /* 子元素在容器中的交叉轴上对齐方式 */
    如果子元素有多行，且设置了align-content属性，align-content将覆盖align-items
    flex-start      // 与交叉轴的起点对齐
    flex-end        // 与交叉轴的末尾对齐
    center          // 在交叉轴方向居中
    baseline        // 与文字基线对齐
    stretch         // 如果子元素在交叉轴方向上未设置高度或宽度，则撑满交叉轴（默认）
    
align-content       /* 如果容器中有多行时，子元素的对齐方式 */
    如果子元素只有一行，该属性不起作用
    flex-start      // 与交叉轴的起点对齐
    flex-end        // 与交叉轴的末尾对齐
    center          // 在交叉轴方向上居中
    space-between   // 在交叉轴方向上两端对齐，两端不留空隙
    space-around    // 在交叉轴方向上两端对齐，两端留空隙
    stretch         // 在交叉轴方向上均分每一行，总体撑满交叉轴
\`\`\`

### 2. 子元素属性

\`\`\`
order			/* 子元素的排列顺序，数值越小，排列越靠前 */
flex-grow		/* 子元素分配多大的占比 */
flex-shrink     /* 空间不足时，是否自动缩小，0不，其他值要 */
flex-basis		/* 子元素以此值为基准，来计算最终所占空间，一般就设为auto */
flex            /* flex-grow、flex-shrink、flex-basis 的缩写 */
    auto: 1 1 auto; // 项目占1等分，自动缩小
    none: 0 0 auto; // 项目不占空间，不缩小，以width或其他值固定大小显示
    
align-self      /* 允许各别子元素在交叉轴上拥有单独的对齐方式 */
    auto        // 继承父级（默认）
    flex-start  // 与交叉轴的起点对齐
    flex-end    // 与交叉轴的末尾对齐
    center      // 在交叉轴方向上居中
    baseline    // 以文字基准线对齐
    stretch     // 撑满交叉轴
    
\`\`\`
  `;
})();
