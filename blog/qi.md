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