(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.download = `
### html

\`\`\`html
<img src="https://isluo.com/kernel/index/img/welcome/girl.png" onclick="get(event)" />
\`\`\`

### js

以 \`axios\` 为例

\`\`\`javascript
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
    * \`param data 文件二进制数据
    * \`param filename 保存的文件名
    **/
    download(data, fileName){
    // 将文件二进制数据转换为blob数据
    const blob = new Blob([data]);
    const link = document.createElement('a');

    if('download' in link){ // 非IE浏览器直接利用download属性下载
        link.download = fileName;
        link.style.display = 'none';
        link.href = URL.createObjectURL(blob);
        // 触发<a>标签的click事件
        document.body.appendChild(link);
        link.click();
        /**
        * 释放blob资源并删除创建的<a>标签
        * 使用setTimeout是因为Edge浏览器需要一点时间解析blob，直接释放会读取不到
        * */
        setTimeout(function(){
        URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
        },200);
    } else { // IE10+浏览器，利用IE独有方法下载
        navigator.msSaveBlob(blob, fileName);
    }
    }
\`\`\`

### 原理

普通的文件，\`<a>\` 标签的 download 属性，浏览器会直接打开文件<br/>
所以用 get 请求直接请求这个文件的二进制数据<br/>
转换为 blob 数据，赋给 \`<a>\` 标签，再下载<br/>
这时候就可以弹出下载框了

### 实际运用中更好一点的方法

> 这样做可以快速弹出下载框，而不用等待 axios 请求完成再弹出下载框

\`\`\`javascript
/**
 * 封装了一个下载的方法
 * \`param src 文件的路径
 * \`param filename 保存的文件名
 **/
export async function download(src, fileName) {
    const link = document.createElement("a");

    // 现代浏览器直接利用download属性下载
    if ("download" in link) {
    link.download = fileName;
    link.style.display = "none";
    link.href = src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
    } else {
    // IE专用Blob方法下载
    try {
        const res = await axios({
        method: "get",
        url: src,
        responseType: "arraybuffer", // 这里需要用arraybuffer的方式
        });
        const blob = new Blob([res.data]);
        navigator.msSaveBlob(blob, fileName);
    } catch (e) {
        console.log("error:", e);
    }
    return true;
    }
}
\`\`\`

### 注意

- 注意不能跨域，跨域的文件 download 属性无效
- 支持 IE10+，Edge 没问题

  `;
})();
