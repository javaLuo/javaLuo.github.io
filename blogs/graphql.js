(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.graphql = `
### 别 BB，直接说怎么用

#### 1. 服务端需要安装两个包

\`\`\`
npm install graphql --save
npm install express-graphql --save
\`\`\`

> graphql 提供了各种语言的 SDK，我用的 NODE.js，所以使用 express-graphql

#### 2. 配置你的服务端 server.js(express 服务)

\`\`\`
const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const schema = require('./schema.js'); // 这很重要，稍后详解
app.use(
    '/graphql',         // 接口
    graphqlHTTP({       // graphql服务
    schema,           // 模式，物料
    graphiql: false,  // 使用启用graphql自带的调试页面
    }),
);
app.listen(8080);
\`\`\`

搞定。 最重要的是 schema（模式）, 稍后详解。其他 express 路由啊中间件啊就正常配置。<br/>
这样一来，只要访问http://localhost:8080/graphql 就是在请求 graphql 服务<br/>
前端需要传递不同的“参数”就能访问到不同的数据<br/>
而“参数”是需要前端写的类似 SQL 的查询语句<br/>
后端不需要再写接口，只需要根据 GraphQL 的规范定义各种类，告诉前端有哪些类，类里有哪些字段就行了

> 注意的是：其他对 http 请求有解析操作的中间件（比如 body-parser 等）应该接着写在后面，不能写在 graphql 前面<br/>
> 因为'/graphql'被 graphqlHTTP 监听，graphqlHTTP 是一个完整的服务，不需要其他中间件

#### 3. 配置 schema

创建一个 schema.js<br/>
这个文件的作用就是所谓的“面向对象编程”，

\`\`\`
/** 后端都是强类型的，graphql提供了各种基本类型的抽象类，按需引入 **/
const {
    GraphQLObjectType,    // 对象
    GraphQLSchema,        // 构建Schema所需
    GraphQLInt,           // 整型
    GraphQLNonNull,       // 非空
    GraphQLString,        // 字符串
    GraphQLList,          // 列表/集合/数组
    GraphQLID             // ID，ID是一个单独的基础类型
    } = require('graphql');

const jdbc = require('./sql/mysql'); // 我自己的MySQL数据库连接

/** GraphQL Query根节点 各种查询 **/
const Query = new GraphQLObjectType({
    name: 'Query',
    description: '所有的查询操作都汇聚于此',
    fields: () => ({
    // ... 这里会定义很多查询功能
    }),
});

/** GraphQL Mutation根节点 各种添加/删除/更新 **/
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: '所有会改变数据库中数据的操作都汇聚于此'
    fields: () => ({
    // ... 这里会定义很多增删改的功能
    }),
});

/** 最后new一个schema **/
const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});

module.exports = schema;

\`\`\`

#### 4.下面是具体示例

我拿自己个人网站中的数据测试：https://isluo.com/index <br/>
当进入这个网址后，有个接口请求推荐的电影列表<br/>
这个接口长这样：
https://isluo.com/main/getMovieList?pageNow=0&pageSize=10<br/>
后端会返回第 0 页最多 10 条数据

按照 GraphQL 的方式，我现在需要这样配置：

**服务端**

完善上面创建的 schema.js:

\`\`\`
/** 后端都是强类型的，graphql提供了各种基本类型的抽象类，按需引入 **/
const {
    GraphQLObjectType,    // 对象
    GraphQLSchema,        // 构建Schema所需
    GraphQLInt,           // 整型
    GraphQLNonNull,       // 非空
    GraphQLString,        // 字符串
    GraphQLList,          // 列表/集合/数组
    GraphQLID             // ID，ID是一个单独的基础类型
    } = require('graphql');

/** 电影类 对应数据库中的Movie表 **/
const Movie = new GraphQLObjectType({
    name: 'Movie',
    description: '类：电影',
    fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },    // id
    title: { type: GraphQLString },                 // 标题
    type: { type: GraphQLString },                  // 电影类型
    star: { type: GraphQLInt },                     // 星级
    mytalk: { type: GraphQLString },                // 评价
    info: { type: GraphQLString },                  // 简介
    imgpath: { type: GraphQLString },               // 封面图片
    downlink: { type: GraphQLString },              // 下载地址
    movieimgs: { type: new GraphQLList(Movieimg) }, // 剧照（类型是电影剧照集合）
    }),
});

// 之所以定义这些字段，是因为数据库表就是定义的这些字段
// GraphQLNonNull表示该字段不能为空，如果后台传的数据中有这个字段为空的，直接在服务端报错

/** 电影剧照类 对应数据库Movieimg表，电影类和电影剧照类是一对多关系 **/
const Movieimg = new GraphQLObjectType({
    name: 'Movieimg',
    description: '类：对应电影的剧照图片',
    fields: () => ({
    id: { type: GraphQLID },            // id
    movie_id: { type: GraphQLInt },     // 父级ID（电影ID）
    imgpath: { type: GraphQLString },   // 图片
    ordernum: { type: GraphQLInt },     // 排序
    }),
});

/** GraphQL Query根节点 各种查询 **/
const Query = new GraphQLObjectType({
    name: 'Query',
    description: '所有的查询模式',
    fields: () => ({
    // 获取电影数据
    movie: {
        type: new GraphQLList(Movie),   // 返回的数据类型是Movie数组
        description: '查询电影数据',
        args: {                         // 参数
        pageNow: { type: GraphQLInt },// 当前页码
        pageSize: { type: GraphQLInt }// 每页多少条数据
        },
        resolve: async (_, { pageNow, pageSize }) => {  // 真正的逻辑处理
        const res = await jdbc.getMovieList(pageNow,pageSize); // 去调用SQL取数据库数据
        if (res && res.status === '0') {
            return res.rows;
            // 返回了查到的数据，就是普通对象
            // 数据库中的字段名和我们定义类中字段名是对应的，所以无需特殊处理
        } else {
            return null;
        }
        },
    },
    }),
});
\`\`\`

**前端**

页面里面写 ajax 或 fetch

\`\`\`
    const query = \`query func($pageNow: Int!, $pageSize: Int!){
    movie(pageNow: $pageNow, pageSize: $pageSize){
        id
        title
        imgpath
    }
    }\`;

    fetch('/graphql',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    },
    body: JSON.stringify({
    query,
    variables: { pageNow:0, pageSize: 10 },
    })
    }).then(r => r.json())
    .then(data => console.log(data));
\`\`\`

执行上面方法就能获取到数据了，并且指定了只获取 id/title/imgpath

#### 5. 灵活度

- 前端可以根据自己的需要查询指定的字段
- 若还有其他类，也可以在一次请求中查询多个类的数据，graphQL 一并返回
- 每个字段都可以带参数，更细致的查询需要的数据
- 绝大部分工作都需要后端完成，前端需要掌握的是 GraphQL 查询语法
- 增删改跟查类似，服务端把逻辑写在 Mutation 根节点里，前端传参后端更新数据库即可

#### 总结

后台人员仍然需要写 SQL 获取数据库的原始数据，然后加工成 GraphQL 规范的 schema,我更想称其为“物料”。<br/>
就好比一个水果店，后台需要从农民手中获得原始水果，经过清洗包装，上架到商店中。<br/>
前端想要苹果就拿苹果，想要香蕉就拿香蕉<br/>
也可以同时买苹果和香蕉，这在以前可能要写好几个接口。而现在全局只需要 1 个接口就行了。

小项目用起来挺麻烦的，更适用与大型复杂项目。

GraphQL 官网：<a href="https://graphql.github.io/" target="_blank">https://graphql.github.io/</a>

apollo-client: <a href="https://github.com/apollographql/apollo-client" target="_blank">https://github.com/apollographql/apollo-client</a>
(适用于 React 的 GraphQL 前端库，写 QL 更方便)
    
  `;
})();
