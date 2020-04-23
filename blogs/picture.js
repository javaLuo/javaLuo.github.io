(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.picture = `
## 1.基本语法
\`\`\`html
<picture>
    <source media="(max-width: 800px)" srcset="small.jpg" />
    <img src="default.jpg" />
</picture>
\`\`\`
> 视口宽度小于等于800px时，加载small.jpg<br/>其他情况加载default.jpg

## 2.可以写多个source源和media
\`\`\`html
<picture>
    <source media="(max-width: 800px) and (orientation: portrait)" srcset="small.jpg" />
    <source media="(max-width: 800px) and (orientation: landscape)" srcset="big.jpg" />
    <img src="default.jpg" />
</picture>
\`\`\`
> 视口宽度小于等于800px 且 竖屏时，加载small.jpg<br/>视口宽度小于等于800px 且 横屏时，加载big.jpg<br/>其他情况加载default.jpg

## 3.type属性
\`\`\`html
<picture>
    <source type="image/webp" srcset="default.webp" />
    <img src="default.jpg" />
</picture>
\`\`\`
> 如果浏览器支持webp格式则加载default.webp<br/>其他情况加载default.jpg

## 4.x单位 像素密度dpi
\`\`\`html
<picture>
    <source media="(max-width:800px)" srcset="small.jpg, small\`2x.jpg 2x" />
    <img src="default.jpg" />
</picture>
\`\`\`
> 当视口宽度小于等于800px时，加载小图<br/>但现在有多张小图，所以判断屏幕dpi值window.devicePixelRatio<br/>如果dpi === 1, 则加载small.jpg, 如果dpi === 2,则加载small\`2x.jpg<br/>其他情况加载default.jpg

## 5.sizes属性 和 w单位
\`\`\`html
<picture>
    <source sizes="(max-width: 600px) 250px,
                    (max-width: 800px) 500px,
                    750px"
            srcset="250px.jpg 250w,
                    500px.jpg 500w,
                    1000px.jpg 1000w"
    >
    <img src="default.jpg" />
</picture>
\`\`\`
> 当srcset中使用了w单位时，sizes属性才会生效<br/>
> w是图像资源的规格，一般认为是图像资源的宽度<br/>
> 即现在有3张图片，250px.jpg，500px.jpg，1000px.jpg，希望浏览器根据当前视口宽度自动选择加载最合适的图像资源。


> 浏览器会根据当前屏幕的*dpi值*和*sizes属性的设置*，计算得到一个最终*规格值*，<br/>
> 用这个规格值去srcset中找最符合的规格（即设置的w单位），然后加载规格值对应的图像资源


> 比如手机屏幕宽度为750px, 则符合sizes中的第2条\`(max-width: 800px) 500px\`, 基础规格为500px<br/>
> 但由于手机屏幕的dpi为2，则最终规格值为 \`500px * 2 = 1000w\`<br/>
> 所以对应srcset中的\`1000px.jpg 1000w\`,浏览器会加载\`1000px.jpg\`<br/>


> 同理，若手机宽度为320px,dpi为2，则最终规格值为：\`250px * 2 = 500w\`, <br/>
> 所以对应srcset中的\`500px.jpg 500w\`,浏览器会加载\`500px.jpg\`

> 如果srcset中没有对应的规格，比如视口宽度320px,dpi为1，则计算出最终规格就是320w;<br/>
> 但srcset里没有320w的选项，则一般浏览器会取500w,即比最终规格值大的最接近的值。

> 如果最终计算的规格值比srcset中最大的选项还要大，则就取最大的选项。所以上面的例子中，img的default.jpg只有一种情况会被加载，就是浏览器不支持\`<picture>\`的时候（IE：你们都看我做什么？）

## 注意事项
1. \`<picture>\`是从上到下解析的，遇到第1个符合条件的\`<source>\`时，就加载了，不会再去管下面的\`<source>\`
2. Chrome浏览器的隐藏机制是，如果之前加载过更高清的图片（规格值更大），下次需要加载小图时，谷歌不会加载小图，直接使用已缓存的高清图，所以测试的时候最好用Firefox，不然看不出效果
`;
})();
