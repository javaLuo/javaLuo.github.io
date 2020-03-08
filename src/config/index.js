export const masterName = "javaLuo"; // 作者在GitHub的用户名
export const issueName = "javaimluo"; // 存放所有评论留言的项目名称
export const client_id = "f598c816b3b65783625b"; // github申请的client_id，用于gitment
export const client_secret = "702577a65885617a20f9b39e07de260f7987aef7"; // github申请的client_secret，用于gitment
// export const gitBaseUrl = "https://api.github.com/graphql"; // github API基础访问路径
// export const gitToken = "dc1f508d1640bc3cfdaf3b6219225c71505e97e6"; // github v4 访问所需令牌
// export const accessToken = "96b11f4c40e41a1a3c0f57c17157abf02e168e8e"; // 用于github actions的token
// 1笔记，2作品，3日志
export const blogs = [
  {
    id: "gd",
    name: "Ghost Blade 鬼刀",
    info: "Ghost Blade 鬼刀 主题宣传站。素材均来自wlop大佬",
    type: 2,
    date: "2018/03/10",
    tags: ["作品", "canvas"]
  },
  {
    id: "abouttime",
    name: "这一次，彻底搞清楚Date对象在Chrome和Safari中的坑",
    info: "什么GMT、UTC、夏令时，受够了",
    type: 1,
    date: "2019/02/22",
    tags: ["js"]
  },
  {
    id: "along",
    name: "独行者",
    info: "在C世界的边缘地带，只有一扇窗户，其余三面被书籍围住",
    type: 3,
    date: "2012/10/17",
    tags: ["日志"]
  },
  {
    id: "algorithm",
    name: "基础算法",
    info: "基础算法记录 上学时写得都很溜，现在全忘了",
    type: 1,
    date: "2018/06/02",
    tags: ["js"]
  },
  {
    id: "b_night_snow",
    name: "夜雪",
    info: "青春岁月留下的痕迹",
    type: 3,
    date: "2008/04/04",
    tags: ["日志", "故事"]
  },
  {
    id: "brcity",
    name: "边城",
    info:
      "他正趴在冷冰冰的生满锈迹的钢板上，身子被雨水淋了个遍，寒意席卷了每一寸皮肤…",
    type: 3,
    date: "2011/09/19",
    tags: ["日志", "故事"]
  },
  {
    id: "datafeed",
    name: "TradingView DataFeed笔记",
    info: "图表学习记录",
    type: 1,
    date: "2018/09/27",
    tags: ["js"]
  },
  {
    id: "datediff",
    name: "真正准确的“两个日期相差多少天”函数",
    info: "第一天最后1秒到第二天第1秒，也是过了一天!",
    type: 1,
    date: "2018/04/02",
    tags: ["js"]
  },
  {
    id: "dll",
    name: "webpack.DllPlugin和webpack.DllReferencePlugin静态资源预编译插件",
    info:
      "现在因为有HMR局部热更新，所以dllPlugin这两个插件用得少了，不过还是记录一下配置方法，可能以后会再次使用",
    type: 1,
    date: "2018/04/02",
    tags: ["js"]
  },
  {
    id: "download",
    name: "纯前端弹出下载框的方式下载img或pdf等资源",
    info: "a标签download属性，弹出下载框的方式下载内容，而不是让浏览器解析",
    type: 1,
    date: "2019/05/07",
    tags: ["js"]
  },
  {
    id: "earth",
    name: "Earth 3D TNC - 大自然保护协会",
    info: "学习Three.js时做的东西，又很长时间没有去学习了",
    pic: "https://isluo.com/files/work/earth.jpg",
    type: 2,
    date: "2018/03/14",
    tags: ["js", "three.js"]
  },
  {
    id: "facebook",
    name: "FaceBook Share 功能 JS SDK 自定义图片和文字的方法",
    info: "acebook的分享设置及注意的地方",
    type: 1,
    date: "2018/07/02",
    tags: ["js"]
  },
  {
    id: "featuresets",
    name: "TradingView Featuresets部分官方文档补全",
    info: "图表笔记",
    type: 1,
    date: "2018/09/29",
    tags: ["js"]
  },
  {
    id: "flex",
    name: "Flex 全属性笔记",
    info: "flex各属性",
    type: 1,
    date: "2018/03/28",
    tags: ["css"]
  },
  {
    id: "flip",
    name: "FLIP 反转动画原理及实现",
    info: "First-Last-Invert-Play动画，太骚了，大佬的气息如泉涌般袭来",
    type: 1,
    date: "2019/02/14",
    tags: ["js", "css"]
  },
  {
    id: "glsl",
    name: "GLSL 基础",
    info:
      "需要一颗虔诚的心来专研这一切，真希望自己能静下心来，有连续的时间来学习这些东西",
    type: 1,
    date: "2019/11/22",
    tags: ["js", "webgl"]
  },
  {
    id: "graphql",
    name: "GraphQL Express 基础使用",
    info: "最近学习了一下GraphQL，我觉得这是一种更合理的前后端交互方式",
    type: 1,
    date: "2018/12/08",
    tags: ["js"]
  },
  {
    id: "grid",
    name: "Grid布局 所有属性笔记",
    info: "grid布局相关属性笔记，方便查阅",
    type: 1,
    date: "2018/06/07",
    tags: ["css"]
  },
  {
    id: "hooks",
    name: "React16.8所有内置Hooks功能一览",
    info: "笔记，需要在实际应用中才能掌握",
    type: 1,
    date: "2019/02/10",
    tags: ["js", "React"]
  },
  {
    id: "hospital",
    name: "第一次去医院",
    info:
      "以前从来没自己去过医院，都不知道流程，直到自己身体出现问题，痛不欲生",
    type: 3,
    date: "2019/12/19",
    tags: ["日志"]
  },
  {
    id: "isluo",
    name: "个人网站 主站",
    info: "多年以前做的个人网站，那时还用着jquery",
    pic: "https://isluo.com/imgs/blog-isluo.jpg",
    type: 2,
    date: "2018/04/27",
    tags: ["作品"]
  },
  {
    id: "markdown",
    name: "MarkDown 语法教程",
    info: "从别处搬运的，记录于此，方便自己查阅",
    type: 1,
    date: "2018/04/27",
    tags: ["js", "markdown"]
  },
  {
    id: "offset",
    name: "各种取高度位置关系及相关API",
    info: "常用的DOM对象各种高度和位置设置的API",
    type: 1,
    date: "2018/07/17",
    tags: ["js"]
  },
  {
    id: "orbitcontrols",
    name: "OrbitControls.js 镜头控制器所有属性",
    info: "常用的DOM对象各种高度和位置设置的API",
    type: 1,
    date: "2018/09/24",
    tags: ["js", "three.js"]
  },
  {
    id: "paomo",
    name: "泡沫 - 邓紫棋 2014早期作品",
    info: "很久以前做的了",
    pic: "https://isluo.com/files/work/pm1.jpg",
    type: 2,
    date: "2018/03/26",
    tags: ["作品"]
  },
  {
    id: "picture",
    name: "HTML5 响应式图片picture标签使用方法",
    info:
      "sizes中是基础规格值，与dpi相乘得到最终规格值，拿着最终规格值去srcset里找符合的图片资源加载",
    type: 1,
    date: "2019/08/19",
    tags: ["html"]
  },
  {
    id: "pit",
    name: "我所遇到的各种匪夷所思的坑们",
    info: "各种匪夷所思的坑，持续记录",
    type: 1,
    date: "2020/01/10",
    tags: ["js", "html"]
  },
  {
    id: "pre",
    name: "所有预加载标签一览",
    info: "目前有5个：preload、prefetch、preconnect、dns-prefetch、prerender",
    type: 1,
    date: "2019/10/11",
    tags: ["html"]
  },
  {
    id: "qi",
    name: "冷门的奇淫技巧",
    info: "补充奇怪的知识",
    type: 1,
    date: "2018/07/11",
    tags: ["html", "css", "js"]
  },
  {
    id: "reg",
    name: "Regexp：正向断言和反向断言",
    info: "易混淆的，易忘的，常用的正则知识",
    type: 1,
    date: "2019/02/20",
    tags: ["js"]
  },
  {
    id: "rose",
    name: "仿樱花漫天飞舞效果 3D",
    info: "一个使用Three.js制作的网站，Three.js练手。曾见识过大佬的DEMO",
    pic: "https://isluo.com/files/work/rose1.jpg",
    type: 2,
    date: "2018/03/26",
    tags: ["three.js"]
  },
  {
    id: "sailor",
    name: "水手",
    info: "他曾时常梦见船长的女儿和那晚的风暴，但现在他只想像个凡人一样",
    type: 3,
    date: "2017/10/16",
    tags: ["日志", "故事"]
  },
  {
    id: "seven_years",
    name: "七年后",
    info: "岁月留下的痕迹,愚蠢的自己",
    pic: "https://isluo.com/imgs/blog-seven-years.png",
    type: 3,
    date: "2017/10/22",
    tags: ["日志"]
  },
  {
    id: "shadow",
    name: "Shadow DOM 影中世界",
    info: "潜伏在HTML表面之下的代码",
    type: 1,
    date: "2019/03/25",
    tags: ["js", "html"]
  },
  {
    id: "smooth1",
    name: "IntersectionObserverAPI 实现的列表滑动效果",
    info: "以前用jquery写过，现在这种方式我认为更好一点。CSS变量的话貌似做不到",
    type: 1,
    date: "2018/08/01",
    tags: ["js"]
  },
  {
    id: "snow_mountain",
    name: "雪山",
    info: "这具身体不是他，他只是在控制着这骨骼和血肉筑成的躯干。",
    type: 3,
    date: "2019/04/15",
    tags: ["日志", "故事"]
  },
  {
    id: "svg",
    name: "SVG 学习笔记",
    info: "啊，不用的话就会忘掉",
    type: 1,
    date: "2018/05/06",
    tags: ["js", "svg"]
  },
  {
    id: "three_1",
    name: "Three.js 泛光外发光例子",
    info: "Three.js官方示例学习笔记",
    type: 1,
    date: "2018/11/23",
    tags: ["js", "three.js"]
  },
  {
    id: "three_fire",
    name: "Three.js 火焰特效",
    info: "Three.js官方示例学习笔记",
    type: 1,
    date: "2019/01/17",
    tags: ["js", "three.js"]
  },
  {
    id: "three_fire",
    name: "TradingView笔记 配置和JS API",
    info: "主要说明一下Tradingview不好理解的地方",
    type: 1,
    date: "2018/09/16",
    tags: ["js"]
  },
  {
    id: "url",
    name: "有用的网址",
    info: "可能以后还会用到的网址",
    type: 1,
    date: "2018/04/12",
    tags: ["html"]
  },
  {
    id: "violet",
    name: "紫罗兰永恒花园",
    pic: "https://isluo.com/imgs/blog-violet1.jpg",
    info:
      "近期在看的动漫，闲暇时间做了这个网站，轻微剧透，为了高清，加载速度可能有点慢",
    type: 2,
    date: "2018/03/27",
    tags: ["作品"]
  },
  {
    id: "wasm",
    name: "装逼课程：WebAssembly(wasm)用webpack加载的正确姿势",
    info:
      "WebAssembly本身的API并不难，需要关心的是wasm的限制和在实际应用中的使用",
    type: 1,
    date: "2019/01/11",
    tags: ["js"]
  },
  {
    id: "water",
    name: "三体水滴计划 3D",
    info: "消灭人类暴政，世界属于三体",
    pic:
      "https://raw.githubusercontent.com/javaLuo/water/master/libs/imgs/book.jpg",
    type: 1,
    date: "2018/06/23",
    tags: ["作品", "three.js"]
  },
  {
    id: "words",
    name: "感受过的句子",
    info: "心中激起涟漪和触动的句子",
    type: 3,
    date: "2018/06/16",
    tags: ["文学"]
  },
  {
    id: "wxstudy",
    name: "周末撸了一个小程序",
    info: "关于专升本复习的小程序，真实复习班资料",
    type: 2,
    date: "2018/07/09",
    tags: ["js", "小程序"]
  },
  {
    id: "actions",
    name: "GitHub Actions自动部署Vue-cli项目到GitHub pages",
    info: "自动部署vue项目到github博客页面教程",
    type: 1,
    date: "2020/02/25",
    tags: ["js"]
  }
];

export const share = [
  {
    title: "DAN DAN 心魅かれてく",
    url:
      "//player.bilibili.com/player.html?aid=20028312&cid=32674930&page=1&high_quality=1"
  },
  {
    title: "【微小微】Apink - My My",
    url:
      "//player.bilibili.com/player.html?aid=2573814&cid=4020549&page=1&high_quality=1"
  }
];
