(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.pre = `
> 原文链接:<a href="https://3perf.com/blog/link-rels/" target="_blank" rel="nofollow">https://3perf.com/blog/link-rels/ (英文)</a>

### 有5个\`<link rel>\`标记用于预加载内容：
\`\`\`html
<link rel="preload" href="/style.css" as="style" />
<link rel="prefetch" href="/style.css" as="style" />

<link rel="preconnect" href="https://example.com" />
<link rel="dns-prefetch" href="https://example.com" />

<link rel="prerender" href="https://example.com/about.html" />
\`\`\`

### 1. preload 预加载
\`\`\`html
<link rel="preload" href="/style.css" as="style" />
\`\`\`
> 告诉浏览器尽快下载并缓存资源<br/>
> as字段可以是:<br/>
> \`stype\` 样式表<br/>
> \`script\` js文件<br/>
> \`font\` 字体文件<br/>
> \`image\` 图片<br/>
> \`audio\` 音频<br/>
> \`video\` 视频文件<br/>
> \`document\` 打算由\`<frame>\`或\`<iframe>\`引入的html文件<br/>
> \`embed\` 嵌入的\`<embed>\`资源<br/>
> \`object\` 嵌入的\`<object>\`资源<br/>
> \`fetch\` 通过ajax请求的ArrayBuffer或JSON文件等<br/>
> \`track\` WebVTT视频字幕文件<br/>
> \`worker\` worker js文件

> 当知道在当前页加载后就会用到的资源，可以使用preload来预先加载。<br/>
> 浏览器会根据as字段来判断优先级<br/>
> **强制性**：浏览器会加载所有的这些资源<br/>
> 不要大量使用

### 2. prefetch 预取
\`\`\`html
<link rel="prefetch" href="/style.css" as="style" />
\`\`\`
> 用于预先下载其他页面需要的资源<br/>
> 即当前页面不会使用，但用户大概率会跳转到下一个页面，比如商品详情页<br/>
> 则可以使用prefetch在主页预先加载商品详情页所需的资源<br/>
> **非强制性**：浏览器会自动判断是否预加载，当网速较慢时，浏览器可以决定不加载。<br/>
> 可以大量使用

### 3. preconnect 预解析
\`\`\`html
<link rel="preconnect" href="https://isluo.com" />
\`\`\`
> 当你有很多静态资源托管在CDN或使用了某些第三方插件时，可以用preconnect提前和第三方域建立链接。<br/>
> 比如网页中用到了Google字体时，可以预解析fonts.googleapis.com来稍微加快链接速度。<br/>
> **非强制性**：浏览器会自动判断是否预解析，当网速较慢时，浏览器可以决定不解析。<br/>
> 不要大量使用，最好4～6个之内

### 4. dns-prefetch 预解析DNS
\`\`\`html
<link rel="dns-prefetch" href="https://isluo.com" />
\`\`\`
> 类似preconnect<br/>
> preconnect已经包含了dns-prefetch的所有功能<br/>
> 它们两个不会同时生效。<br/>
> 如果你需要支持旧的浏览器，请使用dns-prefetch<br/>
> 如果你有超过4~6个域名需要预解析，也请使用dns-prefetch，它更轻量，仅解析dns，并没有预先保持链接<br/>
> **非强制性**：浏览器会自动判断是否预解析，当网速较慢时，浏览器可以决定不解析。<br/>
> 可大量使用

### 5. prerender 预渲染
\`\`\`html
<link rel="prerender" href="https://isluo.com/index.html" />
\`\`\`
> 浏览器会加载指定页面的内容并在内存中渲染，但是不会呈现出来<br/>
> 当用户随后真正访问这个页面的URL时，会瞬间呈现出来。<br/>
> 当你大概率确信用户会访问到这个页面时，可以使用prerender来加速。<br/>
> **非强制性**：浏览器会自动判断是否预渲染，当网速较慢时，浏览器可以决定不渲染。<br/>
> 不要大量使用，一般只预渲染一个页面就够了，会占用内存和CPU资源。<br/>
> 兼容性不好，只有Chrome支持

### 总结
\`<link rek="preload" href="..." as="..." />\` 适用于几秒钟之内就会用到的资源<br/>
\`<link rek="prefetch" href="..." as="..." />\` 适用于下一个页面会用到的资源<br/>
\`<link rek="preconnect" href="..." as="..." />\` 适用于知道根URL，但还不知道具体要从该URL加载哪些资源时<br/>
\`<link rek="dns-prefetch" href="..." as="..." />\` 同上，兼容旧浏览器<br/>
\`<link rek="prerender" href="..." as="..." />\` 适用于你确定用户稍后会访问该页面
`;
})();
