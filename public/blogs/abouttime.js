(function () {
  window.blogs = window.blogs || {};
  window.blogs.abouttime = `
### 时间标准

- **GMT**：格林尼治平太阳时（Greenwich Mean Time）,指英国伦敦郊区的皇家格林尼治天文台当地的平太阳时，因为本初子午线被定义为通过那里的经线。全世界以这里的时间为基准。<br/>
- **UTC**：协调世界时（Coordinated Universal Time），以原子钟（定义一秒的长度为铯-133 原子基态两个超精细能级间跃迁辐射 9,192,631,770 周所持续的时间）为基准，在时刻上尽量接近 GMT 的时间。比 GMT 更精准，是最主要的世界时间标准。

- **夏令时**：这是一种人为的规定，即夏天的时候天亮得比较早，为了充足利用白天的时间，许多国家在夏季的某一天开始，全国统一把时间拨快 1 个小时，让人们早点起床干活。等夏天过了，又全国统一把时间还原，即夏令时结束。我国已经不搞这一套了。在编程中用得比较少，只需要注意特定国家，如果需要夏令时的话，程序中得判断是否增加 1 小时。

> 还有什么地球时、恒星时等等，程序中一般用不到。<br/>
> 全球按照经线被划分为 24 个时区，全中国以北京时间为准，北京位于东 8 时区，比 GMT 多 8 个小时

### GMT 与 UTC 的区别

UTC 比 GMT 更准一丢丢。<br/>
在程序中，可视为**没有区别**。

### 标准日期字符串解释

**假设当前时间为：2019 年 2 月 22 日 8 点 00 分 00 秒，且我们位于中国**

用 JS 输出为：

\`\`\`javascript
Fri Feb 22 2019 08:00:00 GMT+0800 (中国标准时间)
\`\`\`

- Fri 周五
- Feb 二月
- GMT+0800 格林尼治时间+8 个小时，即北京时间

以上是 Chrome 浏览器 \`new Date().toString()\`输出的结果，在 Safari 苹果浏览器中，输出是这样：

\`\`\`javascript
Fri Feb 22 2019 08:00:00 GMT+0800 (CST)
\`\`\`

这两个是一样的，CST 就是中国标准时间的英文简称，在谷歌和苹果之间也能通用

### 关于 new Date()

**构建一个日期对象有以下这些方法：(Chrome 浏览器)**

\`\`\`javascript
new Date(); // 返回当前系统时间： Fri Feb 22 2019 08:00:00 GMT+0800 (中国标准时间)
new Date(1550793600000); // 毫秒数
new Date('Fri Feb 22 2019 08:00:00 GMT+0800 (中国标准时间)'); // 标准日期字符串
new Date('Fri Feb 22 2019 08:00:00'); // ok
new Date('Fri Feb 22 2019 8:0:0'); // ok
new Date('Fri Feb 22 2019 8'); // ok (Safari不行)
new Date('Fri 22, 2019 08:00:00'); // ok
new Date('2019/02/22 08:00:00'); // ok
new Date('2019/2/22 8:00:00'); // ok
new Date('2019-02-22T08:00:00'); // ok (Safari中不一样，见下一节)
new Date('2019-02-22 08:00:00'); // ok（Safari不行）
new Date('2019-2-22 8:00:00'); // ok（Safari不行）
new Date(2019, 2, 22, 8, 0, 0); // ok
new Date('2019', '2', '22', '08', '00', '00'); // ok
\`\`\`

**错误的方式**

\`\`\`javascript
new Date('2019/02/22T08:00:00'); // 无效,以'/‘分割，不能加'T'
new Date('2019-2-22T8:00:00'); // 无效，以'-'分割，且加了'T',则不能省略0: 2019-02-22T08:00:00
\`\`\`

### Chrome 和 Safari 中的差异

Chrome 所有的方式一律返回 GMT+0800（中国标准时间），即输入的是什么时间，生成的就是什么时间，且已经是 GMT+0800 了

但下面这种方式在 Safari 中会再加 8 小时

\`\`\`javascript
new Date('2019-02-22T08:00:00'); // Safari: Fri Feb 22 2019 16:00:00 GMT+0800 (CST), 变成下午16:00了
\`\`\`

> 所以最好都用 \`2019/02/22\` 以'/'分割的方式

### Date 实例中的 UTC 方法

根据 UTC 标准时间，就是我们当前时间（北京时间）再减去 8 小时后的时间来取

\`\`\`javascript
// 2019/02/22 08:00:00

date.getUTCHours(); // 0, 即 8 - 8 = 0，UTC时间为早上0点
\`\`\`
    
  `;
})();