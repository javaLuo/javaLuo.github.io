/**
 * 页面通用module
 * 页面中的各种逻辑
 * **/
const Module = {
  namespaced: true,
  state: {
    playing: true // 当前页面播放按钮是否正在播放
  },
  actions: {
    async setPlaying(context, payload) {
      // console.log("触发playing:", payload.params);
      try {
        await context.commit({
          type: "setPlaying",
          playing: payload.params.playing
        });
      } catch (e) {
        // console.log("网络错误");
      }
    }
  },
  mutations: {
    setPlaying(state, payload) {
      // console.log("设置：", payload);
      state.playing = payload.playing;
    }
  }
};

export default Module;
