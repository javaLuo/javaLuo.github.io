 - 现在因为有HMR局部热更新，所以dllPlugin这两个插件用得少了，不过还是记录一下配置方法，可能以后会再次使用。
 - 这两个插件可以对第三方NPM包预编译，生成*.dll.js，在项目启动和开发中不停的反复Ctrl+S的时候，webpack就不需要每次都重新编译那些固定不变的NPM包了，大大提升编译速度。
 
 #1. 
 新建一个webpack.dll.config.js ：
 

```
var path    = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
	        /** 这下面配置项目中用到的NPM依赖 **/
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'babel-polyfill',
            'reqwest',
            'prop-types',
            'lodash',
            'echarts',
            'antd'
        ]
    },
    output: {
        path: path.join(__dirname, 'build', 'dev'), // 生成的dll.js路径，我是存在/build/dev中
        filename: '[name].dll.js', // 生成的文件名字
        library: '[name]_library'  // 生成文件的一些映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
	    // 使用DllPlugin插件编译上面配置的NPM包
        new webpack.DllPlugin({
	        // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.join(__dirname, 'build', 'dev', '[name]-manifest.json'),
            name: '[name]_library' // 与上面output中配置对应
        })
    ]
};
```

#2.

 原webpack.dev.config.js (即开发环境所用到的webpack配置文件)：
 在plugins字段中增加DllReferencePlugin插件
 

```
plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            /** 
	            下面这个地址对应webpack.dll.config.js中生成的那个json文件的路径
	            这样webpack打包时，就先直接去这个json文件中把那些预编译的资源弄进来
            **/
            manifest: require('./build/dev/vendor-manifest.json')
        }),
        // ...
    ]
```

#3.
package.json文件中添加一条用于预编译的指令：

```
"scripts": {
    "dll": "webpack -p --config webpack.dll.config.js --progress --profile --colors",
    "dev": "node server.js",
    "build": "webpack -p --config webpack.production.config.js --progress --profile --colors"
  },
/**
	npm run dll 预编译静态资源，第1次使用时应该先执行一次这个。以后的开发中就不需要再执行了
	npm run dev 启动开发环境
	npm run build 最终的正式打包
**/
```