(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.iconfont = `
### 1. 下载字体图标文件到本地
![1](/img/iconfont/i1.png)

### 2. 下载的文件中 有个 iconfont.css 这个文件，打开文件 复制所需代码到小程序的iconfont.acss中
![2](/img/iconfont/i2.png)

### 3. 打开 <a href="https://transfonter.org/" target="_blank" rel="noopener nofollow">https://transfonter.org/</a> 这个网站 转化为base64的格式 选择上传 刚刚下载在本地的中iconfont.ttf的文件
![3](/img/iconfont/i3.png)

### 4. 下载下来后有个 stylesheet.css，打开并复制@font-face的部分到 iconfont.acss 顶部
![4](/img/iconfont/i4.png)
<br/><br/>
最终iconfont.acss看起来像这样：

\`\`\`css
@font-face {
    font-family: 'iconfont';
    src: url('data:application/font-woff2;charset=utf-8;base64,...') format('woff2'),
        url('data:application/font-woff;charset=utf-8;base64,...') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-arrow-right:before {
  content: "\e665";
}

.icon-fastforward2:before {
  content: "\e737";
}

.icon-close:before {
  content: "\e606";
}

\`\`\`

### 5. 使用
\`\`\`html
<text class="iconfont icon-close" />
\`\`\`

### 参考
原文地址：<a href="https://blog.csdn.net/Zhooson/article/details/89919614" target="_blank" rel="noopener nofollow">https://blog.csdn.net/Zhooson/article/details/89919614</a><br/>
阿里巴巴矢量图标库：<a href="https://www.iconfont.cn/" target="_blank" rel="noopener nofollow">https://www.iconfont.cn/</a>

`;
})();
