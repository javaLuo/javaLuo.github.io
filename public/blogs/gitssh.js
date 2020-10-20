(function () {
    if (!window.blogs) {
      window.blogs = {};
    }
    window.blogs.gitssh = `
### 1. 安装Git客户端
<a href="https://git-scm.com/downloads" target="_blank" rel="nofollow noreferrer">https://git-scm.com/downloads</a> <br/>
下一步，下一步，下一步...

### 2. 打开Git客户端
安装成功后在桌面鼠标右键，会看到\`Git Bash Here\`, 点击打开Git终端

### 3. 依次执行以下命令
- \`cd ~/.ssh/\`; 进入C盘的.ssh文件夹，如果运行后提示\`No such file or directory\`，表示该文件夹不存在，需要执行下面一个命令：<br/>

- \`mkdir ../.ssh\`; 创建.ssh文件夹 <br/>

- \`git config --global user.name "这里填你的昵称"\`; 设置提交时的昵称<br/>

- \`git config --global user.email "这里输入你的邮箱"\`; 跟Github账号邮箱保持一致就行

- \`ssh-keygen -t rsa -C "再一次输入你的邮箱"\`; 创建rsa key

### 4.查看Key
会在\`C:\用户\\用户名\\.ssh\`目录下生成两个文件：\`id_rsa\`和\`id_rsa.pub\`;<br/>
其中\`id_rsa.pub\`为公钥，用记事本打开，把里面的内容配置到GitHub Settings中，就可以了。

`;
  })();
  