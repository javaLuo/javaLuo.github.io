(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.three_anime = `
### 首先加载模型
\`\`\`js
const loader = new THREE.GLTFLoader();
loader.load("./model2/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  initAnimations(gltf); // 处理动画
});
\`\`\`

### 封装了一个函数处理所有动画
\`\`\`js
let animations; // 模型拥有的所有动画,是数组
let animateMixer; // 动画混合器
let animateNo = 0; // 当前播放的哪一个动画
let action; // 当前操作的动作对象

const initAnimations = gltf => {
  animations = gltf.animations;
  animateMixer = new THREE.AnimationMixer(gltf.scene);

  // 监听动画播放结束，开始下一个动画，循环模式是LoopOnce时才会触发
  animateMixer.addEventListener("finished", e => {
    animateNo = animateNo >= animations.length - 1 ? 0 : animateNo + 1;
    playAnimations(animations[animateNo]);
  });

  // 每一个循环结束时触发一次，循环模式不是LoopOnce时有效
  animateMixer.addEventListener("loop", e => {
    action.stop();
    animateNo = animateNo >= animations.length - 1 ? 0 : animateNo + 1;
    playAnimations(animations[animateNo]);
  });

  playAnimations(animations[animateNo]);
}

\`\`\`

### 执行某一个动画
\`\`\`js
/**
 * @param clip 模型动画对象
*/
const playAnimations = clip => {
  action = animateMixer.clipAction(clip);
  action.clampWhenFinished = true; // 动作完成时是否保持最后一帧动作
  action.loop = THREE.LoopOnce; // 当前动画循环的次数
  action.reset(); // 重置动画状态到初始值

  action.play(); // 开始执行动画
}
\`\`\`
## AnimationMixer 动画播放器
- 动画混合器，用于管理某个模型的所有动画

### 构造
\`\`\`js
const animateMixer = new THREE.AnimationMixer(gltf.scene);
\`\`\`

### 属性

**.time**
- 全局动画时间（s）
- 表示动画当前执行到哪一秒了

**.timeScale**
- 全局时间比例因子
- 将用于控制所有动画的执行速度，默认1
- 0停止，负数将倒序播放，越大动画速度越快

### 方法

**.setTime(timeInSeconds:Number): AnimationMixer**
- 设置全局混合器到一个给定的时间，动画将立即跳到这一秒的状态

**.clipAction(clip: AnimationClip, optionalRoot: Object3D): AnimationAction**
- 从clip对象构建其action对象，action对象才可以执行动画的播放暂停等一些列操作
- clip: AnimationClip是3D模型中animation字段(数组)中的那些东西
- optionalRoot 就是gltf.scene，可以不传

**.existingAction(clip: AnimationClip, optionalRoot: Object3D): AnimationAction**
- 返回第一个参数clip已有的action对象
- 如果之前用clipAction为此clip创建过action，则应该就会有已存在的action对象

**.getRoot(): Object3D**
- 返回gltf.scene

**.stopAllAction(): AnimationMixer**
- 停止全部动画

**.update(deltaTimeInSeconds: Number): AnimationMixer**
- 手动更新混合器的时间以更新动画

**.uncacheClip(clip: AnimationClip): null**
- 释放该clip在混合器中的所有资源

**.uncacheRoot(root: Object3D): null**
- 释放根对象gltf.scene在混合器中的所有内存资源

**.uncacheAction(clip: AnimationClip, optionalRoot: Object3D): null**
- 释放该clip在混合器中创建的action的内存资源

## AnimationClip 动画剪辑对象
- 关键帧轨道数据集，就是一堆定义好的数据，一般3D模型中自带

### 属性

**.duration** Number
- 剪辑的持续时间(s), 可以通过\`resetDuration\`从轨道数组(\`tracks\`)计算出来。

**.name** String
- 剪辑的名称， 调用\`findByName\`可以根据名称搜索某个剪辑

**.tracks** Array
- 包含了一堆关键帧轨道(\`KeyframeTrack\`)数据的数组

**.uuid** String
- uuid, 自动分配不可编辑

### 方法

**.clone(): AnimationClip**
- 克隆当前剪辑，返回一个一模一样的剪辑

**.optimize(): this**
- 通过移除重复的顺序帧来优化每一个轨道

**.resetDuration(): this**
- 将剪辑的持续时间(\`duration\`)设为最长的关键帧轨道(\`KeyframeTrack\`)的持续时间。

**.toJSON(): Object**
- 转成json对象

**.trim(): this**
- 修建所有的关键帧轨道到该剪辑的持续时间

**.validate(): Boolean**
- 对剪辑中的每个轨道执行最小验证。如果所有轨道都有效，返回true

### 静态方法

**.CreateClipsFromMorphTargetSequences(name: String, morphTargetSequence: Array, fps: Number, noLoop: Boolean): Array**
- 返回从几何体的变形目标序列创建的新动画剪辑数组
- 并尝试将变形目标名称分类为基于动画组的模式
- 如“Walk_001、Walk_002、Run_001、Run_002……”
  
**.CreateFromMorphTargetSequence(name: String, morphTargetSequence: Array, fps: Number, noLoop: Boolean): AnimationClip**
- 返回一个由几何体变形目标数组(morph targets array)得到的新动画剪辑，接收名称和帧率参数

**.findByName(objectOrClipArray: Object, name: String): AnimationClip**
- 根据名称搜索动画剪辑(AnimationClip), 接收一个动画剪辑数组或者一个包含名为"animation"的数组的网格（或几何体）作为第一个参数

**.parse(json: Object): AnimationClip**
- 从JSON对象（对应\`.toJSON()\`方法）解析出一个clip对象

**.parseAnimation(animation: Object, bones: Array): AnimationClip**
- 解析动画层级格式并返回动画剪辑

**.toJSON(clip: AnimationClip): Object**
- 接收一个动画剪辑为参数并返回一个JSON对象

## AnimationAction 动画对象

**.clampWhenFinished** Boolean 默认\`false\`
- 动画播放到**最后一帧**时是否自动暂停
- 如果设为\`false\`, \`enabled\`属性会在动画**最后一次循环的最后一帧**完成时自动变为\`false\`,这个动画将不再被执行

**.enabled** Boolean 默认\`true\`
- 是否应用这个动画，如果设为\`false\`,这个动画将被忽略

**.loop** Number 默认**THREE.LoopRepeat**
- 动画的循环方式
- 可选值: 
- \`THREE.LoopOnce\` 执行一次
- \`THREE.LoopRepeat\` 重复\`repetitions\`次，每次从头播放
- \`THREE.LoopPingPong\` 重复\`repetitions\`次，每次正序倒序穿插播放
  
**.paused** Boolean 默认\`false\`
- 设为true时，动作立即暂停

**.repetitions** Number 默认\`Infinity\`
- 动画的执行次数
- 如果\`.loop\`设为\`THREE.LoopOnce\`，则\`repetitions\`值无效

**.time** Number 默认0
- 动画开始的时间点（单位是秒，从0开始计时）

**.timeScale** Number 默认1
- 时间(.time属性)的比例因子
- 值为0会使动画暂停
- 值为负数时动画会反向执行

**.weight** Number 默认1
- 动画的影响程度：0~1
- 取0.几可以用来混合多个对象

**.zeroSlopeAtEnd** Boolean 默认\`true\`
- 动画结束时是否启用平滑插值，无需单独剪辑开始、循环和结束

**.zeroSlopeAtStart** Boolean 默认\`true\`
- 动画开始时是否启用平滑插值，无需单独剪辑开始、循环和结束

**.crossFadeFrom(fadeOutAction: AnimationAction, durationInSeconds: Number, warpBoolean: Boolean): AnimationAction**
- 此方法将当前动画淡入，将第一个参数传入的动画淡出
- fadeOutAction 一个动画对象，将要被淡出
- durationInSeconds 持续时间(s)
- warpBoolean 时间比例(.timeScale)是否也参与淡入淡出的交替)

**.crossFadeTo(fadeInAction: AnimationAction, durationInSeconds: Number, warpBoolean: Boolean)**
- 此方法将当前动画淡出，将第一个参数传入的动画淡入
- 其他同上

**.fadeIn(durationInSeconds: Number)**
- 逐渐淡入当前动画（就是把\`.weight\`属性由0提升到1）
- durationInSeconds 持续时间(s)

**.fadeOut(durationInSeconds: Number)**
- 逐渐淡出当前动画

**.getEffectiveTimeScale(): Number**
- 返回当前时间比例值\`.timeScale\`(经过了当前变形状态和paused值计算之后的值)

**.getEffectiveWeight(): Number**
- 返回当前权重值\`.weight\`（经过了当前淡入淡出状态和enabled值计算之后的值）

**.getClip(): AnimationClip**
- 返回当前动画的剪辑对象

**.getMixer(): AnimationMixer**
- 返回当前动画所属的混合器

**.getRoot(): Object3D**
- 返回执行此动作的根对象

**.halt(durationInSeconds: Number): AnimationAction**
- 使动画在一定时间内逐渐停止
- 原理是通过降低时间比例\`.timeScale\`

**.isRunning(): Boolean**
- 判断动画是否正在执行
- 其实就是判断\`.time\`的值是否在改变
- 且\`.paused\`为\`false\`
- 且\`.enabled\`为\`true\`
- 且\`.timeScale\`不为0
- 且没有调用延迟启动(\`.startAt()\`)

**.isScheduled(): Boolean**
- 判断动画在混合器中是否处于激活状态
- 即混合器中的当前动画是否为该动画
- 但这并不代表该动画就一定是播放状态

**.play(): AnimationAction**
- 播放当前动画

**.reset(): AnimationAction**
- 重置动作使其回到初始状态

**.setDuration(durationInSeconds: Number): AnimationAction**
- 设置动画循环的持续时间(通过改变\`timeScale\`)

**.setEffectiveTimeScale(timeScale: Number): AnimationAction**
- 设置时间比例，且同时停止所有的变形动画
- 值越小，动画速度越慢，越大越快，负数将倒序播放

**.setEffectiveWeight(weight: Number): AnimationAction**
- 设置权重，且同时停止所有的淡入淡出

**.setLoop(loopMode: Number, repetitions: Number): AnimationAction**
- 设置循环方式和循环次数

**.startAt(startTimeInSeconds: Number): AnimationAction**
- 定义动画延时执行

**.stop()**
- 停止动画

**.stopFading()**
- 停止所有的淡入淡出（\`.fading\`）

**.stopWarping()**
- 停用动作中所有预定的变形(\`.warping\`)

**.syncWith(otherAction: AnimationAction)**
- 将当前动画与参数传入的动画同步
- 将\`.time\`和\`.timeScale\`与传入的动画设为一致

**.warp(startTimeScale:Number, endTimeScale: Number, durationInSeconds:Number)**
- 通过逐渐将时间比例\`timeScale\`由\`startTimeScale\`修改至\`endTimeScale\`来改变回放速度。
`;
})();
