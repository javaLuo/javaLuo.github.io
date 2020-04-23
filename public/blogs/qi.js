(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.qi = `
## JS 启动 windows 计算器

> 仅 IE 支持 ActiveXObject 对象<br/>
> 原理就是调用 windows 的批处理命令来启动对应的程序

\`\`\`js
function exec(command) {
    window.oldOnError = window.onerror;
    window.onerror = function(err) {
    if (err.indexOf('utomation') != -1) {
        alert('Shell指令已经被用户禁止');
    }
    };

    var wsh = new ActiveXObject('WScript.Shell');
    if (wsh) {
    wsh.Run(command);
    window.onerror = window.oldOnError;
    }
}

exec('calc.exe');
\`\`\`

## https 网站用 iframe 嵌入 http 的网页

> 处于安全考虑 IOS 下 https 不能用 iframe 加载 http 的网站<br/>
> 参考：阮一峰 <a href="http://www.ruanyifeng.com/blog/2016/09/csp.html" target="_blank">http://www.ruanyifeng.com/blog/2016/09/csp.html</a>

\`\`\`js
// 头部加入：
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
\`\`\`

> 这行代码的意思是，把那些 http 引入的资源，都自动把 URL 换成 https。<br/>
> 所以其实这句代码没有卵用，因为除非原 http 地址也支持 https，否则仍然无法访问。<br/>
> 如果原地址支持 https，那直接用 https 的 url 不就完了吗<br/>

## CSS 改变 input 光标的颜色

\`\`\`js
// 第1种方法
input{
    caret-color: #f00; // 原生属性设置光标颜色
}

// 第2种方法
input{
    color: #f00; // 把颜色设置为红色
}
input::first-line{
    color: #00f; // 又通过伪类把第1行颜色设置为蓝色，这样就只有光标保留了红色
}
\`\`\`

## 数字千分位分割

\`\`\`js
(123456789.123).toLocaleString('en-US'); // "123,456,789.123"
new Intl.NumberFormat().format(123456789.123); // 这个效率高，效果相同
\`\`\`

> 这种方式只能保留 15 位有效数字，且小数点后最多保留 3 位<br/>
> 基本够用了，因为 JS 中的数字精度也就只有这么大，科学计数法能保留到 18 位有效数字<br/>
> Intl 文档： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl

## 镂空图片背景的文字

\`\`\`js
.imgText{
    -webkit-background-clip: text; // 按文字边缘裁剪
    -webkit-text-fill-color: transparent; // 文本区域填充色
    background-image: url(...);	// 指定一张背景图片
}

<div class="imgText">Hello World</div>
\`\`\`

## console.log 不输出行号

\`\`\`js
setTimeout(console.log.bind(console, '你不知道我在代码中的位置'));
\`\`\`

## 检测用户是否打开了 devTool (F12)

\`\`\`js
var f = function() {};
f.toString = function() {
    alert('打开了F12');
};

console.log('%c', f);
\`\`\`

> 这个原理是，devTool 每次启动时都会自动调用正则对象、函数、日期对象的 toString 方法

## 原生 API 解析 URL 后面的参数

> 浏览器提供了原生 API 来处理：URLSearchParams

\`\`\`js
var p = window.location.pathname.split('?'); // name=lilei&age=18
var s = new URLSearchParams(p);

s.get('name'); // lilei
s.append('name', 'hanmeimei'); // 添加一个
s.getAll('name'); // ["lilei", "hanmeimei"] 如果有多个name，这个方法会返回所有name
s.set('name', 'heihei'); // 设置某个字段的值
s.delete('name'); // 删除某个字段
s.toString(); // 返回原始字符串
s.keys(); // 类似Object.keys(obj)
s.values(); // 类似Object.values(obj)
s.entries(); // 类似Object.entries(obj)
\`\`\`

> IE 全系列不支持

## 极小数防止变成科学记数法

> 小于 1 的数，并且小数点>6,就会变成科学记数法

\`\`\`js
0.000001 => 1e-7
\`\`\`

1. 判断是否小于 1，如果是则加上 1 转字符串再把第一个 1 换成 0

\`\`\`js
String(1 + 0.000001).replace(/^1/, '0');
\`\`\`

2. 利用 toFixed()

\`\`\`js
(0.000001).toFixed(7);
\`\`\`

> 一般前端能用到小数点后 12 位，就差不多了，再多的小数点可能会出现精度误差

## 生成随机颜色值

\`\`\`js
parseInt(0x1000000 * Math.random())
    .toString(16)
    .padStart(6, '0');
\`\`\`

`;
})();
