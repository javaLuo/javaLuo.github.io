import { defineStore } from 'pinia'
import { ElMessage } from "element-plus";
import server from "@/utils/http";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export default defineStore('main', {
  state: () => {
    return {
      test: 1,
    }
  },
  actions: {
    async getHi(){
      try {
        const url = `https://international.v1.hitokoto.cn?c=d&time=${Date.now()}`;
        const msg = await server(url, null, "GET", false, true);
        if (msg.status === 200 || msg.status === 304) {
          return msg.data;
        }
        return "";
      } catch (e) {
        // ElMessage.info("一言获取失败，需要翻墙");
      }
    }
  }
})