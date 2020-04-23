(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.document = `
## document对象
当前文档顶层对象

### document对象常用属性

| 属性            | 描述                                                                               |
| --------------- | ---------------------------------------------------------------------------------- |
| title           | 当前文档的\`<title>\`中的文本，没有\`<title>\`返回空字符串                             |
| lastModified    | 当前文档最后被修改的时间，返回日期字符串                                           |
| referrer        | 返回当前文档的访问来源，比如存在github上的页面会返回github.com                     |
| URL             | 文档完整URL，即访问路径                                                            |
| compatMode      | 浏览器渲染模式，BackCompat(向后兼容模式)，CSS1Compat(严格模式)                     |
| doctype         | 返回\`<!DOCTYPE html>\`这个对象，这个标签必须写在最前面且前面没有空格才获取得到      |
| documentElement | 返回文档的直接子节点，一般是\`<html>\`对象                                           |
| head            | \`<head>\`对象                                                                       |
| body            | \`<body>\`对象                                                                       |
| activeElement   | 返回文档中当前被激活（focused/active）的元素                                       |
| defaultView     | 当前文档的javaScript顶层对象，即window对象                                         |
| all             | 返回文档中所有的元素, 是[object HTMLAllCollection]类数组对象                       |
| forms           | 返回文档中所有的\`<form>\`                                                           |
| images          | 返回文档中所有的\`<img>\`                                                            |
| scripts         | 返回文档中所有的\`<script>\`                                                         |
| styleSheets     | 返回文档中所有的\`<link rel="stylesheet">\`和\`<style>\`                               |
| anchors         | 返回文档中所有锚点元素的列表                                                       |
| characterSet    | 返回文档正在使用的字符集                                                           |
| contentType     | 文档的Content-Type(MIME)类型                                                       |
| embeds          | 所有的嵌入式元素\`<embed>\`                                                          |
| hidden          | 文档是否被隐藏                                                                     |
| cookie          | 该文档的所有cookie,一个字符串，每条cookie以分号隔开                                |
| designMode      | 控制整个文档是否可编辑，默认“off”, 改为“on”变成全局可编辑                      |
| dir             | 文档方向，默认“ltr”, 改为“rtl”,网站排列会左右颠倒                              |
| domain          | 文档原始域                                                                         |
| location        | 返回文档URI信息                                                                    |
| readyState      | 文档当前加载状态，loading加载中/interactive已解析但图片样式等仍在加载/complete完成 |
### document对象方法

| 方法                                            | 描述                                                            |
| ----------------------------------------------- | --------------------------------------------------------------- |
| write("\<div\>\<\/div\>")                       | 在文档中直接输出HTML代码，会覆盖原本所有代码                    |
| getElementById("id")                            | 查找文档中指定ID的DOM对象                                       |
| getElementsByTagName("div")                     | 查找所有指定的标签的指针，DOM变化会实时更新                     |
| getElementsByClassName("class")                 | 查找所有指定Css类名的DOM对象的指针，DOM变化会实时更新，IE9+支持 |
| getElementsByName("name")                       | 查找所有带name属性的标签，只要标签上有name="...";就能获取到     |
| querySelector("...")                            | 同jquery一样的查询，只返回找到的第1个元素                       |
| querySelectorAll("...")                         | 同jquery一样的查询，返回找到的所有元素                          |
| createElement("div")                            | 创建一个新的标签                                                |
| hasFocus()                                      | 返回boolean，表示当前文档中是否存在获取到焦点的元素             |
| elementFromPoint(50,50)                         | 返回页面中坐标（50,50）处的最子级元素                           |
| addEventListener(eventType,callback,boolean)    | 给document绑定事件                                              |
| removeEventListener(eventType,callback,boolean) | 给document解除事件                                              |

## node对象
节点对象

> 所有标签都继承至node对象<br/>
> html文档是一棵树，node对象反应了他们的属性和关系，以及提供了对树的操作

### node对象的属性

const obj = document.getElementById("div1");

<table>
<thead>
    <tr>
        <td>属性</td>
        <td>可能的值</td>
        <td>描述</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>obj.nodeName</td>
        <td>"DIV"</td>
        <td>节点的名字,均为大写</td>
    </tr>
    <tr>
        <td>obj.nodeType</td>
        <td>
        <table>
        <thead>
            <tr>
            <td>枚举名</td>
            <td>值</td>
            <td>说明</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>DOCUMENT_NODE</td>
            <td>9</td>
            <td>文档节点, #document,即document对象</td>
        </tr>
        <tr>
            <td>ELEMENT_NODE</td>
            <td>1</td>
            <td>元素节点</td>
        </tr>
        <tr>
            <td>ATTRIBUTE_NODE</td>
            <td>2</td>
            <td>属性节点</td>
        </tr>
        <tr>
            <td>TEXT_NODE</td>
            <td>3</td>
            <td>文本节点 #text</td>
        </tr>
        <tr>
            <td>DOCUMENT_FRAGMENT_NODE</td>
            <td>11</td>
            <td>文档片段 #document-fragment</td>
        </tr>
        <tr>
            <td>DOCUMENT_TYPE_NODE</td>
            <td>10</td>
            <td>文档类型节点，即DOCTYPE html标签</td>
        </tr>
        </tbody>
        </table>
        </td>
        <td>节点的类型</td>
    </tr>
    <tr>
        <td>obj.nodeValue</td>
        <td>text节点返回文本内容，其他节点返回null</td>
        <td>节点的值，text节点可以直接设置nodeValue</td>
    </tr>
    <tr>
        <td>obj.childNodes</td>
        <td>[object NodeList]</td>
        <td>返回obj的所有子对象，包括所有类型的节点，只要是子对象，都会得到</td>
    </tr>
    <tr>
        <td>obj.firstChild</td>
        <td></td>
        <td>obj的第1个子节点，不管是什么类型,没有返回null</td>
    </tr>
    <tr>
        <td>obj.lastChild</td>
        <td></td>
        <td>obj的最后一个子节点 不管什么类型</td>
    </tr>
    <tr>
        <td>obj.nextSibling</td>
        <td></td>
        <td>obj的下一个兄弟节点 不管什么类型</td>
    </tr>
    <tr>
        <td>obj.previousSibling</td>
        <td></td>
        <td>obj的上一个兄弟节点 不管什么类型</td>
    </tr>
    <tr>
        <td>obj.parentNode</td>
        <td></td>
        <td>obj的父节点（父节点只可能是HTML元素类型）</td>
    </tr>
    <tr>
        <td>obj.children</td>
        <td>[object NodeList]</td>
        <td>返回obj的所有子对象，只返回HTML标签类型的对象，既ELEMENT_NODE</td>
    </tr>
    <tr>
        <td>obj.firstElementChild</td>
        <td></td>
        <td>obj的第1个HTML元素类型的子节点</td>
    </tr>
    <tr>
        <td>obj.lastElementChild</td>
        <td></td>
        <td>obj的最后1个HTML元素类型的子节点</td>
    </tr>
    <tr>
        <td>obj.nextElementSibling</td>
        <td></td>
        <td>obj的下一个HTML元素类型的兄弟节点</td>
    </tr>
    <tr>
        <td>obj.previousElementSibling</td>
        <td></td>
        <td>obj的上一个HTML元素类型的兄弟节点</td>
    </tr>
    </tbody>
</table>

### node对象的方法

| 方法                            | 描述                                                                                                                                                                               |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj.appendChild(obj2)           | 把obj2插入到obj内部的最下面                                                                                                                                                        |
| obj.insertBefore(obj2,obj3)     | 将obj2插入到obj3的上面，obj3必须是obj的直接子级                                                                                                                                    |
| obj.removeChild(obj2)           | 将obj2从obj中移除，obj2必须是obj的直接子级                                                                                                                                         |
| obj.parentNode.removeChild(obj) | （小技巧）移除自己                                                                                                                                                                 |
| obj.replaceChild(obj2,obj3)     | 用obj2替换obj3, obj3必须是obj的直接子级                                                                                                                                            |
| obj.cloneNode(boolean)          | 克隆obj，参数false:只克隆节点本身，不包括子级, true:克隆本身和所有后代节点。 这个方法无法克隆通过addEventListener绑定的事件，但直接写在标签上的onclick会被克隆。注意：id也会被克隆 |
| obj.contains(obj2)              | 判断obj2是否是obj的后代元素，返回boolean                                                                                                                                           |
| obj.isEqualNode(obj2)           | 判断obj和obj2是否相等（节点类型相同，属性相同，所有后代节点相同）                                                                                                                  |
`;
})();
