(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.dll = `
- 现在因为有HMR局部热更新，所以dllPlugin这两个插件用得少了，不过还是记录一下配置方法，可能以后会再次使用。
- 这两个插件可以对第三方NPM包预编译，生成*.dll.js，在项目启动和开发中不停的反复Ctrl+S的时候，webpack就不需要每次都重新编译那些固定不变的NPM包了，大大提升编译速度。

#1. 
新建一个webpack.dll.config.js ：
(我是创建在根目录下的)

\`\`\`
const path = require("path");
const webpack = require("webpack");
const pkg = require('./package.json'); // 引入package.json
module.exports = {
    entry: {
        vendor: Object.keys(pkg.dependencies) // 遍历package.json的所有依赖包
    },
    output: {
        path: path.join(__dirname, 'dll'), // 生成的文件存放路径
        filename: '[name].dll.js', // 生成的文件名字(默认为vendor.dll.js)
        library: '[name]_library'  // 生成文件的映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        new webpack.DllPlugin({
            // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            name: '[name]_library', // 与上面output中配置对应
            context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
        })
    ]
};
\`\`\`

#2.
原webpack.dev.config.js (即开发环境所用到的webpack配置文件)：
在plugins字段中增加DllReferencePlugin插件


\`\`\`
plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname, // 与DllPlugin中的那个context保持一致
            /** 
                 下面这个地址对应webpack.dll.config.js中生成的那个json文件的路径
                这样webpack打包时，会检测此文件中的映射，不会把存在映射的包打包进bundle.js
            **/
            manifest: require('./dll/vendor-manifest.json')
        }),
        // ...
    ]
\`\`\`
#3. 引入index.html
需要在项目index.html中引入上面生成的dll.js文件
\`\`\`
<script src="/vendor.dll.js"></script>
// 注意1： vendor.dll.js必须在bundle.js之前引入，因为bundle.js依赖vendor.dll.js。
// 注意2： 这个路径啊,我因为用的是webpack-dev-middleware自定义的服务，所以需要我自己提供/vendor.dll.js的访问。
// 我使用的是express，配置了：app.use(express.static('dll')); 所以访问路径直接就是"/vendor.dll.js"
// 如果用的webpack.dev.server就不用担心这个
\`\`\`

#4.
package.json文件中添加一条用于预编译的指令：

\`\`\`
"scripts": {
    "dll": "webpack -p --config webpack.dll.config.js --progress --profile --colors",
    "start": "node server.js",
    }
\`\`\`

#5
执行npm run dll，打包好dll
再执行npm run start, 运行开发环境
就OK了

唯一麻烦的是，每次有依赖包升级或加入了新的包，都得手动run dll一下。
但有个优秀的自动化插件可以解决：
autodll-webpack-plugin,可以全自动化，但webpack4.0+之后，作者还没有更新完毕，目前(2018/04/25)使用会报错
`;
})();
