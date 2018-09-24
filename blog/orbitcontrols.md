### 构造函数
```
/**
 * @param camera 相机实例
 * @param dom 可选 一个DOM元素。
 * 默认控制器各事件都是绑定在#document上的
 * 如果不想在整个文档上触发事件，可以指定一个dom元素把事件绑定到此dom上
 * **/
const dom = document.getElementById('id');
const c = new THREE.OrbitControls(camera, dom);

```

### 所有参数

```
c.autoRotate = false;           // 是否自动围绕目标旋转
c.autoRotateSpeed = 2;          // 自动旋转的速度
c.dampingFactor = 0.25;         // 阻尼惯性系数
c.domElement = #document;       // 只读 构造函数第2个参数传递的dom
c.enabled = true;               // 是否启用控件
c.enableDamping = false;        // 是否启用阻尼惯性
c.enableKeys = true;            // 是否启用键盘控制
c.enablePan = true;             // 是否启用平移（鼠标右键）
c.enableRotate = true;          // 是否启用镜头沿轨道旋转
c.enableZoom = true;            // 是否启用缩放（鼠标滚轮）
c.keyPanSpeed = 7;              // 键盘控制的移动速度
c.keys= {LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40}; // 键盘控制的按键
c.maxAzimuthAngle = Infinity;   // 水平旋转允许的最大弧度值
c.minAzimuthAngle = Infinity;   // 水平旋转允许的最小弧度值
c.maxDistance = Infinity;       // 缩放允许的最大值 比如100（仅用于透视相机）
c.minDistance = Infinity;       // 缩放允许的最小值
c.maxPolarAngle = Infinity;     // 垂直翻转允许的最大弧度
c.minPolarAngle = Infinity;     // 垂直翻转允许的最小弧度
c.maxZoom = Infinity;           // 缩放的最大值（仅用于正交相机）
c.minZoom = Infinity;           // 缩放的最小值
c.mouseButtons = {ORBIT: 0, ZOOM: 1, PAN: 2}; // 鼠标的键位设置
c.object = camera;              // 被绑定的相机实例
c.panSpeed = 1;                 // 鼠标右键平移的速度
c.rotateSpeed = 1;              // 鼠标左键旋转的速度
c.screenSpacePanning = false;   // 右键平移的方向，true垂直，false水平
c.target = {x:0, y:0, z:0};     // 环绕的基准点 可手动设置
c.zoomSpeed = 1;                // 缩放速度(正交相机)
```

### 内部私有属性

```
c.position0;                    // 内部使用 记录了控制器的位置
c.target0;                      // 内部使用 记录了环绕的基准点
c.zoom0 = 1;                    // 内部使用 当前缩放值（正交相机）
```

### 所有方法

```
c.dispose(); // 删除所有绑定的事件监听，不是销毁，控制器实例还在，但就是不能控制了
c.getAzimuthalAngle(); // 获取当前水平旋转的弧度值
c.getPolarAngle(); // 获取当前垂直旋转的弧度值
c.saveState(); // 保存当前的旋转状态
c.reset(); // 重置到上一次保存的旋转状态
c.update(); // 更新控制器，在手动更改了camera的位置等信息后需要调用一次。或者如果开启了autoRotate或enableDamping,那么在requestAnimationFrame中每次render时，都需要调用一次
```

### 参考：

<a href="https://threejs.org/docs/index.html#examples/controls/OrbitControls.dampingFactor" target="_blank" rel=”noopener”>官方文档 - OrbitControls.js说明</a>
