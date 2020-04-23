(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.tradingview = `
## 一、文件代码

![tradingview](https://isluo.com/imgs/tradingview/1.jpg)

- 只有 charting_library.min.js 是本体
- static 文件夹包含 tradingview 样式等文件
- datafeeds 是官方实现的 JS API 配置，可以用，也可以自己写一套

## 二、初始化

- 引入本体：

\`\`\`
<script type="text/javascript" src="charting_library/charting_library.min.js"></script>
\`\`\`

- 然后写代码：

\`\`\`
<div id="tv_chart_container"><div>

<script>
    TradingView.onready(function() {
    var widget = window.tvWidget = new TradingView.widget({
        symbol: 'BTCUSD', // 默认的交易对名称
        interval: '5', // 默认的时间间隔 即一个K柱代表的是多少时间内的数据
        timeframe: '6M', // 默认的时间范围 整个x轴的范围
        container_id: "tv_chart_container", // DOM容器元素的ID
        datafeed: new Datafeeds.UDFCompatibleDatafeed, // JS API配置
        timezone: 'Asia/Dubai', // 时区
        debug: true, // 调试模式，会再控制台输出各种信息
        library_path: '/charting_library/', // 图表源文件的相对路径，图表会去这个路径加载样式
        width: 500, // 手动限制图表的宽度
        height: 300, // 手动限制图表的高度
        fullscreen: false, // 是否全屏，会超出容器占据所有空间
        autosize: true, // 是否根据容器大小自动调整图表大小
        symbol_search_request_delay: 500, // 用户搜索框输入后延迟多少毫秒调用搜索接口
        auto_save_delay: 2, // 当需要自动保存时，延迟多少秒执行onAutoSaveNeeded接口调用
        toolbar_bg: '#ffffff', // 工具栏的背景色
        study_count_limit: 2, // 多图布局时，最多显示多少个指标
        studies_access:{ // 规定哪些工具需要禁用或启用
            type: 'black' | 'white', // black表示要禁用的工具，white表示只启用指定的工具
            tools:[
                {
                    name: 'Trend Line', // 工具名称
                    grayed: false, // true即使被禁用但也显示，只是不能点击，false完全不可见
                }
            ]
        },
        drawings_access:{ // 与上面studies_access类似，这个是用于设置图表内容区那些图形东西的启用或禁用

        }
        locale: 'en', // 语言包
        saved_data: null, // 已存储的数据，如果设置了这个，图表初始化时会先用这些数据构建图形
        numeric_formatting: { decimal_sign: ',' }, // 所有数字的格式化，目前只能设置千分位的分隔符
        customFormatters:{ // 日期和时间的格式化
            timeFormatter:{ // 时间的格式化
                format: function(date){return ...}; // 普通格式化，需要返回字符串
                formatLocal: function(date){return ...}; // 本地时间格式化，需要返回字符串，这个字符串会被图表用于表示本地时间的默认格式
            },
            dateFormatter:{ // 日期的格式化，同上

            }
        },
        overrides: { // 定制所有的UI表现，颜色啊什么的
            /** 图表各组件的UI定制：
            官方文档：https://github.com/tradingview/charting_library/wiki/Overrides
            中文文档：https://b.aitrade.ga/books/tradingview/book/Overrides.html
            **/
            /** 图表本体canvas里的UI定制：
            官方文档：https://github.com/tradingview/charting_library/wiki/Drawings-Overrides
            中文文档：https://b.aitrade.ga/books/tradingview/book/Drawings-Overrides.html
            **/
        },
        disabled_features:[...], // 需要禁用的功能 所有功能：https://github.com/tradingview/charting_library/wiki/Featuresets
        enabled_features: [...], // 需要启用的功能
        snapshot_url:'https:/xxx.com', // 当用户按快照按钮，图表会自动截图上传到此地址供用户下载
        indicators_file_name: null, // 可以设置一个js文件的路径，该js文件应该包含自定义指标的各种设置，见：https://github.com/tradingview/charting_library/wiki/Creating-Custom-Studies
        preset: "mobile", // 预设，只能指定为“mobile”或留空，会适配一下移动端的样式
        studies_overrides:{
            /**
                覆盖指标的样式
                官方文档：https://github.com/tradingview/charting_library/wiki/Studies-Overrides
            **/
        },
        time_frames:[ // 设置底部可选的时间区间 text时间间隔，resolution横轴范围，description：鼠标移上去的描述,title:如果设置了会覆盖text作为按钮的文字
            { text: '3dd', resolution: '5', description: '3 Days' },
            { text: '3y', resolution: '3y', description: '3 Years', title: '3年' },
            { text: '1000y', resolution: 'W', description: 'All', title: 'All' },
        ],
        charts_storage_url: 'http://saveload.tradingview.com', // 用于在服务端保存用户的数据，如果要使用高级图表保存等功能就需要设置
        client_id: 'https://xxx.com', // 您的网站网址或其他任意内容（用于在服务端保存该用户的数据，如果需要高级图表保存等功能）
        user_id: '', // 如果要用到图表保存等高级功能，需要为每个登录的用户设置唯一的ID
        charts_storage_api_version :'1.1', // 所使用等API版本，目前有1.0和1.1
        load_last_chart: false, // true加载用户保存的最后一张图表
        theme:'Light/Dark', // 主题：亮色或暗色
        custom_css_url: null, // 指定义CSS文件的路径
        loading_screen:{ // 设置加载时的样式
            backgroundColor: '#ffffff', // 背景色
            foregroundColor: '#00ff00', // loading svg图的颜色
        },
        favorites:{ // 设置上方图表收藏夹要展示的内容，参考：https://github.com/tradingview/charting_library/wiki/Featuresets
            intervals:['1', '5', '15', '30', '60', 'D', 'W'], // 会展示在上方的时间间隔切换按钮
            charTypes: ['Area', 'Candles'], // 图表类型切换中会显示的选项
        },
        save_load_adapter:{}, // 保存/加载 图表 高级功能，略
        settings_adapter:{}, // 设置/删除 高级功能 略
    });
</script>
\`\`\`

### 图表初始化时可配置的所有属性（不包含交易终端）

| 属性名                      | 可能的值                                                            | 说明                                                                         |
| --------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| symbol                      | 'BTCUSD'                                                            | 默认的交易对名称                                                             |
| interval                    | '5'                                                                 | 默认的时间间隔 即一个 K 柱代表的是多少时间内的数据                           |
| timeframe                   | '6M'                                                                | 默认的时间范围 整个 x 轴的范围                                               |
| container_id                | "tv_chart_container"                                                | DOM 容器元素的 ID                                                            |
| datafeed                    | new this.datafeed.UDFCompatibleDatafeed('https://api.rightbtc.com') | JS API 配置                                                                  |
| timezone                    | 'Asia/Dubai'                                                        | 时区                                                                         |
| debug                       | false                                                               | 是否开启调试模式，会输出各种调试信息                                         |
| library_path                | '/charting_library/'                                                | 图表源文件的相对路径，图表会去这个路径加载样式                               |
| width                       | 500                                                                 | 手动限制图表的宽度                                                           |
| height                      | 300                                                                 | 手动限制图表的高度                                                           |
| fullscreen                  | false                                                               | 是否全屏，会超出容器占据所有空间                                             |
| autosize                    | true                                                                | 是否根据容器大小自动调整图表大小                                             |
| symbol\_search\_request\_delay | 500                                                                 | 用户搜索框输入后延迟多少毫秒调用搜索接口                                     |
| auto\_save\_delay             | 2                                                                   | 当需要自动保存时，延迟多少秒执行 onAutoSaveNeeded 接口调用                   |
| toolbar_bg                  | '#ffffff'                                                           | 工具栏的背景色                                                               |
| study\_count\_limit           | 2                                                                   | 多图布局时，最多显示多少个指标                                               |
| studies_access              | {type: 'black/white',tools:[{name:'工具名', grayed:true/false}]     | 指定哪些工具需要禁用或只启用指定的工具,black 禁用，white 启用                |
| drawings_access             |                                                                     | 与上面 studies_access 类似，这个是用于设置图表内容区那些图形东西的启用或禁用 |
| locale                      | 'en'                                                                | 语言                                                                         |
| saved_data                  | null                                                                | 已存储的数据，如果设置了这个，图表初始化时会先用这些数据构建图形             |
| numeric_formatting          | { decimal_sign: ',' }                                               | 所有数字的格式化，目前只能设置千分位的分隔符                                 |
| customFormatters            | {}                                                                  | 日期和时间的格式化                                                           |
| overrides                   | {}                                                                  | 定制所有的 UI 表现，颜色啊什么的                                             |
| disabled_features           | [...]                                                               | 需要禁用的功能                                                               |
| enabled_features            | [...]                                                               | 需要启用的功能                                                               |
| snapshot_url                | 'https:/xxx.com'                                                    | 当用户按快照按钮，图表会自动截图上传到此地址供用户下载                       |
| indicators_file_name        | null                                                                | 可以设置一个 js 文件的路径，该 js 文件应该包含自定义指标的各种设置           |
| preset                      | "mobile"                                                            | 预设，只能指定为“mobile”或留空，会适配一下移动端的样式                       |
| studies_overrides           | {}                                                                  | 覆盖指标的样式                                                               |
| time_frames                 | []                                                                  | 设置底部可选的时间区间                                                       |
| charts\_storage_url          | 'http://saveload.tradingview.com'                                   | 用于在服务端保存用户的数据，如果要使用高级图表保存等功能就需要设置           |
| client_id                   | 'https://xxx.com'                                                   | 您的网站网址或其他任意内容（用于在服务端保存该用户的数据，高级图表功能）     |
| charts\_storage\_api\_version  | '1.1'                                                               | 所使用等 API 版本，目前有 1.0 和 1.1                                         |
| load\_last\_chart             | false                                                               | 设为 true 则加载用户保存的最后一张图表                                       |
| theme                       | 'Light/Dark'                                                        | 主题：亮色或暗色                                                             |
| custom_css_url              | null                                                                | 指定义 CSS 文件的路径                                                        |
| loading_screen              | {backgroundColor: '#ffffff', foregroundColor: '#00ff00'}            | 设置加载时的样式                                                             |
| favorites                   | {}                                                                  | 设置上方图表收藏夹要展示的内容                                               |
| save\_load\_adapter           | {}                                                                  | 保存/加载 图表 高级功能，略                                                  |
| settings_adapter            | {}                                                                  | 设置/删除 高级功能 略                                                        |

### JS API

> 初始化时 datafeed 字段可以配置为一个对象，即我们需要手动配置各个 JS API，图表在需要的时候会自动调用这些 API 获取数据
> 也可以配置为官方提供的 UDF，UDF 实际上也是实现了 JS API
> https://github.com/tradingview/charting_library/wiki/JS-Api

\`\`\`
TradingView.onready(function() {
    var widget = window.tvWidget = new TradingView.widget({
        datafeed:{
            /**
            * 获取服务器端的配置信息，服务端应该实现一个接口返回对应的数据
            * \`param callback 回调函数，获取到数据后调用此函数把数据传给图表
            * 后端应该返回这样的数据：
            {
                // 所有的证券交易所代码，用于搜索框将出现的选项，表明后端程序员能提供这些交易所的数据
                exchanges: [{name:'All',value:'',desc:''},{name:'NYSE',value:'NYSE',desc:'纽约交易所'},...],
                // 时间间隔，表明后端能提供这些不同时间间隔的数据，比如按每5分钟频率记录的数据
                supported_resolutions:["1", "5", "15", "30", "60", "D", "W"],
                // 后端是否实现了用户在图表上做标记的接口（高级功能）
                supports_marks: false,
                // 后端是否实现了搜索框搜索数据的接口
                supports_search: true,
                // 后端是否实现了获取服务器时间的接口
                supports_time: true,
                // 后端是否实现了用户在时间轴上做标记的接口
                supports_timescale_marks: false,
                // 类型，后端实现了哪些交易对类型的搜索，将显示在搜索框供用户选择，比如Stock股票，Index指标，forex外汇
                symbols_types:[{name:'Stock',value:'stock'},{name:'Index', value:'index'}]
                // 一个正则表达式，如果要在搜索中对期货进行分组，就需要设置这个
                futures_regex: /^(.+)([12]!|[FGHJKMNQUVXZ]\d{1,2})$/
            }
            **/
            onReady:function(callback){
                $.ajax({
                    url:'...',
                    success: res => callback(res)
                })
            },


            /**
            * 用户进行搜索时，图表会自动调用该函数
            * \`param userInput 用户在搜索框输入的字符串
            * \`param exchange 用户选择的交易所，即onReady中后端返回的那些
            * \`param symbolType 用户选择的交易对类型 即onReady中后端返回的那些
            * \`param onResultReadyCallback 回调函数
            * 后端应该返回这样对数据：
            [
                {
                    "symbol": "USDBTC", // 交易对名字
                    "full_name": "BTCE:USDBTC", // 完整名字
                    "description": "描述",
                    "exchange": "NYSE", // 交易所名字
                    "ticker": "USDBTC", // 一个唯一的名字，跟symbol一样即可
                    "type": "stock" // 类型
                },
                {
                    .....
                }
            ]
            **/
            searchSymbols: function(userInput,exchange,symbolType,onResultReadyCallback){},


            /**
            * 根据交易对名字获取交易对详细信息
            * \`param symbolName 交易对名字
            * \`param onSymbolResolvedCallback 成功后调用此回调
            * \`param onResolveErrorCallback 失败调用此回调
            * 后端应该返回这样的数据：（称为symbolInfo）
                {
                    name: 'USDBTC', // 交易对名字
                    ticker:'USDBTC', // 该交易对的唯一标识符，必须唯一
                    description:'美元对比特币', // 描述
                    type: 'bitcoin', // 类型： stock股票，index指标,forex外汇,futures期货,bitcoin比特币,expression，spread,cfd等
                    session:'24x7', // 开盘收盘时间 https://github.com/tradingview/charting_library/wiki/Trading-Sessions
                    exchange:'纽约交易所', // 交易所名称，将显示在图例中
                    listed_exchange:'纽约交易所', // 上市交易所名称，将显示在图例中
                    timezone:'Asia/Dubai', // 所使用的时区
                    minmov:1, // 分子精度，1就是分子最小为1，用于分数价格
                    pricescale:'100', // 分母精度，100就是百分之一，即2位小数，用于分数价格
                    minmove2:0, // 用于分数价格
                    fractional:true, // 用于分数价格
                    has_intraday: true, // 该交易对是否支持'日'以下的更精确的时间分割，如果false会自动禁用日时分这些按钮
                    has_seconds: true, // 是否支持秒级别的时间分割，false将禁用秒相关的按钮
                    supported_resolutions:['1','5','D'], // 该交易对支持的时间分割
                    intraday_multipliers:[], // 数据源直接可转换的时间分割，即图表可以用当前数据自动生成不同的时间分割的数据，而不是重新从服务端获取，传空数组表示任意时间分割都支持
                    seconds_multipliers:[], // 数据源直接可转换的秒级别的时间分割
                    has_daily:false, // 后端是否提供来以‘日’为单位的时间分割，如果false图表将基于‘分钟’的数据自己构建‘每日’的数据
                    has_weekly_and_monthly: false, // 后端是否提供星期或每月的数据，如果false图表将基于‘每日’的数据自动构建
                    has_empty_bars: false, // 如果在某些时间里没有数据，图表是否应该填补这些空白区域
                    force_session_rebuild: true, // 是否允许图表自动删除数据中不属于交易会话的K柱。
                    has_no_volume: false, // 图表是否应该显示交易的总成交量
                    volume_precision:1, // 成交量数据的精度，1表示1位小数
                    data_status: '', // 交易对的当前状态，会显示在右上角 streaming流数据，endofday收盘，pulsed轮询获取数据,delayed_streaming延迟流数据
                    expired: false, // 此交易对是否是过期的期货
                    expiration_date:'', // 截止日期 期货相关
                    sector: '', // 部门信息 将显示在图表中
                    industry: '', // 行业信息 将显示在图表中
                    currency_code: '', // 货币代码 将显示在图表中

                }
            **/
            resolveSymbol:function(symbolName,onSymbolResolvedCallback,onResolveErrorCallback){},


            /**
            * 获取指定时间段内段所有数据
            * 图表会自动调用，比如用户查看的是每5分钟的数据，则图表在需要获数据时，自动调用此函数
            * \`param symbolInfo 交易对详细信息
            * \`param resolution 时间间隔
            * \`param from unix时间戳 起始时间
            * \`param to unxi时间戳 结束时间
            * \`param onHistoryCallback 成功时的回调
            * \`param onErrorCallback 失败时的回调
            * \`param firstDataRequest true/false 图表是否是第1次获取数据（即获取）
            onHistoryCallback接收两个参数：
                第1个应该是数组:[
                    {
                    time: 1537595100, // 每个时刻
                    close: 6720,6730, // 每个时刻的收盘价
                    open:6720,6730, // 每个时刻的开盘价
                    high:6720,6730, // 每个时刻的最高价
                    low:6720,6730, // 每个时刻的最低价
                    volume:10.5, // 每个时刻的总成交量
                    },...
                ]
                第2个是个对象:{
                    noData: false, // 没数据的话需要设置为true,此时第1个参数可以传null
                    nextTime: 时间戳, // 没数据的话可以设置再次获取数据的时间，到时间会再次请求getBars
                }
            **/
            getBars(symbolInfo,resolution,from,to,onHistoryCallback,onErrorCallback,firstDataRequest){},


            /**
            * 为当前交易对建立一个监听者
            * 由图表自动调用，用户每选择一个不同的交易对或每选择一个不同的时间间隔，就会触发一次该函数
            * 图表会自动创建一个对象，该交易对有新数据时，监听者会自动更新数据
            * （如果你自己要用socket获取数据的话，需要把这些自动产生的监听者保存下来，当获取到新数据时手动调用onRealtimeCallback来更新数据，官方UDF里也是这么干的）
            * \`param symbolInfo 当前交易对的详情
            * \`param resolution 时间间隔
            * \`param onRealtimeCallback 调用此方法将把新的数据更新到图表中
            * \`param subscriberUID 该监听者的唯一ID，默认是：交易对名称_时间间隔
            * \`param onResetCacheNeededCallback 刷新缓存的数据？
            **/
            subscribeBars: function(symbolInfo,resolution,onRealtimeCallback,subscriberUID,onResetCacheNeededCallback){},


            /**
            * 销毁指定的监听者
            * 这个也是图表自动调用的，目前还不清楚具体什么情况会被调用
            * 只知道是图表觉得不再需要接收某交易对数据时，会自动调用
            * \`param subscriberUID 监听者的ID
            **/
            unsubscribeBars(subscriberUID){},


            /**
            * 可选的
            * 图表库在需要某些历史数据来覆盖K柱时会自动调用
            * \`param resolution 时间间隔
            * \`param resolutionBack 'D'或'M',时间段的类型
            * \`param intervalBack 期数，比如6,就是6个时间间隔之间的数据
            * 该函数应该直接返回一个对象：
            {
                resolutionBack: 'M',
                intervalBack: 6
            }
            **/
            calculateHistoryDepth: function(resolution, resolutionBack, intervalBack){},


            /**
            * 获取某时间段内当前用户所做的所有标记,每个K柱最多做10个标记
            * \`param symbolInfo 当前交易对的详情
            * \`param from 开始的时间戳
            * \`param to 结束的时间戳
            * \`param onDataCallback 成功的回调
            * \`param resolution 时间间隔
            * onDataCallback接收这样的数据：
            [
                {
                    id: '1', // 标记的ID
                    time: 1595648654, // unix UTC时间戳
                    color: { border: '#ff0000', background: '#00ff00' }, // 标记的颜色
                    text: 'balabala', // 鼠标hover标记显示的文字
                    label: 'B', // 标记上的字母，只接受单个字符
                    labelFontColor: '#ff0000', // label的颜色
                    minSize: 5, // 标记图形的最小直径，单位px
                }
            ]
            **/
            getMarks: function(symbolInfo,from,to,onDataCallback,resolution){},


            /**
            * 获取时间轴上的标记
            * 同getMarks
            **/
            getTimescaleMarks: function(symbolInfo,from,to,onDataCallback,resolution){},


            /**
            * 获取服务器时间
            * \`param callback 回调
            * callback接收这样的数据：1445324591
            **/
            getServerTime: function(callback){}
        }
    });
});
\`\`\`

`;
})();
