(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.alipay = `
# 关于支付宝小程序开发的一些重要信息
记录了一些知识点，下面关于\`navigateToAlipayPage\`跳转的知识转载于支付宝社区<br/>
原文：<a href="https://forum.alipay.com/mini-app/post/17401023" target="_blank" rel="nofollow">https://forum.alipay.com/mini-app/post/17401023</a>


## 使用navigateToAlipayPage跳转任意链接

### 跳转阿里平台链接
我们以芝麻信用界面相关链接进行示例，注意有些页面无权在小程序内进行跳转

\`\`\`js
// 跳芝麻信用
my.ap.navigateToAlipayPage({
path: 'alipays://platformapi/startapp?appId=68687187'
});
// -> 会提示无权跳转
// 加上scheme
my.ap.navigateToAlipayPage({
path: 'https://render.alipay.com/p/s/i/?scheme=alipays://platformapi/startapp?appId=68687187'
});
// 成功跳转
\`\`\`

### 跳转第三方小程序&携带参数注意点
我们在和三方小程序换链的时候是否经常遇到对方提供的小程序链接内会传递全局的 \`query=\`<br/>
如果此时对方的小程序不支持从 \`extraData\` 中拿参数，那么我们使用 \`my.navigateToMiniProgram\` 跳转的话，对方永远也拿不到这些参数，<br/>
这时候只能将链接转换成 \`scheme\` 使用 \`navigateToAlipayPage\` 跳转，<br/>
这样就能正常传递全局 \`query\` 参数<br/>

\`\`\`js
// 假设链接 alipays://platformapi/startapp?appId=xxx&page=/pages/index/index&query=type=test
// 转化成能拿到query参数的scheme链接
my.ap.navigateToAlipayPage({
path: 'https://render.alipay.com/p/s/i/?scheme=alipays://platformapi/startapp?appId=xxxx%2526page=/pages/index/index%2526query=type%3dtest'
});
\`\`\`
> 特别注意: **这里要将 & 符号转义两次才行 (%2526)**

### 小程序内跳转任意H5页面
以支付宝开放平台链接为例小程序内这样跳转
\`\`\`js
my.ap.navigateToAlipayPage({
path: "https://render.alipay.com/p/s/i/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%2526url%3Dhttps://open.alipay.com"
});
\`\`\`
注意事项：<br/>
- 并不是所有的支付宝页面都支持使用 scheme 链接跳转，但是大部分是可以的<br/>
- 生活号页面内的页面都是可以跳转的<br/>
- 运营需要用来发的短信的链接，建议使用 scheme 链接 或者 自己开发一个H5页面中转<br/>
- 链接参数有双层时，第二层的 & 符号必须转义两次<br/>
- navigateToAlipayPage 理论上可以跳转任意页面，建议要跳转时自己先试试，再提供出去<br/>

## 其他注意知识点

1. 写在外面的模块变量，可能不会及时被重置；因为当关闭小程序时，小程序的进程仍然在运行，那些变量的值一直存在，当再次进入时，那些变量没有重置为初始值。<br/>

2. 关闭支付宝小程序
\`\`\`js
my.call("exitApp",  {
  closeActionType: 'exitSelf'
},  (results) => {
  console.log("exitSelf result:" + result.status);
});
\`\`\`
`;
})();
