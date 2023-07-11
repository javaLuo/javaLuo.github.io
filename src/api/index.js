import { ElMessage } from "element-plus";
import server from "@/util/http";

/** 获取一言随机一条语句 **/
export const getHi = async () => {
  try {
    const url = `https://international.v1.hitokoto.cn?c=d&time=${Date.now()}`;
    const msg = await server(url, null, "GET", false, true);
    if (msg.status === 200 || msg.status === 304) {
      return msg.data;
    }
    return "";
  } catch (e) {
    ElMessage.info("一言获取失败，需要翻墙");
  }
};

/** 获取bing每日壁纸 **/
export const getBingImg = async () => {
  try {
    const url = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';
    const msg = await server(url, null, "GET", false, true);
    console.log('返回了什么：', msg);
    if (msg.status === 200 || msg.status === 304) {
      return msg.data;
    }
    return "";
  } catch (e) {
    ElMessage.info("一言获取失败，需要翻墙");
  }
};