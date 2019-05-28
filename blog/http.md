```javascript
  General{  // 通用属性
    RequestURL: '接口的URL地址',
    RequestMethod: { // 请求的方式
      GET: '参数拼接在URL后的一般请求',
      POST: '带请求体body的请求',

    }
  }

```

### General 通用属性

| 属性       | 描述            |
| ---------- | --------------- |
| RequestURL | 接口的 URL 地址 |

---

| 属性          | 描述       |
| ------------- | ---------- |
| RequestMethod | 请求的方式 |

- GET: 用于获取数据，参数拼接在 URL 后面
- HEAD: 类似 GET，但没有响应体，即仅返回头部信息，常用于测试超链接的有效性、是否可访问、是否有更新等。
- POST: 用于提交资源，通常导致服务器状态变化或数据库数据更新，参数存放在请求体中
- PUT: 类似 POST，含义为用当前请求体中的资源替换服务器中的资源
- DELETE: 含义为删除指定资源
- CONNECT:
- OPTIONS:
- TRACE:
- PATCH:
