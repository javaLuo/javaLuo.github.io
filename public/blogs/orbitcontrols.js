(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.orbitcontrols = `
### 构造函数

\`\`\`
/**
 * \`param camera 相机实例
 * \`param dom 可选 一个DOM元素。
 * 默认控制器各事件都是绑定在#document上的
 * 如果不想在整个文档上触发事件，可以指定一个dom元素把事件绑定到此dom上
 * **/
const dom = document.getElementById('id');
const c = new THREE.OrbitControls(camera, dom);
\`\`\`

### 所有实例属性

| 属性名             | 默认值                                    | 说明                                        |
| ------------------ | ----------------------------------------- | ------------------------------------------- |
| autoRotate         | false                                     | 是否自动围绕目标旋转                        |
| autoRotateSpeed    | 2                                         | 自动旋转的速度                              |
| dampingFactor      | 0.25                                      | 阻尼惯性系数                                |
| domElement         | #document                                 | 只读 构造函数第 2 个参数传递的 dom          |
| enabled            | true                                      | 是否启用控件                                |
| enableDamping      | false                                     | 是否启用阻尼惯性                            |
| enableKeys         | true                                      | 是否允许键盘操作                            |
| enablePan          | true                                      | 是否启用平移（鼠标右键）                    |
| enableRotate       | true                                      | 是否启用镜头沿轨道旋转                      |
| enableZoom         | true                                      | 是否启用缩放（鼠标滚轮）                    |
| keyPanSpeed        | 7                                         | 键盘控制的移动速度                          |
| keys               | {LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40} | 键盘控制的按键                              |
| maxAzimuthAngle    | Infinity                                  | 水平围绕允许的最大弧度值                    |
| minAzimuthAngle    | Infinity                                  | 水平围绕允许的最小弧度值                    |
| maxDistance        | Infinity                                  | 缩放允许的最大值 比如 100（仅用于透视相机） |
| minDistance        | Infinity                                  | 缩放允许的最小值                            |
| maxPolarAngle      | Infinity                                  | 垂直翻转允许的最大弧度                      |
| minPolarAngle      | Infinity                                  | 垂直翻转允许的最小弧度                      |
| maxZoom            | Infinity                                  | 缩放的最大值（仅用于正交相机）              |
| minZoom            | Infinity                                  | 缩放的最小值                                |
| mouseButtons       | {ORBIT: 0, ZOOM: 1, PAN: 2}               | 鼠标的键位设置                              |
| object             | camera                                    | 被绑定的相机实例                            |
| panSpeed           | 1                                         | 鼠标右键平移的速度                          |
| rotateSpeed        | 1                                         | 鼠标左键拖动的速度                          |
| screenSpacePanning | false                                     | 右键平移的方向，true 垂直，false 水平       |
| target             | {x:0, y:0, z:0}                           | 围绕的基准点 可手动设置                     |
| zoomSpeed          | 1                                         | 缩放的速度                                  |

### 内部私有属性

| 属性名    | 默认值 | 说明               |
| --------- | ------ | ------------------ |
| position0 |        | 记录了控制器的位置 |
| target0   |        | 记录了环绕的基准点 |
| zoom0     | 1      | 当前缩放值         |

### 所有方法

| 方法名              | 说明                                                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dispose()           | 删除所有绑定的事件监听，不是销毁，控制器实例还在，但就是不能控制了                                                                                                   |
| getAzimuthalAngle() | 获取当前水平旋转的弧度值                                                                                                                                             |
| getPolarAngle()     | 获取当前垂直旋转的弧度值                                                                                                                                             |
| saveState()         | 保存当前的旋转状态                                                                                                                                                   |
| reset()             | 重置到上一次保存的旋转状态                                                                                                                                           |
| update()            | 更新控制器，在手动更改了 camera 的位置等信息后需要调用一次。或者如果开启了 autoRotate 或 enableDamping,那么在 requestAnimationFrame 中每次 render 时，都需要调用一次 |

### 参考：

<a href="https://threejs.org/docs/index.html#examples/controls/OrbitControls.dampingFactor" target="_blank" rel=”noopener”>官方文档 - OrbitControls.js 说明</a>

 `;
})();
