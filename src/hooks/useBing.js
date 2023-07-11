import { ref } from "vue";
import { getBingImg } from "@/api";

export default function useHi() {
  const url = ref({});

  // 更新数据
  const getBingData = async () => {
    const res = (await getBingImg()) || "";
    if(res.images){
      url.value = 'https://cn.bing.com' + res.images[0].url;
    }
  };

  return {
    url,
    getBingData,
  };
}
