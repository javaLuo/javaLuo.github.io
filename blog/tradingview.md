## 一、文件代码

![tradingview](https://isluo.com/imgs/tradingview/1.jpg)

- 只有 charting_library.min.js 是本体
- static 文件夹包含 tradingview 样式等文件
- datafeeds 是官方实现的 JS API 配置，可以用，也可以自己写一套

## 二、初始化

- 引入本体：

```
<script type="text/javascript" src="charting_library/charting_library.min.js"></script>
```

- 然后写代码：

```
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
```

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
| symbol_search_request_delay | 500                                                                 | 用户搜索框输入后延迟多少毫秒调用搜索接口                                     |
| auto_save_delay             | 2                                                                   | 当需要自动保存时，延迟多少秒执行 onAutoSaveNeeded 接口调用                   |
| toolbar_bg                  | '#ffffff'                                                           | 工具栏的背景色                                                               |
| study_count_limit           | 2                                                                   | 多图布局时，最多显示多少个指标                                               |
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
| charts_storage_url          | 'http://saveload.tradingview.com'                                   | 用于在服务端保存用户的数据，如果要使用高级图表保存等功能就需要设置           |
| client_id                   | 'https://xxx.com'                                                   | 您的网站网址或其他任意内容（用于在服务端保存该用户的数据，高级图表功能）     |
| charts_storage_api_version  | '1.1'                                                               | 所使用等 API 版本，目前有 1.0 和 1.1                                         |
| load_last_chart             | false                                                               | 设为 true 则加载用户保存的最后一张图表                                       |
| theme                       | 'Light/Dark'                                                        | 主题：亮色或暗色                                                             |
| custom_css_url              | null                                                                | 指定义 CSS 文件的路径                                                        |
| loading_screen              | {backgroundColor: '#ffffff', foregroundColor: '#00ff00'}            | 设置加载时的样式                                                             |
| favorites                   | {}                                                                  | 设置上方图表收藏夹要展示的内容                                               |
| save_load_adapter           | {}                                                                  | 保存/加载 图表 高级功能，略                                                  |
| settings_adapter            | {}                                                                  | 设置/删除 高级功能 略                                                        |
