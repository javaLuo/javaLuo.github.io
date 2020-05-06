(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.lockscreen = `
### 少BB，赶紧说怎么搞
\`\`\`
/** 
 * 进入全屏
 * 只有在全屏状态下才能锁定屏幕方向
 * */
fullScreenCheck() {
  if (document.fullscreenElement) return;
  return document.documentElement.requestFullscreen();
}

/**
 * 锁定屏幕
 * @param type 锁定的方向:portrait(竖屏) / landscape(横屏)
 * */
async onLock(type) {
  try {
    await fullScreenCheck(); // 先进入全屏
  } catch (err) {
    console.error(err);
  }
  await window.screen.orientation.lock(type); // 锁定屏幕方向
}

// 取消锁定
onUnLock() {
  document.exitFullscreen(); // 退出全屏
  window.screen.orientation.unlock(); // 取消锁定
}

\`\`\`
    
- 调用\`onLock\`锁定屏幕
- 调用\`onUnLock\`取消锁定屏幕

#### 兼容性
<a href="https://caniuse.com/#feat=screen-orientation" target="_blank">https://caniuse.com/#feat=screen-orientation</a>

#### 后记
需要在移动端进行测试，已知：<br/>
- 小米手机自带浏览器 只能锁定为横屏，传portrait也会被锁定为横屏，服了。
- screen.orientation.type 可以获取当前屏幕的状态：portrait-primary(肖像模式，竖屏)，landscape-primary(景观模式，横屏)
  `;
})();
