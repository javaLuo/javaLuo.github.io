(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.actions = `
> <a href="http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank">阮一峰的 GitHub Actions 入门教程</a>
> 阮一峰的版本有点老了，跑不通，请往下看

### 1. 新建仓库

需要新建一个公开仓库，取名为 username.github.io (username 替换为自己的 github 用户名。比如我的是 javaLuo)
![1](https://isluo.com/imgs/actions/actions1.png)

### 2. 新建一个分支

仓库默认主分支为"master", 还需要再创建一个分支"source"(名字随便取),<br/>
 我打算用 source 分支存储博客的源代码，将最终编译打包后的文件发布到 master 分支。到时候通过 javaLuo.github.io 访问到的就是 master 分支

> 网上的文章说在仓库 Settings 里可以设置发布到指定的分支，但我看了我的 Settings 里说必须发布到 master 分支，可能是因为我使用了 https 的缘故。

### 3. 生成 access_token，为自动部署做准备

按照<a href="https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line" target="_blank">官方文档</a>，生成一个密钥(access_token)

密钥只需要勾选：
![2](https://isluo.com/imgs/actions/actions2.png)

生成后的密钥大概长这样：91b11f4c40e41a1a3c0f57c17157abf0\\*\\*\\*\\*\\*\\*\\*\\* <br/>
记得保存

现在去第 1 步创建的仓库 Settings 里会发现 Secrets 菜单, 进去后点 Add a new secret,如图：<br/>
![3](https://isluo.com/imgs/actions/actions3.png)

将刚才生成的密钥填进去，注意前面不要有空格,**名字随便取，后面要用**。

### 4. 创建 vue 项目，写博客

把之前创建的仓库拉到本地，切换到 source 分支，然后写自己的博客项目

\`\`\`
vue create blog-demo
...
\`\`\`

### 5. 创建自动部署所需文件

在项目根目录创建 \`.github/workflow/build.yml\`<br/>
\`build.yml\`名字随便取，后缀必须为\`.yml\`

其中的内容为：

\`\`\`
name: Actions Build and Deploy
on:
push:
    branches:
    - source
jobs:
build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
        uses: actions/checkout@v2
        with:
        ref: source
        persist-credentials: false
    - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
        node-version: 10.x
    - name: Install and Build
        run: |
        npm install yarn -g
        yarn install
        yarn run build
    - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
        ACCESS_TOKEN: \${{ secrets.access_token_key }}
        BRANCH: master
        FOLDER: dist
        CLEAN: true
\`\`\`

上面的代码主要做的事情是：

- 当 source 分支有\`push\`动作时，会自动执行接下来的\`jobs\`
- \`jobs\`里选用\`ubuntu-latest\`最新版本乌班图系统环境
- 在\`step\`里有四个步骤，第一步\`checkout\`拉取博客源代码，用的是\`actions/checkout@v2\`别人写好的 Action,\`with\`参数里注意\`ref: source\`是选择拉取 source 分支，\`persit-credentials:false\`是否缓存凭证：否，包作者推荐填\`false\`，不然可能出错。
- 接下来是\`Install and Build\`，即平时 vue 打包的操作，我先安装了\`yarn\`,再用\`yarn\`去\`install\`,因为\`npm install\`会出现\`core-js not found\`和\`fsevent.js\`相关问题，我也不知道为什么，本地都是 OK 的，总之\`yarn\`没有这些问题。
- 最后到了自动发布的步骤，使用了<a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank">JamesIves/github-pages-deploy-action</a>别人写好的 Action，\`with\`参数中：
\`ACCESS_TOKEN\`: 填写之前在仓库 Settings 里添加的密钥 access_token 的名字<br/>
\`BRANCH\`: 把打包后生成的最终代码发布到哪个分支：\`master\`<br/>
\`FOLDER\`: 最终打包的代码是在哪个文件夹里，vue-cli 在\`npm run build\`后会在根目录生成 dist 文件夹，所以填\`dist\`
\`CLEAN\`：如果打包生成的文件带有 hash 值，最好设置为 true,这样会自动删除旧的文件

### 6. 提交到 github

Github 会自动执行\`.github/workflow/\`下面的 yml 文件，如果出错会邮件通知你。

### 可能遇到的问题

1. 生成 access_token 密钥时，如果勾选了过多涉及安全的选项，GitHub 可能会自动把此密钥失效，失效后自动部署时会提示找不到 password 或 username,所以只需要勾选 repo 就行了。

### 参考

<a href="http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank">阮一峰 GitHub Actions 入门教程</a>

<a href="https://github.com/javaLuo/javaLuo.github.io" target="_blank">我的博客 GitHub 源代码</a>

  `;
})();
