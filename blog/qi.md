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