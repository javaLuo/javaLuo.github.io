import { ref } from "vue";
import { getHi } from "@/api";

export default function useHi() {
  const text = ref({});

  // 更新数据
  const getHiData = async () => {
    text.value = (await getHi()) || "";
  };

  return {
    text,
    getHiData,
  };
}
