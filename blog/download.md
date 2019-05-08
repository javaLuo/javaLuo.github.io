### html

```html
<img src="https://isluo.com/kernel/index/img/welcome/girl.png" onclick="get(event)" />
```

### js

- 以 `axios` 为例

```js
  /** 异步请求文件数据 **/
  async get(e){
    const src = e.target.src; // 获取链接地址
    const fileName = src.split('/').pop(); // 获取文件名

    const res = await axios({
      method: 'get',
      url: src,
      responseType: 'arraybuffer', // 这里需要用arraybuffer的方式
    });

    // 让浏览器弹出下载
    download(res.data, fileName);
  }

  /**
    * 封装了一个下载的方法
    * @param data 文件二进制数据
    * @param filename 保存的文件名
  **/
  download(data, fileName){
    const link = document.createElement('a');
    link.download = fileName;
    link.style.display = 'none';

    // 将文件二进制数据转换为blob数据，赋值给<a>标签的href
    const blob = new Blob([data]);
    link.href = URL.createObjectURL(blob);

    // 触发<a>标签的click事件
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
```

### 原理

- 普通的文件，`<a>` 标签的 download 属性，浏览器会直接打开文件
- 所以用 get 请求直接请求这个文件的二进制数据
- 转换为 blob 数据，赋给 `<a>` 标签，再下载
- 这时候就可以弹出下载框了

### 注意

- 注意跨域，get 请求显然存在跨域问题
