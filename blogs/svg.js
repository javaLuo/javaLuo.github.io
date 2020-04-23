(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.svg = `
#1.基本

* 一个最简单例子 test.svg文件
\`\`\`
<?xml version="1.0" standalone="no"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="50" r="40" stroke="black"
stroke-width="2" fill="red"/>

</svg>
\`\`\`

> 第1行是xml声明，以下是xml格式的代码
version - 版本
standalong - 是否是独立的，即下面的代码中是否没有引用外部文件 no/yes

> 第2行包含了外部SVG DTD文件。是W3C标准，定义了所有合法的SVG元素

> 第3行是正式的svg代码，svg代码由\`\`\`<svg>\`\`\`标签包裹
width/height设置宽高、version设置使用的svg版本、xmlns设置可定义svg的命名空间

#页面中如何引用.svg文件

* \`\`\`<embed>\`\`\`
\`\`\`
<embed
    src="./test.svg"
    width="100"
    height="100"
    type="image/svg+xml"
    pluginspage="http://www.adobe.com/svg/viewer/install/"
/>
// pluginspage是下载svg插件的地址，因为IE不支持svg,需要插件
\`\`\`
但embed不是W3C规范的标签，虽然所有浏览器都支持

* \`\`\`<object>\`\`\`
\`\`\`
<object
    data="./test.svg"
    width="100"
    height="100"
    type="image/svg+xml"
    codebase="http://www.adobe.com/svg/viewer/install/"
/>
// codebase指向svg插件下载地址
\`\`\`
object是w3c标准，所有浏览器都支持，但无法使用脚本
如果安装了Adobe SVG Viewer插件，则object无法在IE下工作

* \`\`\`<iframe>\`\`\`
\`\`\`
<iframe
    src="./test.svg"
    width="100"
    height="100"
></iframe>
\`\`\`

* \`\`\`<img>\`\`\`
\`\`\`
<img src="./test.svg" />
\`\`\`

#SVG内置基本形状
注：所有的属性都可以写在style里，所有的style也可以直接写成属性
（不需要驼峰转换）
但有些属性写到style中后无法使用百分比定位，比如x/y
* \`\`\`<rect>\`\`\` 矩形
\`\`\`
<rect
    x="20%" // 左上角x位置
    y="50"  // 左上角y位置
    rx="10" // x方向的圆角
    ry="20" // y方向的圆角
    width="50"  // 宽
    height="50" // 高
    style=" fill:#0000ff;   // 也可以在style里定义填充色
            stroke-width:1; // 边框宽度
            stroke:#000"    // 边框颜色
            fill-opacity: 0.1;  // 填充色透明度，也可以直接fill:rgba()
            stroke-opacity: 0.9; // 边框透明度
            opacity: 0.8;   // 整个元素的透明度
/>
\`\`\`
* \`\`\`<circle>\`\`\` 圆
\`\`\`
<circle
    cx="100"    // 圆心x 默认0
    cy="50"     // 圆心y 默认0
    r="40"      // 半径
    style="..."
/>
\`\`\`

* \`\`\`<ellipse>\`\`\` 椭圆
\`\`\`
<ellipse
    cx="100"    // 圆心x 默认0
    cy="50"     // 圆心y 默认0
    rx="100"    // x方向半径
    ry="50"     // y方向半径
    style="..."
>
\`\`\`
* \`\`\`<line>\`\`\` 线段
\`\`\`
<line
    x1="0"  // 起点x
    y1="0"  // 起点y
    x2="300"    // 终点x
    y2="300"    // 终点y
    stroke="red"
    stroke-width="2"
    style="..."
/>
\`\`\`
线条需要stroke才能显示，fill无效

* \`\`\`<polygon>\`\`\` 多边形
\`\`\`
<polygon
    points="0,0 50,50 120,200"  // 至少3个点
    fill="#f00"
/>
\`\`\`

* \`\`\`<polyline>\`\`\` 折线
\`\`\`
<polyline
    points="0,0 0,20 20,20 40,40" // 至少两个点
/>
\`\`\`
所有的点从头连到尾，不闭合 fill无效

* \`\`\`<path>\`\`\` 路径
\`\`\`
<path d="M250 150 L150 350 L350 350 Z" />
\`\`\`
定义路径，最后会闭合为一个图形
所有可用的指令：
1. M 移动到某点
2. L lineTo 画线到某点
3. H 画水平的线到某点 只接受一个参数x
4. V 画垂直的线到某点 只接受一个参数y
5. C 画曲线到某点
6. S 平滑曲线
7. Q 二次贝塞尔曲线
8. T 平滑二次贝塞尔曲线
9. A 圆弧
10. Z 封闭

注：大写字母表示绝对定位，小写字母表示相对定位
（大写总是以画布左上角为原点，小写就是以当前画笔所在坐标为原点）

创建复杂图形会比较困难，建议使用svg编辑器

#SVG滤镜
1. feBlend 混合 跟PS中的一样
    * mode:<br/>
        normal 正常<br/>
        multiply<br/>
        screen<br/>
        darken<br/>
        lighten<br/>
    * in2: BackgroundImage
2. feColorMatrix 颜色矩阵
    * type:<br/>
        matrix<br/>
        saturate<br/>
        hueRotate<br/>
        luminanceToAlpha<br/>
    * values
        
3. feComponentTransfer
4. feComposite
5. feConvolveMatrix
6. feDiffuseLighting
7. feDisplacementMap
8. feFlood
9. feGaussianBlur 高斯模糊 in:SourceGraphic全局应用, stdDeviation:3模糊层度
10. feImage
11. feMerge
12. feMorphology
13. feOffset
14. feSpecularLighting
15. feTile
16. feTurbulence
17. feDistantLight
18. fePointLight
19. feSpotLight
每个svg元素上都可以同时运用多个滤镜

\`\`\`
<svg>
    <defs>  // 所有的filter都定义在defs中
        <filter id="f1">    // 用filter标签，给它个ID
            <feGaussianBlur // 所使用的滤镜
                in="SourceGraphic" // 对被滤的对象整体应用效果
                stdDeviation="3"    // 模糊层度
                /> 
        </filter>
    </defs>
    
    <rect
        width="100"
        height="50"
        fill="#cc3333"
        filter="url(#f1)"   // 引用
        style="filter:url(#f1)"  // 也可以在style中引用
/> 
</svg>
\`\`\`
#SVG线性渐变
渐变也必须在\`\`\`<defs>\`\`\`中定义
\`\`\`
<defs>
    <linearGradient id="id", x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#000;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#fff;stop-opacity:1" />
    </linearGradient>
</defs>

<rect fill="url(#id)" width="100" height="100"/>
\`\`\`
\`\`\`<linearGradient>\`\`\`定义线性渐变。x1/y1渐变开始的位置，x2/y2渐变结束的位置<br/>
\`\`\`<stop>\`\`\`定义渐变的关键帧，offset位置<br/>
定义好了后就可以通过id引用

#SVG放射性渐变
\`\`\`
<defs>
    <radialGradient id="id" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style="stop-color:#000" />
        <stop offset="100%" style="stop-color:#fff" />
    </radialGradient>
    <rect fill="url(#id)" width="100" height="100"/>
</defs>
\`\`\`
\`\`\`<radialGradient>\`\`\`定义放射性渐变
cx/cy/r定义渐变的外圈（圆心及半径），渐变只会在这个圆内部发生，超出范围的被裁剪
fx/fy定义内圆心，及渐变开始的点，渐变将以这个点为起始点像四周扩散

`;
})();
