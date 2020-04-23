(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.three_fire = `
<iframe 
height=400 
width=500 
src="https://htmlpreview.github.io/?https://github.com/javaLuo/three_road/blob/master/src/webgl_fire.html" 
frameborder=0 
allowfullscreen>
</iframe>

## 火焰效果

官方提供了 Fire.js

\`\`\`
// 创建一个平面
var plane = new THREE.PlaneBufferGeometry( 20, 20 );

// 火焰对象
fire = new THREE.Fire( plane, {
    textureWidth: 512,
    textureHeight: 512,
    debug: false
});
\`\`\`

## 参数

| 属性             | 参考值      | 描述                                    |
| ---------------- | ----------- | --------------------------------------- |
| color1           | 0x00bdf7    | 内焰颜色，例：fire.color1.set(0x00bdf7) |
| color2           | 0x1b3fb6    | 外焰颜色                                |
| color3           | 0x001869    | 烟雾颜色                                |
| colorBias        | 0.0 ～ 1.0  | 数值越大内焰范围越小                    |
| burnRate         | 0.0 ~ 10.0  | 燃烧率，火焰烟雾比例，数值越大烟越少    |
| diffuse          | 0.0 ~ 5.0   | 火焰弥散程度，越大越模糊                |
| viscosity        | 0.0 ~ 5.0   | 黏稠度，越大火焰的视觉暂留越完整        |
| expansion        | -1.0 ~ 1.0  | 火焰的强弱程度，小火 ～ 大火            |
| swirl            | 0.0 ~ 50.0  | 烟雾的扩散程度                          |
| drag             | 0.0 ~ 1.0   | 火焰的抖动频率，越大越稳定              |
| airSpeed         | 0.0 ~ 50.0  | 空气流动速度，越大火焰运动越快          |
| windVector.x     | 0.0         | 横向风的强度                            |
| windVector.y     | 0.15        | 纵向风的强度                            |
| speed            | 0.0 ~ 500.0 | 风的速度，越大被吹得越长越快            |
| massConservation | true/false  | 是否开启块状物，即内部有固体的感觉      |

## 方法

| 方法名       | 参数                                     | 描述                           |
| ------------ | ---------------------------------------- | ------------------------------ |
| clearSources | 无                                       | 清空当前纹理                   |
| addSource    | （U,V,半径,火焰密度,横向风强，纵向风强） | 设置一个火源（圆形的）         |
| setSourceMap | (texture纹理对象)                        | 设置自定义纹理而不是默认的圆形 |

## 说明

* 火焰只是一个动态纹理，本身不是3D的
* 不过可以组合多个平面不同的旋转角度来简单做成立体的效果

## 源码地址：

<a href="https://github.com/javaLuo/three_road/blob/master/src/webgl_fire.html" target="_blank">https://github.com/javaLuo/three_road/blob/master/src/webgl_fire.html</a>
`;
})();
