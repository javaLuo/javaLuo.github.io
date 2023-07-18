# relai

#### 介绍
本项目为RelAI的前端应用，使用框架为VUE3，脚手架为Vite4，全局状态管理使用的为VUEX。用户的留言分为：
1. happy;
2. blank;
3. angry;
4. down;

#### 开发环境

```bash
yarn dev
```
#### 代码风格规范化
```bash
pnpm add eslint -D
pnpm eslint --init
# 生成.eslintrc.cjs
pnpm lint
# 执行代码风格校验
```
为方便开发环境中的代码规范，在VScode中安装**ESLint**,右键ESLint的图标，选择扩展设置(Extension Settings)。在新窗口中选择**工作区(WorkSpace)** tab,下拉
右侧滚动条找到**Edit in settings.json**,粘贴如下配置：

```json
{
    "editor.formatOnType": true,
    "editor.formatOnSave": true, 
    "eslint.codeAction.showDocumentation": {
      "enable": true
    },
    "editor.codeActionsOnSave": { 
      "source.fixAll.eslint": true,
    },
    "eslint.validate": [
      "javascript",
      "html",
      "vue"
    ],
}
```

保存成功够项目中会出现`.vscode`文件夹，即配置成功。