### html

```html
<img src="https://isluo.com/kernel/index/img/welcome/girl.png" onclick="download(event)" />
```

### js

```js
  async download(e){
    const src = e.target.src; // 获取链接地址
    const fileName = src.split('/').pop(); // 获取文件名

    // 通过一个get请求获取文件数据
    const res = await axios({
      method: 'get',
      url: src,
      responseType: 'arraybuffer', // 这里需要用arraybuffer的方式
    });

    // 新建一个a标签，将获取到的文件数据转换为blob，再利用a标签的download属性进行下载
    const link = document.createElement('a');
    link.download = fileName;
    link.style.display = 'none';

    const blob = new Blob([res.data]);
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
```

### 原理

- 普通的文件，a 标签的 download 属性，浏览器会直接打开文件
- 所以用 get 请求直接请求这个文件的二进制数据
- 转换为 blob 数据，赋给 a 标签，再下载
- 这时候就可以弹出下载框了

### 注意

- 注意跨域，get 请求显然存在跨域问题
