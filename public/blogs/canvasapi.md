### window.HTMLCanvasElement

canvas DOM 对象本身，浏览器内置构造函数<br/>
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement

- 属性

  | 属性   | 说明                      |
  | ------ | ------------------------- |
  | height | 高度，canvas 本身的分辨率 |
  | width  | 宽度，canvas 本身的分辨率 |

- 方法

```js
/**
 * 获取canvas上下文，链接到当前canvas对象，获得使用其API的权限，想象为得到一只画笔
 * @param contextType 必须 '2d' 2DAPI， 'webgl' 3DAPI， 'webgl2' webGL2.0
 * @param contextAttributes 可选 额外设置
 * @return CanvasRenderingContext2D
 */
HTMLCanvasElement.getContext("2d");

/**
 * 将当前canvas内容转为一个data:URL形式的图片
 * @param type 可选 转换的图片格式，默认 'image/png'
 * @param options 可选 图片质量0~1, 默认 0.92,(只有image/jpeg, image/webp 有效)
 * @return dataURL
 */
HTMLCanvasElement.toDataURL(type, options);

/**
 * 将当前canvas内容转为一个blob形式的图片
 * @param callback 需要一个回调函数来得到blob,因为是异步的
 * @param type 可选 转换的图片格式，默认 'image/png'
 * @param options 可选 图片质量0~1, 默认 0.92,(只有image/jpeg, image/webp 有效)
 * @return null
 */
HTMLCanvasElement.toBlob(callback, type, options);
```

### CanvasRenderingContext2D

通过`HTMLCanvasElement.getContext('2d')`得到的对象<br/>
https://www.canvasapi.cn/CanvasRenderingContext2D/fillStyle

- 属性

  | 属性                     | 说明                                                                                |
  | ------------------------ | ----------------------------------------------------------------------------------- |
  | canvas                   | 获得此 ctx 的 canvas DOM 对象本身                                                   |
  | fillStyle                | 填充绘制模式，默认'#000', 纯色/渐变对象/纹理位图，想象为给画笔染上不同的墨水        |
  | strokeStyle              | 边框绘制模式，设置边框的样式，纯色/渐变对象/纹理位图                                |
  | globalAlpha              | 调节画笔的透明度透明度,0~1                                                          |
  | globalCompositeOperation | 图形与图形的混合模式，层叠关系                                                      |
  | lineCap                  | 画线段时设置线段两端的样式，butt/round/square                                       |
  | lineDashOffset           | 绘制虚线时，虚线起始的偏移距离                                                      |
  | lineJoin                 | 线条转折处的样式，miter/round/bevel                                                 |
  | lineWidth                | 线条的粗细                                                                          |
  | miterLimit               | 当 lineJoin 为 miter 时，如果折线拐角太锐利，尖角会很长，此属性控制尖角太长自动截断 |
  | shadowBlur               | 绘制阴影时，阴影的模糊程度                                                          |
  | shadowColor              | 阴影的颜色                                                                          |
  | shadowOffsetX            | 阴影的横向偏移距离                                                                  |
  | shadowOffsetY            | 阴影的纵向偏移距离                                                                  |
  | font                     | canvas 绘制文字时，指定字的大小和字体，例：'12px sans-serif'                        |
  | textAlign                | 绘制文字时，文字相对于绘制起点的对其方式,left/right/center/start/end                |
  | textBaseline             | 绘制文字时，文字的基线对齐方式，top/hanging/middle/alphabetic/ideographic/bottom    |
  | direction                | 文字的排列方向，'ltr','rtl',但是好像没什么用，表现很奇怪                            |

- 方法

```js
/**
 * 清空矩形区域,清空为透明的
 * @param x 起始横坐标
 * @param y 起始纵坐标
 * @param width 宽度
 * @param height 高度
 */
ctx.clearRect(x, y, width, height);

/**
 * 开始绘制新的路径,与之前的路径区分开
 */
ctx.beginPath();

/**
 * 移动落笔点到指定位置
 * @param x
 * @param y
 */
ctx.moveTo(x, y);

/**
 * 画直线,从当前点到目标点
 * @param x 目标点x
 * @param y 目标点y
 */
ctx.lineTo(x, y);

/**
 * 绘制路径：圆弧
 * @param x 圆心横坐标
 * @param y 圆心纵坐标
 * @param r 半径
 * @param startAngle 圆弧起始的弧度值
 * @param endAngle 圆弧结束的弧度值
 * @param anticlockwise 是顺时针画还是逆时针， true逆时针， false顺时针
 */
ctx.arc(x, y, r, startAngle, endAngle, anticlockwise);

/**
 * 绘制路径：矩形
 * @param x 起始点X
 * @param y 起始点Y
 * @param width 宽度
 * @param height 高度
 */
ctx.rect(x, y, width, height);

/**
 * 绘制椭圆圆弧，IE不支持
 * @param x 椭圆弧对应的圆心横坐标
 * @param y 椭圆弧对应的圆心纵坐标
 * @param radiusX 椭圆弧的长轴半径大小
 * @param radiusY 椭圆弧的短轴半径大小
 * @param rotation 椭圆弧的旋转角色，单位的弧度
 * @param startAngle 圆弧开始的角度，角度从横轴开始算，单位是弧度
 * @param endAngle 圆弧结束的角度，单位是弧度
 * @param anticlockwise 可选 true逆时针画，false顺时针画
 */
ctx.ellipse(
  x,
  y,
  radiusX,
  radiusY,
  rotation,
  startAngle,
  endAngle,
  anticlockwise
);

/**
 * 绘制路径：圆弧，用于从一条线段圆角链接到另一条线段
 * @param x1 控制点1 横坐标
 * @param y1 控制点1 纵坐标
 * @param x2 控制点2 横坐标
 * @param y2 控制点2 纵坐标
 * @param radius 圆弧半径
 */
ctx.arcTo(x1, y1, x2, y2, radius);

/**
 * 绘制路径：3次贝塞尔曲线
 * @param cp1x 控制点1 横坐标
 * @param cp1y 控制点1 纵坐标
 * @param cp2x 控制点2 横坐标
 * @param cp2y 控制点2 纵坐标
 * @param x 结束点 横坐标
 * @param y 结束点 纵坐标
 */
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

/**
 * 绘制路径：2次贝塞尔曲线
 * @param cpx 控制点的横坐标
 * @param cpy 控制点的纵坐标
 * @param x 结束点横坐标
 * @param y 结束点纵坐标
 */
ctx.quadraticCurveTo(cpx, cpy, x, y);

/**
 * 路径裁剪
 * @param fillRule 可选，填充方式 nonzero非零规则，evenodd奇偶规则
 * @param path 可选 Path2D对象
 * 一般不填参数，需要事先画好路径，然后执行此方法，再之后绘制的内容就 只会限定于此区域
 */
ctx.clip();
ctx.clip(fillRule, path);

/**
 * 闭合路径
 * 将路径的首位相连，但并不表示路径结束，要开始新路径只能使用beginPath
 */
ctx.closePath();

/**
 * 创建一个新的空的ImageData对象，该对象所有像素都是rgba(0,0,0,0);
 * @param width 宽度
 * @param height 高度
 */
ctx.createImageData(width, height);
ctx.createImageData(imagedata); // 根据另外一个ImageData对象的with和height来创建

/**
 * 创建线性渐变对象
 * @param x0 渐变起始点横坐标
 * @param y0 渐变起始点纵坐标
 * @param x1 渐变结束点横坐标
 * @param y1 渐变结束点纵坐标
 * @return gradient渐变对象
 */
ctx.createLinearGradient(x0, y0, x1, y1);

/**
 * 创建贴图纹理对象
 * @param image 图像，可以是<img>对象，<video>象，<canvas>对象，ctx2d上下文,位图ImageBitmap,ImageData,Blob
 * @param repetition 平铺方式
 */
ctx.createPattern(image, repetition);

/**
 * 创建径向渐变
 * @param x0 起始圆横坐标
 * @param y0 起始圆纵坐标
 * @param r0 起始圆半径
 * @param x1 结束圆横坐标
 * @param y1 结束圆纵坐标
 * @param r1 结束圆半径
 */
ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);

/**
 * 让指定路径轮廓高亮显示
 * @param element 与特定DOM对象绑定,比如一个<button>， 这个<button>还得放在<canvas>内部
 * @param path path2D路径对象
 * 即ctx.beginPath()后，画完路径，最后调用此方法，将这个路径与某个可focus的DOM绑定
 * 当此DOM为focus状态时，canvas中的此路径轮廓会自动高亮
 * 没太大卵用
 */
ctx.drawFocusIfNeeded(element);
ctx.drawFocusIfNeeded(path, element);

/**
 * 绘制图片
 * @param image 图片
 * @param dx 开始绘制的横坐标
 * @param dy 开始绘制的纵坐标
 * @param dWidth 绘制的宽度
 * @param dHeight 绘制的高度
 * @param sx 取图片的内容从这个横坐标开始取
 * @param sy 取图片的内容从这个纵坐标开始取
 * @param sWidth 取图片内容的宽度
 * @param sHeight 取图片内容的高度
 */
ctx.drawImage(image, dx, dy);
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

/**
 * 执行填充，使用fillStyle的设置填充路径
 * @param fillRule 填充方式, nonzero
 * @param path Path2D路径对象
 */
ctx.fill();
ctx.fill(fillRule);
ctx.fill(path, fillRule);

/**
 * 执行填充，自带矩形路径
 * @param x
 * @param y
 * @param width
 * @param height
 */
ctx.fillRect(x, y, width, height);

/**
 * 执行填充，绘制文字
 * @param text 文本内容
 * @param x 起始X
 * @param y 起始Y
 * @param maxWidth 可选 最大绘制宽度，当文字内容宽度超过次值时，自动压缩，会被压扁
 */
ctx.fillText(text, x, y, maxWidth);

/**
 * 描边
 * 对当前路径进行描边
 */
ctx.stroke();

/**
 * 描边，自带矩形路径
 * @param x
 * @param y
 * @param width
 * @param height
 */
ctx.strokeRect(x, y, width, height);

/**
 * 描边，对文字进行描边，空心文字
 * @param text
 * @param x
 * @param y
 * @param maxWidth
 */
ctx.strokeText(text, x, y, maxWidth);

/**
 * 获取虚线的配置信息
 * @return [实线长度，空隙长度]
 */
ctx.getLineDash();

/**
 * 设置虚线的间隙
 * @param segment[] 数组，可以有任意多个值：[实线长度，空隙长度，...]
 */
ctx.setLineDash(segment);

/**
 * 检测某个点是否在当前绘制点路径之内，只要在内部就true，根据非0原则或奇偶原则来判断的
 * @param x
 * @param y
 * @param fillRule 可选
 * @param path
 */
ctx.isPointInPath(x, y, fillRule);
ctx.isPointInPath(path, x, y, fillRule);

/**
 * 检测某个点是否在当前绘制点路径之上，只能在路径的线上才true
 * @param x
 * @param y
 * @param path
 */
ctx.isPointInStroke(x, y);
ctx.isPointInStroke(path, x, y);

/**
 * 预测文本的一些信息，比如如果绘制出来，会占用多宽
 * @param text 文本内容
 * @return 宽度，距离4周边界的距离
 */
ctx.measureText(text);

/**
 * 获取canvas的像素数据，返回ImageData对象
 * @param x 起始X
 * @param y 起始Y
 * @param width 宽度
 * @param height 高度
 * @return ImageData
 */
ctx.getImageData(x, y, width, height);

/**
 * 将ImageData数据绘制到canvas上
 * @param imagedata ImageData数据对象
 * @param dx 绘制的起始X
 * @param dy 绘制的起始Y
 * @param dirtyX 截取图像开始渲染的X 默认0
 * @param dirtyY 截取图像开始渲染的Y 默认0
 * @param dirtyWidth 截取图像的宽度
 * @param dirtyHeight 截取图像的高度
 */
ctx.putImageData(imagedata, dx, dy);
ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);

/**
 * 旋转矩阵,相当于旋转整个画布，顺时针，单位弧度
 * @param angle 旋转的弧度
 */
ctx.rotate(angle);

/**
 * 保存当前ctx各参数状态
 * 当前的矩阵变换 transform()
 * 当前的裁剪区域 clip()
 * 当前的虚线设置 setLineDash()
 * 以及这些属性：
 * strokeStyle，fillStyle，globalAlpha，lineWidth，lineCap，lineJoin，miterLimit，lineDashOffset，shadowOffsetX，shadowOffsetY，shadowBlur，shadowColor，globalCompositeOperation，font，textAlign，textBaseline
 */
ctx.save();

/**
 * 恢复到上一次通过ctx.save()时，ctx各参数设置的状态
 * 比如canvas中的旋转只能整张图旋转，完了之后需要再转回来
 * 想象在纸上画画，旋转纸张画一个图形后，又把纸转回来摆正，这样就能画出一个有旋转角度的图案，
 * 尤其是配合drawImage使用，因为drawImage本身没有旋转功能
 */
ctx.restore();

/**
 * 缩放坐标系
 * 缩放之前的内容不会有影响，缩放后再画的内容才会被随访
 * 默认缩放中心为(0,0), 想中心旋转需要配合ctx.transform translate
 */
ctx.scale(x, y);

/**
 * 重置变换矩阵
 * 与ctx.transform()的区别在于，这个是完全重置，而ctx.transform是累加
 * @param a 水平缩放
 * @param b 水平斜切
 * @param c 垂直斜切
 * @param d 垂直缩放
 * @param e 水平位移
 * @param f 垂直位移
 */
ctx.setTransform(a, b, c, d, e, f);

/**
 * 矩阵变换，累加
 * [ a c e
 *   b d f
 *   0 0 1 ]
 * @param a 水平缩放 默认1
 * @param b 水平斜切 默认0
 * @param c 垂直斜切 默认0
 * @param d 垂直缩放 默认1
 * @param e 水平位移 默认0
 * @param f 垂直位移 默认0
 */
ctx.transform(a, b, c, d, e, f);

/**
 * 整体位移
 * 位移之前的不受影响
 */
ctx.translate(x, y);
```
