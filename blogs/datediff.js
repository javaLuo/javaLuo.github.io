(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.datediff = `
网上的方法大多是直接将两个日期取毫秒数相减

没有考虑第一天最后1秒到第2天第1秒，其实也是过了一天的情况
\`\`\`
function dateDiff(sDate,  eDate){
    const y = Math.abs(eDate.getFullYear() - sDate.getFullYear());
    const m = Math.abs(eDate.getMonth() - sDate.getMonth());
    const d = Math.abs(eDate.getDate() - sDate.getDate());

    // 如果年月日都相等，那肯定是同一天
    if (y === 0 && m === 0 && d === 0) {
        return 0;
    } else {
    // 否则今天算一天，然后计算从明天的0点到结束的日期共经过多少个"24小时"
    // 向下取整，最后加1天，就是真正的从开始日期到结束日期过了几天
        const last = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate() + 1, 0, 0, 0);
        const diff = Math.floor((eDate - last)/  1000  /  60  /  60  / 24);
        return 1 + diff;
    }
}
\`\`\`

- 不知道有没有BUG，个人测试没测出BUG
`;
})();
