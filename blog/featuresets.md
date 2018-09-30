- 官方文档：<a href="https://github.com/tradingview/charting_library/wiki/Featuresets" target="_blank"  rel="nofollow me noopener">https://github.com/tradingview/charting_library/wiki/Featuresets</a>
- 官方图例：<a href="http://tradingview.github.io/featuresets.html" target="_blank"  rel="nofollow me noopener">http://tradingview.github.io/featuresets.html</a>

### 补全

| 字段名                               | 默认状态 | 适用版本 | 描述                                         |
| ------------------------------------ | -------- | -------- | -------------------------------------------- |
| header_widget                        | on       |          | 整个头部区域                                 |
| -header/\_widget/\_dom/\_node        | on       |          | 头部的标题区域,没发现什么效果                |
| -header_symbol_search                | on       |          | 头部的搜索框                                 |
| -symbol_search_hot_key               | on       | 1.9      | 键盘按任意键激活搜索区                       |
| -header_resolutions                  | on       |          | 头部所有时间间隔相关按钮                     |
| --header_interval_dialog_button      | on       |          | 不知道                                       |
| ---show_interval_dialog_on_key_press | on       |          | 不知道                                       |
| -header_chart_type                   | on       |          | 头部图表类型选择按钮                         |
| -header_settings                     | on       |          | 头部图标设置按钮，即头部齿轮按钮             |
| -header_indicators                   | on       |          | 头部指标选择按钮                             |
| -header_compare                      | on       |          | 头部比较按钮，即天平按钮                     |
| -header_undo_redo                    | on       |          | 头部前进后退按钮                             |
| -header_screenshot                   | on       |          | 头部相机按钮                                 |
| -header_fullscreen_button            | on       |          | 头部全屏按钮                                 |
| compare_symbol                       | on       | 1.5      | 对比按钮弹出框中的“叠加品种”，没发现什么效果 |
| border_around_the_chart              | on       |          | 各区域间的空隙                               |
| header_saveload                      | on       |          | 头部保存/加载按钮，即云按钮                  |
| left_toolbar                         | on       |          | 左边工具栏，容器高度小于 450 会自动隐藏      |
| control_bar                          | on       |          | 图表中间底部左右移动的导航按钮们             |
| timeframes_toolbar                   | on       |          | 底部工具栏                                   |
| edit_buttons_in_legend               | on       |          | 左上角交易对标题和指标右侧的操作按钮         |
| -show_hide_button_in_legend          | on       | 1.7      | “隐藏”按钮，即眼睛按钮                       |
| -format_button_in_legend             | on       | 1.7      | "编辑"按钮，即小齿轮                         |
| -study_buttons_in_legend             | on       | 1.7      | 没看出来效果                                 |
| -delete_button_in_legend             | on       | 1.7      | "删除"按钮，即小叉叉                         |
| context_menus                        | on       |          | 所有的菜单，即下面 3 种                      |
| -pane_context_menu                   | on       |          | 右键菜单                                     |
| -scales_context_menu                 | on       |          | 没看出来是哪里的菜单                         |
| -legend_context_menu                 | on       |          | 左上角交易对标题后面向下的小箭头             |
| main_series_scale_menu               | on       | 1.7      | 右下角的齿轮，这个归属于 timeframes_toolbar  |
| display_market_status                | on       |          | 右上角数据加载的状态显示，即“加载中...”      |
| remove_library_container_border      | on       |          | 消除容器的边框，没看出有什么效果             |
