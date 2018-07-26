##1. JS启动windows计算器
* 仅IE支持ActiveXObject对象
* 原理就是调用windows的批处理命令来启动对应的程序
```
function exec (command) { 
	window.oldOnError = window.onerror; 
	window.onerror = function (err) {
	 if (err.indexOf('utomation') != -1) {
		  alert("Shell指令已经被用户禁止");
		}
	};

	var wsh = new ActiveXObject('WScript.Shell');
	if (wsh) {
		wsh.Run(command);
		window.onerror = window.oldOnError;
	}
}

exec('calc.exe');
```

##2. https网站用iframe嵌入http的网页
* 处于安全考虑IOS下 https不能用iframe加载http的网站
* 参考：阮一峰 <a href="http://www.ruanyifeng.com/blog/2016/09/csp.html" target="_blank">http://www.ruanyifeng.com/blog/2016/09/csp.html</a>

```
// 头部加入：
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

* 这行代码的意思是，把那些http引入的资源，都自动把URL换成https。
* 所以其实这句代码没有卵用，因为除非原http地址也支持https，否则仍然无法访问。
* 如果原地址支持https，那直接用https的url不就完了吗


##3. CSS改变input光标的颜色

```
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
```

##4. 数字千分位分割

```
(123456789.123).toLocaleString('en-US'); // "123,456,789.123"

```
* 这种方式只能保留15位有效数字，且小数点后最多保留3位
* 基本够用了，因为JS中的数字精度也就只有这么大，科学计数法能保留到18位有效数字

##5. 镂空图片背景的文字

```
.imgText{
	-webkit-background-clip: text; // 按文字边缘裁剪
	-webkit-text-fill-color: transparent; // 文本区域填充色
	background-image: url(...);	// 指定一张背景图片
}

<div class="imgText">Hello World</div>
```