import { ref } from "vue";

export default function useMp3() {
  const mp3 = ref(null); // audio dom
  const volume = ref(0); // sound 0~100
  const isPlaying = ref(false); // 是否正在播放
  const isStop = ref(false); // 用户是否手动暂停

  let volumeTimer = null;

  const init = (dom) => {
    mp3.value = dom.value;
  };

  // 开始播放
  const onPlay = () => {
    isPlaying.value = true;
    mp3.value.play();
    volumeUp();
  };

  // 暂停播放
  const onPause = () => {
    isPlaying.value = false;
    volumeDown();
  };

  // 直接设置播放或暂停
  const onSetPlay = (isPlay) => {
    isStop.value = !isPlay;
    if (isPlay) {
      onPlay();
    } else {
      onPause();
    }
  };

  // 是否可以开始播放
  const onCanPlay = () => {
    // 为了在音乐末尾和开头无缝衔接
    mp3.value.ontimeupdate = () => {
      if (mp3.value.duration - 3 < mp3.value.currentTime) {
        mp3.value.currentTime = 2;
      }
    };
  };

  /** 音频音量调大 **/
  const volumeUp = () => {
    clearTimeout(volumeTimer);
    if (volume.value + 0.1 <= 1) {
      volume.value += 0.1;
      mp3.value.volume = volume.value;
      volumeTimer = setTimeout(() => {
        volumeUp();
      }, 200);
    }
  };

  /** 音频音量调小 **/
  const volumeDown = () => {
    clearTimeout(volumeTimer);
    if (volume.value - 0.1 >= 0) {
      volume.value -= 0.1;
      mp3.value.volume = volume.value;
      volumeTimer = setTimeout(() => {
        volumeDown();
      }, 200);
    } else {
      mp3.value.pause();
    }
  };

  return {
    init,
    onPlay,
    onPause,
    onSetPlay,
    onCanPlay,
    isPlaying,
    isStop,
  };
}
