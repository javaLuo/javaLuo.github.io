## 一、下载源文件
* 需要申请认证，这是个私有github项目，略。
* 下载后的源文件结构是这样：

![tradingview](https://isluo.com/imgs/tradingview/1.jpg)

* 只有charting_library.min.js是本体，其他都不用看
* static文件夹包含tradingview样式等文件，不用管
* datafeeds是官方实现的JS API配置，先不管

## 二、初始化

*  需要在页面引入这个：
```
<script type="text/javascript" src="charting_library/charting_library.min.js"></script>
```

* 然后写代码：
```
<div id="tv_chart_container"><div>

<script>
    TradingView.onready(function() {
    var widget = window.tvWidget = new TradingView.widget({
        container_id: "tv_chart_container",
        datafeed: new Datafeeds.UDFCompatibleDatafeed,
        // 其他参数，参见：https://b.aitrade.ga/books/tradingview/book/Widget-Constructor.html
    });
</script>
```