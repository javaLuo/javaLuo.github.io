/**
 * 基础通用module
 * 管理用户信息，登录、注册等功能
 * **/
import server from "../util/fetch";
import { blogs } from "../config";
import { Message } from "element-ui";
const App = {
  namespaced: true,
  state: {
    blogConfig: blogs, // 文章配置信息缓存
    hi: {
      // 一言
      hitokoto: "Loading..."
    }
  },
  actions: {
    /** 获取一言随机一条语句 **/
    async getHi(context) {
      try {
        const url = `https://international.v1.hitokoto.cn?c=d&time=${Date.now()}`;
        const msg = await server(url, null, "GET", false, true);
        if (msg.status === 200 || msg.status === 304) {
          context.commit({
            type: "setHi",
            data: msg.data
          });
        }
        return msg;
      } catch (e) {
        Message.info("一言获取失败，需要翻墙");
      }
    }
  },
  mutations: {
    setHi(state, payload) {
      state.hi = payload.data;
    }
  }
};

export default App;
