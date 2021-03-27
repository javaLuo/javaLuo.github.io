import { computed, ref, watch } from "vue";
import { sortDate } from "@/util/tools";
import { blogs, share } from "@/config";

export default function usePages(type, pSize = 10) {
  const pageNow = ref(1);
  const pageSize = ref(pSize);
  const total = ref(0);
  const searchValue = ref(""); // 筛选框的值
  const pageNowData = ref([]); // 最后真正展示出来的数据
  let blogsData; // 1笔记，2作品，3日志, 4分享
  let timer = [];
  if (type === 4) {
    blogsData = share;
  } else {
    blogsData = type ? blogs.filter((item) => item.type === type) : blogs;
  }

  // 通过搜索筛选后的值
  const searchData = computed(() => {
    let res = [...blogsData];
    if (searchValue.value) {
      const v = searchValue.value.toLowerCase();
      res = res.filter((item) => {
        return item.name.toLowerCase().includes(v);
      });
    }
    console.log("searchData:", res);
    return res;
  });

  // 最终筛选出的列表(通过时间排序后再分页)
  const listData = computed(() => {
    if (type === 4) {
      return searchData.value.filter(
        (item, index) =>
          index >= (pageNow.value - 1) * pageSize.value &&
          index < pageNow.value * pageSize.value
      );
    }

    return sortDate(searchData.value).filter(
      (item, index) =>
        index >= (pageNow.value - 1) * pageSize.value &&
        index < pageNow.value * pageSize.value
    );
  });

  watch(searchValue, () => {
    pageNow.value = 1;
  });

  watch(
    searchData,
    (newV) => {
      total.value = newV.length;
    },
    { immediate: true }
  );

  watch(
    listData,
    (newV) => {
      for (let i = 0; i < timer.length; i++) {
        clearTimeout(timer[i]);
      }
      timer.length = 0;
      pageNowData.value = [];
      const dom = document.getElementById("bodyBox");
      if (dom) {
        dom.scrollTop = 0;
      }

      for (let i = 0; newV[i]; i++) {
        timer.push(
          setTimeout(() => {
            pageNowData.value.push(newV[i]);
          }, i * 80)
        );
      }
    },
    {
      immediate: true,
    }
  );

  const onPageChange = (v) => {
    pageNow.value = v;
  };

  return {
    pageNow,
    pageSize,
    total,
    searchValue,
    pageNowData,
    onPageChange,
  };
}
