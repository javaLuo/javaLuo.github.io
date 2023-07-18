(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.live2d = `
### 1. 去官网下载SDK for web
[live2d](https://www.live2d.com/zh-CHS/download/cubism-sdk/)

下载解压后将\`CubismSdkForWeb-4/Core/live2dcubismcore.min.js\`此文件复制到项目中，并在index.html中引用，这是live2d SDK的本体。

### 2. 需要安装两个库：
\`\`\`node
pnpm add pixi.js
pnpm add pixi-live2d-display
\`\`\`

这个库\`pixi-live2d-display\`支持了live2d最新4.x的版本
[pixi-live2d-display](https://github.com/guansss/pixi-live2d-display)

### 3. 准备好live2d资源

一般设计师会给到一个文件夹，里面包含了一堆json，里面的\`.model3.json\`是live2d模型的入口文件<br/>
把这个文件夹放到项目的public目录，因为打包后它会出现在dist/下，到时候需要能够引用到。

### 4. 然后开始写代码

\`\`\`javaScript
<template>
    <canvas ref="liveCanvas" />
</template>

import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';

window.PIXI = PIXI; // 为了pixi-live2d-display内部调用

let app; // 为了存储pixi实例
let model; // 为了存储live2d实例

async mounted(){
    app = new PIXI.Application({
        view: this.$refs.liveCanvas,
        autoStart: true,
        resizeTo: window, 
        backgroundAlpha: 0,
    });

    // 打包后live2d资源会出现在dist/下，这里用相对路径就能引用到了
    model = await Live2DModel.from('./live/xxx.model3.json');

    app.stage.addChild(model);
    model.scale.set(0.1); // 调整缩放比例，一般原始资源尺寸非常大，需要缩小
}

beforeUnmount(){
    model?.destroy(); // 销毁
}
\`\`\`

### 5. 一些常用方法
\`\`\`javaScript
    // 点击live2d人物不同部位时的回调，只有定义了可点击区域的人物才会收到回调
    model.on('hit', (hitAreas)=>{
        // hitAreas 包含点击的区域和鼠标坐标
    });

    /**
     * 让人物做出指定的表情
     * @param name 表情的名称，不传则随机
    */
    model.expression(name);

    /**
     * 让人物做出指定的动作
     * @param name 动作的名称，不传则随机
    */
    model.motion(name);
\`\`\`

### 6. 关于配置文件

live2d资源里有一种\`.exp3.json\`， 这些文件是不同的表情文件，里面的内容实际上就是改变人物的不同参数，让人物做出对应的样子<br/>
有可能设计师输出的\`.model3.json\`文件没有把这些表情文件加入到配置中，需要自己配置一下：

\`\`\`javaScript
{
    Version: 3,
    FileReferences: {
        Moc: "xxx.moc3",
        Textures: [
            "xxx.8192/texture_00.png"
        ],
        Physics: "xxx.physics3.json",
        DisplayInfo: "xxx.cdi3.json",

        // 这个字段，代表所有的表情，如果原本没有到话，可以自己添加上
        Expressions: [
            {
                Name: "开心", // 表情的名称，调用model.expression时的入参
                File: "开心.exp3.json"
            }
        ]
    }
}
\`\`\`

  `;
})();
