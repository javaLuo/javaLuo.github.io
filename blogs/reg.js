(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.reg = `
MDN 文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions</a>

### JS中涉及到正则的方法有这些：

| 方法                  | 参数         | 返回值     | 描述                                                                                                                    |
| --------------------- | ------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| reg.exec(str)         | 待处理字符串 | Array/null | 从str中匹配符合的子字符串，返回数组和一些额外信息                                                                       |
| reg.test(str)         | 待处理字符串 | Boolean    | 测试str是否符合表达式，返回true/false                                                                                   |
| str.match(reg)        | 正则表达式   | Array/null | 用reg来匹配str中符合的子字符串，跟exec()类似，但这个更稳妥                                                              |
| str.replace(reg,str2) | 正则，字符串 | String     | 用reg匹配str中符合的子字符串，用str2替换匹配到的子字符串，返回替换后的字符串                                            |
| str.search(reg)       | 正则表达式   | String     | 根据reg查找str中第1个符合的子字符串，返回其在str中的下标位置。这个方法只能从头开始查找，并且查找到第1个就会停止继续查找 |
| str.split(reg)        | 正则表达式   | Array      | 根据reg的规则分割str                                                                                                    |

### 比较常用但容易混淆切忘记的几个

1. 括号 ()
括号中的内容被看成一个整体

**用法1:**
\`\`\`javascript
const reg = /(hi)(U)\\1\\2/;
\`\`\`
\\1\\2表示取前面的子表达式，(hi)就是第1个，(U)是第2个，上面的表达式等价于：
\`\`\`javascript
const reg = /hiUhiU/;
\`\`\`

**用法2:**
\`\`\`javascript
const str = "Hi, I'am 坂本";
const reg = /(坂本)/;
str.replace(reg, "逼王$1，有何贵干"); // "Hi,I'am 逼王坂本，有何贵干"
\`\`\`
每一个括号都是一个子表达式，都有一个编号，按顺序从1开始<br/>
可以在replace中用$1,$2这样的形式来替换对应位置的字符串

2. 非捕获括号 (?:)
\`\`\`javascript
const reg = /(?:hi)(U)\\1/;
\`\`\`
(?:hi)不进行编号，就是说(U)才是第1个。上面的表达式等价于：
\`\`\`javascript
const reg = /hiUU/;
\`\`\`
即(?:)与一般的()意义相同，只是不进行捕获，不进行编号。在str.replace中也不能用$1的方式来替换


### 正向断言 和 反向断言

测试字符串:
\`\`\`javascript
const str = "Java7 Java8";
\`\`\`

1. 正向肯定断言 (?=)
\`\`\`javascript
const reg = /Java(?=8)/; // 匹配“Java”字符串，但这个字符串后面必须跟着数字8
str.search(reg); // 6, 返回下标6，说明匹配到的是Java8的那个“Java”
\`\`\`

2. 正向否定断言 (?!)
\`\`\`javascript
const reg=/Java(?!8)/; // 匹配“Java”字符串，但这个字符串后面必须不跟着数字8
str.search(reg); // 0, 返回下标0，说明匹配到的是Java7的那个“Java”
\`\`\`

3. 反向肯定断言 (?<=)
\`\`\`javascript
const reg = /(?<=J)a/; // 匹配字符“a”，这个字符的前面必须是字符“J”
str.search(reg); // 1, 返回下标1，说明匹配到的是Java7中的第1个"a"
\`\`\`

4. 反向否定断言 (?<!)
\`\`\`javascript
const reg = /(?<!J)a/; // 匹配字符“a”, 这个字符的前面必须不是字符“J”
str.search(reg); // 3, 返回下标3，说明匹配到的是Java7中的第2个“a”
\`\`\`

> 反向断言在ES9中才加入。反向断言用于提取字符串很方便：

\`\`\`
const str = "\`1,\`23,\`456"; // 现在想提取字符串中的数字
const reg = /(?<=\`)\\d+/g;
str.match(reg); // ["1","23","456"];
\`\`\`

### 标签

| 标签 | 描述                                                                                                                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| g    | 全局搜索。匹配到符合的项后，不会停止，而是继续向下匹配，直到整个字符串的末尾                                                                                                                       |
| i    | 不区分大小写                                                                                                                                                                                       |
| m    | 多行搜索，在^,$这种规定了开始末尾的表达式中生效，配合g，表示每一行都算开头和结尾，而不是整个字符串只有一个开头和结尾                                                                               |
| y    | 执行“粘性”搜索,不太好理解，可以看：<a href="https://www.cnblogs.com/ziyunfei/archive/2012/12/07/2807313.html" target="_blank">https://www.cnblogs.com/ziyunfei/archive/2012/12/07/2807313.html</a> |
`;
})();
