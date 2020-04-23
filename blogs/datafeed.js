(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.datafeed = `
### UDF

> udf 实际上就是官方实现的 JS API，可以在它的基础上修改

### 目录结构

![tradingview-datafeed](https://isluo.com/imgs/tradingview-datafeed.png)

> 以上是官方提供的 UDF，是一个完整的项目，只有 src 中是源代码
> npm install
> npm run compile // 把 TS 编译为 JS，在 lib 文件夹中
> npm run bundle-js // 打包压缩 lib 中的 JS，在 dist 文件夹中
> npm run build // 先后执行上面两条命令

> 可以根据自己的需求修改 TS 文件，只有这些是源代码
> 除此之外，在 charting_library/static/datefeed-api.d.ts 中，定义了 UDF 里用到的各种数据的数据结构

| 文件                            | 说明                                                                                                        |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| data-pulse-provider.ts          | 重要 封装里请求数据的逻辑，里面用的 setInterval 轮询来不停的调用 getBars 获取新数据，还有完整的监听者的操作 |
| helpers.ts                      | 封装里提示信息等， 如果开启 debug 模式才会用到                                                              |
| history-provider.ts             | 重要 只封装了一个方法，就是 getBars 的具体实现                                                              |
| iquotes-provider.ts             | 交易终端相关，略                                                                                            |
| polyfills.es6                   | 垫片库，只引入了 promise 和 fetch 的垫片                                                                    |
| quotes-provider.ts              | 交易终端相关，略                                                                                            |
| quotes-pulse-provider.ts        | 交易终端相关，略                                                                                            |
| requester.ts                    | 重要 只封装了一个方法，就是真正的发起异步请求的通用方法                                                     |
| symbols-storage.ts              | 重要 封装了交易对信息的相关函数，比如解析交易对详情什么的                                                   |
| udf-compatible-datafeed-base.ts | 重要 封装了所有的 JS APi，上面那些 ts 也是引入到此 ts 中来使用的                                            |
| udf-compatible-datafeed.ts      | 重要 继承了 udf-compatible-datafeed-base.ts,暴露了实例化 UDF 的方法                                         |

### 初始化

> 编译后会在 dist 文件夹下生成 bundle.js 和 polyfills.js
> 需要把这两个文件引入页面中才能使用官方的 UDF
> 但如果本身项目用了 webpack 就不需要了，如果项目配置了 ts 的解析器直接引入 datafeed 的 ts 源文件打包也可以，
> 或者将 ts 文件编译为 js，在项目中直接使用这些 js 即可

\`\`\`
  const udf = require("../../datafeeds/udf/lib/udf-compatible-datafeed");
/**
 * 生成udf实例
 @param url 基础请求地址，udf中的所有请求都会基于此地址
**/
  const datafeed = new udf.UDFCompatibleDatafeed("https://xxx.com");
\`\`\`

### 后端需要实现这些接口

> udf 会自动请求一些接口，就是 JS API 里面那些。在 udf 里面更直接
> 后端需要直接实现以下接口，并返回图表所需的数据

| 接口 URL         | 请求方式 | 参数                                                                 | 说明                                                                                                                                                                                                                                               |
| ---------------- | -------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /config          | GET      |                                                                      | 获取配置信息，同 JS API onReady,但后端还需要返回额外的两个字段：supports_search: true/false 后端是否支持图表中的搜索功能，supports_group_request: true/false 后端是否支持一次性返回所有交易对详情信息。这两个字段只能仅有一个为 true，或都为 false |
| /symbol_info     | GET      | ?group=交易所的代码                                                  | 一次性请求该交易所中所有的交易对信息并缓存，如果 supports_group_request: true，后端就应该实现此接口                                                                                                                                                |
| /symbols         | GET      | ?symbols=USDBTC                                                      | 根据交易对名称获取该交易对的详情，如果 supports_search: true，后端就应该实现此接口                                                                                                                                                                 | /search | GET | ?query=用户在搜索框输入的文本&type=用户选择的类型&exchange=用户选择的交易所&limit=最多获取多少个交易对(整数) | 用户搜索时会调用此接口，如果 supports_search: true，后端需实现 |
| /history         | GET      | ?symbol=交易对名称&from=开始时间戳&to=结束时间戳&resolution=时间间隔 | 同 getBars，但字段有些不一样，需要返回{s:'ok',errmsg:'错误信息',t:[时间数组],c:[收盘价数组],o:[开盘价数组],h:[最高价数组],l:[最低价数组],v:[交易量数组],nextTime:下一次请求的时间}                                                                 |
| /marks           | GET      | ?symbol=&form=&to=&resolution=                                       | 请求用户做的标记，同 JS API，但有些字段不一样                                                                                                                                                                                                      |
| /timescale_marks | GET      | ?symbol=&form=&to=&resolution=                                       | 请求用户做的时间轴上的标记，同 JS API，但有些字段不一样                                                                                                                                                                                            |
| /time            | GET      |                                                                      | 获取服务器时间，同 JS API                                                                                                                                                                                                                          |
| /quotes          | GET      | ?symbols=                                                            | 交易终端相关，略                                                                                                                                                                                                                                   |

`;
})();
