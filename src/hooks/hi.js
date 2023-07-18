import { ref } from "vue";
import useStore from '@/store/index';

export default function useHi() {
  const text = ref({});
  const store = useStore();

  // 更新数据
  const getHiData = async () => {
    text.value = (await store.getHi()) || "";
  };

  return {
    text,
    getHiData,
  };
}
