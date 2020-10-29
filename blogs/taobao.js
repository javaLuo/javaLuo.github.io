(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.taobao = `
## 背景简介
最近要做淘宝应用了，要清楚的是淘宝和支付宝是两家完全不同的公司。淘宝小程序并不是支付宝小程序，淘宝甚至不在各跨端框架支持范围内，比如uni-app就不支持。<br/>
以下总结了在开发中碰到的坑。

## 开始吧

1. 官方名称叫“淘宝商家应用”
> 在百度搜淘宝小程序连个官网入口都找不到，也搜不出什么文档链接，必须搜“淘宝商家应用”才出来官网。<br/>
> 但它们文档里又处处都称自己“淘宝小程序”，它们的客服，阿里开发人员都承认这就是“淘宝小程序”。当然这不是多大的问题，只是我刚开始开发的时候不懂，网上找文档都找不到，真尼玛醉了。

2. 官方文档抄的支付宝，有多处错误
> 抄过来删删改改，还尼玛是错的，官方文档都是错的，真是服了。<br/>
> 比如\`my.authorize\`获取用户授权接口，文档上说返回什么\`userCode\`，但返回的其实是\`accessToken\`, 给它们提了意见后，最近我去看奇迹般的更新了，终于改好了。<br/>
> 还有一些其他错误，明显看出来抄的支付宝，有的只有支付宝小程序支持的功能也抄过来。所以不要相信官方文档，一定要自己试。

3. 开发者工具与真机效果不一样
> 一定要下载最新版开发者工具，并且使用真机测试<br/>
> 比如\`my.showLoading()\`弹出原生加载框，在开发者工具中是不能点击穿透的，但在真机上遮罩层形同虚设，仍然可以点击遮罩层下面的按钮，淦。所以老老实实给按钮加防抖吧。<br/>
> 旧版开发者工具API调用返回值与真机不一样，新版的开发者工具修复了很多错误。
   
4. 不支持分包
> fuck

5. 小程序跳转的坑，需要权限
> 要想调用\`my.navigateToMiniProgram()\`跳转其他小程序，请先检查自己是否有权限。<br/>
> ![小程序跳转](/img/taobao/t1.png)
> 需要申请“商家应用-小程序跳转”权限包，不然跳转时会报错：“无权调用”。我就日了狗了，我是开发者，我无权调用？<br/>
> 但是你会发现，根本TM就找不到申请的地方。因为goddamned这需要内部申请，它们有个内部后台：<br/>
> ![权限申请1](/img/taobao/ali1.png)<br/>
> ![权限申请2](/img/taobao/ali2.png)<br/>
> 你要么提工单，要么如果你们有阿里合作的话，找它们的技术人员帮忙开通。

6. web-view 也尼玛需要权限
> 先总结：web-view只能跳淘宝APP内部的页面，其他外部域名是跳不了的。<br/>
> 如果想在小程序里展示外部H5页面，不可能！<br/>
> 你去搜它们的文档，会找到一篇帖子，说要提工单申请白名单，我照做。<br/>
> 客服让我加他钉钉，我加了，然后跟我说他去找他们内部人员推进这个事<br/>
> 3天过去了，杳无音讯，尼玛当我再次找他的时候，他跟我说现在已经不支持添加web-view白名单了，告诉我加另外一个内部技术人员的钉钉号，把我的诉求告诉技术人员。（我TM等了你3天，不行就不行，你倒是回我一下啊，操，我不问你TM就永远不回复了，阿里的客服这么敷衍的吗？）。<br/>
> 然后我找到了那个内部技术人员，技术人员只简单的回答了一句“不行”。<br/>
> 猜猜我们最后怎么解决的，产品经理说去淘宝旺铺创建一个新的页面，把要展示的H5内容写在这个页面里，那么这个新的页面就属于淘宝内部页面，直接跳这个淘宝内部页面是可以的。<br/>
 
7. 云函数请求外部接口，又尼玛需要权限
> 淘宝小程序不能像其他小程序那样直接请求外部接口<br/>
> 只能通过淘宝平台的云函数，在云函数中调用\`cloud.httpApi.invoke\`请求外部服务器的接口<br/>
> 需要登录淘宝控制台去配置域名白名单，众所周知微信小程序只要添加一个白名单就搞定了<br/>
> 但淘宝不是，它不仅要审核域名，还要审核你传的每一个参数！我直接裂开了呀！我传什么参数你也要管？<br/>
> ![域名配置](/img/taobao/t2.png)<br/>
> 我只是一个小前端，我怎么知道要传什么参数，我尼玛还得去找后端商量，后端说他接口都还没写出来，他也不确定要定义哪些参数。<br/>
> 日TM等后端把接口写好，黄花菜都凉了。它还要求填写每个参数是干嘛用的，还要写申请原因。还说POST比GET审核更严格。我上厕所用左手擦屁股还是用右手擦淘宝是不是也要管啊！<br/>
> 我第1次审核时，过了整整两个星期才审核通过。按照这速度，项目不得拖半年？以后后端要是改了或加了什么参数，还得再申请。我真尼玛屎都被惊出来了。<br/>
> (后话：还好后面的申请奇迹般的变快了，隔天就通过了。 另外放到header中的参数淘宝不管，一些认证信息可以放header里传给后端)

8. 关于\`cloud\`对象
   > 没有文档！<br/>
   > 只能在淘宝开放平台云函数文档里看到一些零碎的\`cloud\`的用法，哎。<br/>
   > 不过好在我们需求不复杂，够用了。<br/>

9.  客服基本解决不了任何问题
  > 在开发过程中，我提过好些工单问他们问题，可以感觉到那些客服根本球都不懂，只会敷衍一下，甩给你一个文档。<br/>
  > 如果那该死的文档能解决，我还提个屁的工单？醉了。<br/>
  > 然后我提工单频率有点高，问题有点类似，客服回了一句：请不要重复提工单。<br/>
  > 我曰TM直接气疯了呀，你问题没帮我解决我不就得重新提工单吗？淦！<br/>

10.  \`my.showToast\`和\`my.showLoading\`不能同时出现
   > 这个可以理解，只是要注意一下，一个出现时会挤掉另一个，同一时间只能存在一个。

11. 关于从浏览器拉起淘宝APP并打开小程序
> 这是个重点，听我一一说来<br/>
> 淘宝的所有页面，都对应一个URL链接，用手机自带浏览器就可以拉起淘宝APP或天猫APP<br/>
> 没有文档！问客服等于没问。<br/>
> 在你上传部署小程序的时候，淘宝平台会提供一个体验二维码，把这个二维码解析出来就可以得到：
> \`https://m.duanqu.com?_ariver_appid=30000000xxxxxxx&nbsv=0.0.1&nbsource=debug&nbsn=TRIAL&_mp_code=tb\`<br/>
> 手机浏览器访问这个地址，就可以拉起淘宝小程序。<br/>
> 这个地址还会再自动解析为\`https://huodong.m.taobao.com/act/snipcode.html?_ariver_appid=30000000xxxxxxx&nbsv=0.0.1&nbsource=debug&nbsn=TRIAL&_mp_code=tb\`<br/>
> 其中大概可以加这些参数：

  |字段名|值|解释|
  |----|----|----|
  |\_ariver\_appid|300xxxx...|小程序的唯一ID|
  |nbsv|0.0.1|要拉起的小程序版本号，填多少打开的版本就是多少|
  |nbsource|debug|表示使用开发模式，必须填这个，不然会直接拉起线上环境的小程序|
  |nbsn|TRIAL|表示使用测试环境的云函数，必须填这个，不然会请求线上环境的云函数|
  |\_mp\_code|tb|不知道干嘛用的，不填貌似也没影响|
  |transition|present|不知道干嘛用的，应该是效果相关吧，没看出什么作用|
  |\_ariver\_ua|TB或TM|默认TB，填TB拉起淘宝APP，填TM拉起天猫APP|
  |query| a=123&b=345|传给小程序的参数，会在被拉起的小程序的\`app.js\`的\`onLaunch\`中获取到这些参数|
  |page|pages%2Findex%2Findex%3Fc%3D678%26d%3D91011|拉起小程序的特定页面，可以带参数，会在被拉起的小程序对应页面的\`onLoad\`中获取到这些参数，请注意使用\`encodeURIComponent\`处理一下

> 对于这个链接，我曾看到过还有很多特殊的参数。当时没记下来，找不到了，估计还有很多厉害的功能。
> 猜猜我是怎么知道这些参数的。我到淘宝APP找了一个别人做好的小程序，分享出来淘口令，又把淘口令拿到网上有那种解析淘口令的网站，解析出来，一个一个试它里面的参数，才发现里面的秘密。<br/>
> 一开始我问阿里的技术员能不能拉起天猫APP，他说不能！我淦，明明就可以！哎，我真是尼玛无语了。

12. 关于\`env\`字段
  > 在小程序客户端使用云函数时，需要在\`app.js\`中加载云函数的sdk:
  \`\`\`js
  import cloud from '@tbmp/mp-cloud-sdk';
  cloud.init({
    env: 'test'
  }); 
  \`\`\`
  > 关于这个\`env\`参数，官方文档的解释是这样的：<br/>
![小程序跳转](/img/taobao/t3.png)<br/>
> 先说结论： 这个参数完全不用担心，测试和提交审核的时候，都用\`test\`就行了，表示请求测试环境的云函数。真正上线后，这个参数会强制自动变成\`online\`。<br/>
> 这几句话我很迷，一开始说如果上线必须修改为"online", 后面又说线上环境将自动使用"online"。 那我到底需不需要自己改成\`online\`？绕来绕去，感觉你TM语文是体育老师教的吧。一个功能用了3句话标红来说明，结果尼玛还说不清楚。<br/>
> 另外，env还可以填\`pre\`,会请求预发环境的云函数

13.  提交淘宝审核
> 日TM这把我整得好憔悴啊，要求上传测试图，写明更新功能点，又要符合淘宝设计规范，还要阅读淘宝协议。<br/>
> 审核的时候给我显示出个链接"淘宝设计规范" 跟我说要符合它们的设计规范，什么边距要多少px，图片要多大，我尼玛你早点说啊，都要上线了！尼玛又不是我设计的，我这会儿还要去找设计师改UI？（还好通过审核了）<br/>
> 审核的注意事项，这是阿里内部人员给的回复原话：<br/>
> ![提交审核](/img/taobao/t4.png)<br/>
> 其实根本不用报备，你需要这样做：<br/>
> 一本正经的写出你更新了哪些功能点；一本正经的用语雀写一篇自测报告，为什么要用语雀，因为语雀是它们阿里旗下的，你用腾讯文档可能审核员会不高兴。你问我自测报告怎么写？百度抄啊，一本正经的瞎几把有模有样的多写点，什么项目背景，什么测试功能点，然后测试结果全部写：PASS。<br/>
> ok, 把文档地址分享出来填写在审核的信息里，提交。
> 结果一会儿就审核通过了，我怀疑审核员压根就没仔细看，走个过场而已，我们国家有些人不就很喜欢搞这些没卵用的形式主义么，各种流程，各种审批，其实根本没有人care.

14.  云函数发布上线
> 如果你的项目恰好在双十一期间发布（大概前后半个月吧），哦吼，恭喜你，封网了，云函数不让发线上环境！<br/>
> 淘宝真巨恶心，双十一期间为了保证他们系统的稳定性，不让其他小程序发版。我这项目就是为了双十一开发的，你不让我发版？<br/>
> 必须到开发者工具去紧急部署申请：<br/>
![提交审核](/img/taobao/t5.png)<br/>
> 坑才刚刚开始，这个申请，技术人员说半个小时之内会完成操作，感情阿里你们不是要修福报吗，怎么才7点过就下班了，都没人审，我等了一个通宵我靠。<br/>
> 迷迷糊糊睡着了，第二天起来一看，还尼玛在“审核中”。<br/>
> 有同学会问，你直接去睡觉，第二天上班再操作不就好了。问题在于，审核通过后**只有1个小时的有效期!**，这尼玛就很难受了，更关键在于根本不知道什么时候会审核通过，完全没有通知，好歹给我发个邮件或发个短信啊，什么也没有。<br/>
> 图中显示“审核已过期”，是他们更新过了，之前过没过期根本不显示，只会显示“审核成功”。都过期了也显示“审核成功”。我向阿里技术人员反映，估计他们才加上的。哎哟，脑壳痛。

15.  小程序名称
> 在开发的时候，显示小程序的LOGO、名称、简介，上线后不允许修改，其实是可以修改的，有图为证：
![提交审核](/img/taobao/t6.png)

## 尾声
以前一直以为微信开发就像一坨屎，接触了淘宝之后发现这特么是在粪坑里打滚。

`;
})();
