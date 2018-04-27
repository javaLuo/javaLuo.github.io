```
/**
* @counter-style
* 自定义系统描述符号，用于li列表前缀符号
* 兼容性：仅FireFox支持
**/
@counter-style name{
	system: cyclic;
	additive-symbols: I 1;
}
.list{
	list-style: name;
}
```