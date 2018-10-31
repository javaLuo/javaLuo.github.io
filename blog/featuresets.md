- 官方文档：<a href="https://github.com/tradingview/charting_library/wiki/Featuresets" target="_blank"  rel="nofollow me noopener">https://github.com/tradingview/charting_library/wiki/Featuresets</a>
- 官方图例：<a href="http://tradingview.github.io/featuresets.html" target="_blank"  rel="nofollow me noopener">http://tradingview.github.io/featuresets.html</a>

> 有些属性是相互排斥和覆盖的，有些属性受另一些属性的影响
> 以下的值用于设置在初始化时的disabled_features或enabled_features中
> 设置在disabled_features表示把对应的功能状态设置为off, enabled_features中表示把状态设置为on

### 控件及其他视觉元素的可见性

| 字段名                                    | 默认状态 | 适用版本 | 描述                                                                   |
| ----------------------------------------- | -------- | -------- | ---------------------------------------------------------------------- |
| header_widget                             | on       |          | 整个头部区域                                                           |
| -header\_widget\_dom\_node                | on       |          | 头部的标题区域,没发现什么效果                                          |
| -header\_symbol\_search                   | on       |          | 头部的搜索框                                                           |
| -symbol\_search\_hot\_key                 | on       | 1.9      | 键盘按任意键激活搜索区                                                 |
| -header_resolutions                       | on       |          | 头部所有时间间隔相关按钮                                               |
| --header\_interval\_dialog\_button        | on       |          | 不知道                                                                 |
| ---show\_interval\_dialog\_on\_key\_press | on       |          | 不知道                                                                 |
| -header\_chart\_type                      | on       |          | 头部图表类型选择按钮                                                   |
| -header_settings                          | on       |          | 头部图标设置按钮，即头部齿轮按钮                                       |
| -header_indicators                        | on       |          | 头部指标选择按钮                                                       |
| -header_compare                           | on       |          | 头部比较按钮，即天平按钮                                               |
| -header\_undo\_redo                       | on       |          | 头部前进后退按钮                                                       |
| -header_screenshot                        | on       |          | 头部相机按钮                                                           |
| -header\_fullscreen\_button               | on       |          | 头部全屏按钮                                                           |
| compare_symbol                            | on       | 1.5      | 对比按钮弹出框中的“叠加品种”，没发现什么效果                         |
| border\_around\_the\_chart                | on       |          | 各区域间的空隙                                                         |
| header_saveload                           | on       |          | 头部保存/加载按钮，即云按钮                                            |
| left_toolbar                              | on       |          | 左边工具栏，容器高度小于 450 会自动隐藏                                |
| control_bar                               | on       |          | 图表中间底部左右移动的导航按钮们                                       |
| timeframes_toolbar                        | on       |          | 底部工具栏                                                             |
| edit\_buttons\_in\_legend                 | on       |          | 左上角交易对标题和指标右侧的操作按钮                                   |
| -show\_hide\_button\_in\_legend           | on       | 1.7      | “隐藏”按钮，即眼睛按钮                                               |
| -format\_button\_in\_legend               | on       | 1.7      | "编辑"按钮，即小齿轮                                                   |
| -study\_buttons\_in\_legend               | on       | 1.7      | 没看出来效果                                                           |
| -delete\_button\_in\_legend               | on       | 1.7      | "删除"按钮，即小叉叉                                                   |
| context_menus                             | on       |          | 所有的菜单，即下面 3 种                                                |
| -pane\_context\_menu                      | on       |          | 右键菜单                                                               |
| -scales\_context\_menu                    | on       |          | 没看出来是哪里的菜单                                                   |
| -legend\_context\_menu                    | on       |          | 左上角交易对标题后面向下的小箭头                                       |
| main\_series\_scale\_menu                 | on       | 1.7      | 右下角的齿轮，这个归属于 timeframes_toolbar                            |
| display\_market\_status                   | on       |          | 右上角数据加载的状态显示，即“加载中...”                              |
| remove\_library\_container\_border        | on       |          | 消除容器的边框，没看出有什么效果                                       |
| chart\_property\_page\_style              | on       |          | 图标属性弹框中的“样式”选项，即右上角齿轮里面的                       |
| property_pages                            | on       | 1.11     | 属性窗口中的所有选项，禁用这个连右上角齿轮按钮也一同被禁用             |
| show\_chart\_property\_page               | on       | 1.6      | 跟上面那个效果一样                                                     |
| chart\_property\_page\_scales             | on       |          | 属性设置页中的“坐标”选项                                             |
| chart\_property\_page\_background         | on       |          | 属性设置页中的“背景”选项                                             |
| chart\_property\_page\_timezone\_sessions | on       |          | 属性设置页中的“时间/交易时段”选项                                    |
| chart\_property\_page\_trading            | on       |          | 交易终端相关                                                           |
| countdown                                 | on       | 1.4      | 在价格标尺上显示倒计时标签,没看出什么效果                              |
| caption\_buttons\_text\_if\_possible      | on       | 1.4      | 按钮中尽可能图标和文字都显示，而不是只显示图标(官方是off，我觉得是on ) |
| dont\_show\_boolean\_study\_arguments     | off      | 1.4      | 隐藏真/假研究论点，没看出什么效果                                      |
| hide\_last\_na\_study\_output             | off      | 1.4      | 隐藏指标信息最后一个数据显示,即volumn最后的n/a                         |
| symbol_info                               | on       | 1.5      | 右键菜单中的“品种信息”                                               |
| timezone_menu                             | on       | 1.5      | 底部工具栏点日期弹出的“时区选择框”                                   |
| snapshot\_trading\_drawings               | off      | 1.6      | 屏幕拍照中的相关东西                                                   |
| source\_selection\_markers                | on       | 1.11     | 线条上打点标记，禁用了就不能点选做标记                                 |
| go\_to\_date                              | on       | 1.11     | 底部工具栏“前往到”选项                                               |
| adaptive_logo                             | on       | 1.11     | 左下角的LOGO,在小屏幕上会自动隐藏文字只显示logo图表                    |
| show\_dom\_first\_time                    | off      | 1.12     | 当用户首次加载图表时显示DOM面板，没看出来什么效果                      |
| hide\_left\_toolbar\_by\_default          | off      | 1.12     | 默认收起左侧工具栏                                                     |

### 元素位置
| 字段名                     | 默认状态 | 版本 | 描述                                          |
| -------------------------- | -------- | ---- | --------------------------------------------- |
| move\_logo\_to\_main\_pane | off      |      | LOGO放到主窗口中,不会根据布局的不同而改变位置 |

### 图表行为控制
| 字段名                                       | 默认状态 | 版本 | 描述                                                                                     |
| -------------------------------------------- | -------- | ---- | ---------------------------------------------------------------------------------------- |
| use\_localstorage\_for\_settings             | on       |      | 在头部会生成一排时间间隔按钮，即初始化时favorites.intervals设置的值                      |
| -items_favoriting                            | on       |      | 隐藏那一排时间间隔按钮，只显示一个合并的可以下拉选择的按钮                               |
| -save\_chart\_properties\_to\_local\_storage | on       |      | 图表会把用户的某些设置存储到localstorage                                                 |
| create\_volume\_indicator\_by\_default       | on       |      | 默认创建成交量区域，即图表的下半部分显示的数据                                           |
| create\_volume\_indicator\_by\_default\_once | on       |      | 默认创建一次成交量指示器，没看出什么效果                                                 |
| volume\_force\_overlay                       | on       |      | 成交量区域和主图表区重叠显示，而不是单独分开为一个区域                                   |
| right\_bar\_stays\_on\_scroll                | on       |      | 鼠标缩放相关，如果禁用，鼠标光标下的条形图将保持在同一位置，没看出什么效果               |
| constraint\_dialogs\_movement                | on       |      | 限制所有对话框的边缘在图表区域内不能移到外面去                                           |
| charting\_library\_debug\_mode               | off      |      | 启用调试日志                                                                             |
| show\_dialog\_on\_snapshot\_ready            | on       |      | 当快照准备好时弹出对话框，而不是静默完成                                                 |
| study\_market\_minimized                     | on       |      | 指标对话框采用紧密的小窗口样式，不然很大                                                 |
| study\_dialog\_search\_control               | on       |      | 指标对话框中显示“搜索”栏                                                               |
| side\_toolbar\_in\_fullscreen\_mode          | off      |      | 全屏模式下启动图纸工具栏                                                                 |
| same\_data\_requery                          | off      |      | 调用setSymbol设置里相同的交易对时，也重新刷新数据                                        |
| disable\_resolution\_rebuild                 | off      |      | 当切换时间间隔时，仅使用真实数据来显示，而不是从其他时间间隔来生成当前所选时间间隔的数据 |
| chart_scroll                                 | on       | 1.10 | 允许图表左右滚动                                                                         |
| chart_zoom                                   | on       | 1.10 | 允许图表缩放                                                                             |
| high\_density\_bars                          | off      | 1.11 | 一屏的数据超过60000条时也允许继续缩放                                                    |
| cl\_feed\_return\_all\_data                  | off      | 1.11 | 当图表获取到的数据多于它需要的时候，也把多余的数据显示出来                               |
| uppercase\_instrument\_names                 | on       | 1.12 | 把用户的输入全部转换为大写字母                                                           |

### 重要特征
| 字段名               | 默认状态 | 版本 | 描述                     |
| -------------------- | -------- | ---- | ------------------------ |
| study_templates      | off      |      | 没看出什么效果           |
| datasource_copypaste | on       |      | 允许复制图纸             |
| seconds_resolution   | off      | 1.4  | 允许“秒”级别的时间间隔 |

### 交易终端 略
