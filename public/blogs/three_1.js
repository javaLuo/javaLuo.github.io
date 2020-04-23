(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.three_1 = `
<iframe 
height=300 
width=500 
src="https://htmlpreview.github.io/?https://github.com/javaLuo/three_road/blob/master/src/webgl_postprocessing_unreal_bloom.html" 
frameborder=0 
allowfullscreen>
</iframe>

### 泛光效果


| 文件                        | 用途           | 说明                       |
| --------------------------- | -------------- | -------------------------- |
| three.min.js                | THREE核心      | 基础                       |
| EffectComposer.js           | 后期效果构造器 | 创建后期效果所需          |
| RenderPass.js               | 后期渲染器     | 渲染后期效果所需           |
| ShaderPass.js               | 着色器构造器   | 处理各种着色器             |
| CopyShader.js               | 全屏4色着色器  | 基本着色器，很多效果都需要 |
| LuminosityHighPassShader.js | 高光着色器     | 泛光的着色器               |
| UnrealBloomPass.js          | 辉光后期效果   | 泛光后期效果处理           |

> 以上文件均来自THREE.js官方下载的包里

### 完整代码例子
\`\`\`
<!-- 辉光例子 -->
<!DOCTYPE html>
<html lang="zh-cn">
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    </head>
    <body>
    <div id="container"></div>

    <script src="lib/three.min.js"></script>

    <!-- 后期基础 | 后期效果构建者 -->
    <script src="lib/EffectComposer.js"></script>
    <!-- 后期基础 | 后期渲染器 -->
    <script src="lib/RenderPass.js"></script>
    <!-- 后期基础 | 着色器构造器 -->
    <script src="lib/ShaderPass.js"></script>
    <!-- 着色器 | 全屏4色着色器 | UnrealBloomPass.js依赖 -->
    <script src="lib/CopyShader.js"></script>
    <!-- 着色器 | 高光着色器 | UnrealBloomPass.js依赖 -->
    <script src="lib/LuminosityHighPassShader.js"></script>
    <!-- 后期效果 | 泛光，光芒溢出 -->
    <script src="lib/UnrealBloomPass.js"></script>

    <script>
        let scene, camera, pointLight;
        let composer, renderer;

        const container = document.getElementById('container');

        renderer = new THREE.WebGLRenderer({ antialias: true }); // 抗锯齿：true
        renderer.setPixelRatio(window.devicePixelRatio); // 设置dpi
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ReinhardToneMapping; // 设置HDR光线映射模式
        renderer.toneMappingExposure = 2; // 曝光度（0～4）

        container.appendChild(renderer.domElement);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
        camera.position.set(-5, -5, -5);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        scene.add(new THREE.AmbientLight(0x101010)); // 环境光

        // 添加一个点光源，效果更明显
        pointLight = new THREE.PointLight(0x22ffff, 1);
        pointLight.position.set(0, 10, 0);
        scene.add(pointLight);

        const renderScene = new THREE.RenderPass(scene, camera); // 后期效果渲染器

        // 光线溢出后期效果
        var bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.renderToScreen = true;
        bloomPass.threshold = 0; // 门槛，即光亮要多强时才产生光溢出效果
        bloomPass.strength = 2.8; // 光溢出点强度
        bloomPass.radius = 1; // 光溢出点半径

        // 后期处理构建者
        composer = new THREE.EffectComposer(renderer);
        composer.setSize(window.innerWidth, window.innerHeight); // 设置范围
        composer.addPass(renderScene); // 添加后期效果渲染器
        composer.addPass(bloomPass); // 添加后期效果

        // 搞个正方体
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0x009900 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 让正方体转一转
        function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.001;
        composer.render();
        }

        animate();
    </script>
    </body>
</html>
\`\`\`

### 源码地址：

<a href="https://github.com/javaLuo/three_road/blob/master/src/unreal_bloom.html" target="_blank">https://github.com/javaLuo/three_road/blob/master/src/unreal_bloom.html</a>
`;
})();
