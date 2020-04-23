(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.facebook = `
> 不管你是使用普通的网页连接分享，还是使用JavaScript SDK。 下面的方法都有效。

###1. 直接在\`<head>\`标签中设置以下meta
\`\`\`html
<meta property="fb:app_id"        content="150192****06562" />
<meta property="og:url"           content="https://isluo.com/" />
<meta property="og:type"          content="website" />
<meta property="og:title"         content="标题，会出现在分享的标题部分" />
<meta property="og:description"   content="简介，会出现在分享的简介部分" />
<meta property="og:image"         content="https://isluo.com/mywork/logo.jpg" />

* fb: app_id      这个网站在facebook App中注册后得到的ID号，不写也没关系
* og: url         需要被分享的网页连接
* og: type        网页就写 website
* og: title       标题，生成的facebook分享对话框中的标题
* og: description 简介，生成的facebook分享对话框中的简介，不要太多
* og: image       图片，分享对话框中左侧的图片，最好是正方形，大小至少在90*90以上
\`\`\`

###2. 进入facebook调试工具
facebook share 调试器：<br/>
<a href="https://developers.facebook.com/tools/debug/sharing/" target="_blank">https://developers.facebook.com/tools/debug/sharing/</a>

这个用来抓取你网页的最新信息

默认的，你的网站信息会存储在facebook缓存30天<br/>
所以如果你的网站有更改，你需要手动重新抓取<br/>
你也可以直接在浏览器地址栏中输入这个网址测试：<br/>
https://www.facebook.com/sharer.php?u=isluo.com(这里改成你自己的网站域名)

  `;
})();
