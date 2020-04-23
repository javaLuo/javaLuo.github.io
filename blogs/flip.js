(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.flip = `
### 先看东西

![效果图](https://raw.githubusercontent.com/javaLuo/react-flip-animate/master/public/demo.GIF)

### FLIP(First-Last-Invert-Play)原理

共分为几个步骤

1. 记录元素们的当前位置信息
2. 改变数据，重新渲染
3. 元素此时会瞬间抵达最终位置，此时记录元素们的最终位置信息
4. 根据最终位置和初始位置的差值，设置元素的 transform，让元素看起来还保持在初始位置
5. 设置 tranistion, 再把元素们的 transform 取消掉
6. 元素们就会形成 transition 动画，最后回到最终位置

Github 地址： <a href="https://github.com/javaLuo/react-flip-animate" target="_blank">https://github.com/javaLuo/react-flip-animate</a>

### 比较关键得地方

1. 获取位置的时机

我用了\`getSnapshotBeforeUpdate\`，在数据改变后，但 DOM 还没更新时触发:

\`\`\`javascript
/** children被改变，但DOM还未更新时触发 **/
getSnapshotBeforeUpdate(prevProps, prevState) {
    // 判断状态，增加/减少/排序变了/没变
    const type = this.isValueChanged(prevProps.children, this.props.children);
    if (type) {
    // 有任何变化时，记录当前DOM的位置信息（FLIP的First阶段）
    this.first(this.ref.current ? Array.from(this.ref.current.children) : []);
    }
    return type;
}
\`\`\`

紧接着，React 更新了 DOM，会触发\`componentDidUpdate\`:

\`\`\`javascript
/** DOM已经被更新了 **/
componentDidUpdate(prevProps, prevState, type) {
    if (type) {
    // 记录最终位置并反转（FLIP的Last和Invert阶段）
    this.last(this.ref.current, type);
    // 最后是执行动画(FLIP的Play阶段)
    this.play(this.ref.current ? Array.from(this.ref.current.children) : []);
    }
}
\`\`\`

2. 几个主要函数

\`\`\`javascript
// 记录起始位置
first = doms => {
    const data = Object.create(null);
    doms.forEach((item, index) => {
    let no = item.getAttribute('data-flip-no');
    // 看当前DOM是否被编号，没被编号说明是新增的
    if (!no) {
        no = \`\${new Date().getTime()}_\${index}\`;
        item.setAttribute('data-flip-no', no);
    }

    // 如果有data-remove，表示这个元素正在被移除，则不再管理其状态
    // 只管理那些并非被移除的DOM
    if (!item.getAttribute('data-remove')) {
        data[no] = item.getBoundingClientRect();
        item.style.transform = 'translate(0,0)';
        item.style.webkitTransform = 'translate(0,0)';
    }
    });
    this.f = data; // 当前所有DOM的位置信息
    this.prevChildren = doms; // 当前所有的DOM对象本身，用与“减少”时clone被移除的DOM
};
\`\`\`

> 原理： 在 render 更新之前，把当前所有 DOM 的位置信息存入一个对象，把所有 DOM 对象也存入一个对象

\`\`\`javascript
// 记录结束位置并反转
last = (current, type) => {
    const doms = current ? Array.from(current.children) : [];

    doms.forEach((item, index) => {
    // 仅处理非被移除的DOM
    if (!item.getAttribute('data-remove')) {
        // 将它们的transition取消，让它们瞬间抵达最终位置
        item.style.transition = '';
        item.style.webkitTransition = '';
        let no = item.getAttribute('data-flip-no');
        // 获取这个DOM的最终位置信息
        const l = item.getBoundingClientRect();

        // DOM中存在未被编号的元素，表示这是一个新增的元素
        // 给新增的元素添加“进入”的动画状态
        if (!no) {
        no = \`\${new Date().getTime()}_\${index}\`;
        item.setAttribute('data-flip-no', no);
        if (this.props.transClass) {
            item.classList.add(\`\${this.props.transClass}-enter\`);
            item.style = '';
        } else {
            item.style.transform = \`translate(0, 20px)\`;
            item.style.webkitTransform = \`translate(0, 20px)\`;
            item.style.opacity = 0;
        }
        } else if (this.f[no]) {
        // 其他元素根据初始位置和最终位置反转，让它们看起来仍然在初始位置
        item.style.transform = \`translate(\${this.f[no].x - l.x}px, \${this.f[no]
    .y - l.y}px)\`;
        item.style.webkitTransform = \`translate(\${this.f[no].x - l.x}px, \${this
    .f[no].y - l.y}px)\`;
        delete this.f[no]; // 删掉已处理过的元素，剩下的元素表示需要被移除
        }
    }
    });
    if (type === 3) {
    // type === 3，表示这次操作是“减少”
    const keys = Object.keys(this.f); // this.f中剩下的都是需要被移除的元素

    for (let i = 0; i < keys.length; i++) {
        // this.prevChildren中保存着初始状态的所有元素，所以被移除的元素也在里面
        const willRemove = this.prevChildren.findIndex(item => {
        return item.getAttribute('data-flip-no') === keys[i];
        });
        if (willRemove >= 0) {
        // 获取到被移除的元素，将其添加到原本的位置，将定位方式改为absolute
        // （注）原本DOM在render更新后就已经不在了，这里是用之前保存的DOM重新插入到原本DOM所在的位置，假装原本DOM还在原来的位置
        const el = this.prevChildren[willRemove];
        current.insertBefore(el, doms[willRemove]);
        if (this.props.transClass) {
            el.style = '';
        }
        el.style.position = 'absolute';
        el.setAttribute('data-remove', true);
        // 为这个将被删除的元素添加事件，等动画结束后就真正的删除它
        el.addEventListener(
            'transitionend',
            (el.end = function cb() {
            el.removeEventListener('transitionend', cb);
            el.end = null;

            current.removeChild(el);
            }),
            false,
        );
        }
    }
    }
};
\`\`\`

> 原理： 在 render 更新之后，所有 DOM 已经被更新了，则：<br/>
> 去掉 transtion 过渡效果,让 DOM 瞬间抵达最终位置,<br/>
> 记录所有 DOM 的最终位置并反转<br/>
> 对于增加的新 DOM：设置初始状态，等 Play 阶段时，和其他 DOM 一起执行动画
> 对于减少的 DOM：因为 render 之后，减少的 DOM 就已经不在了，所以需要从 this.prevChildren（保存着初始态的所有 DOM 对象）中找到被移除的 DOM，然后把这个 DOM 重新插入到原本的位置，将其设置为 absolute 绝对定位。等到 Play 阶段时和其他 DOM 一起执行动画，动画完毕后再真正的删除

\`\`\`javascript
// 播放
play = doms => {
    setTimeout(() => {
    doms.forEach(item => {
        item.style.transition = \`opacity \${this.props.speed ||
          300}ms, transform \${this.props.speed || 300}ms\`;
        item.style.webkitTransition = \`opacity \${
          this.props.speed
        }ms, -webkit-transform \${this.props.speed || 300}ms\`;
    });
    setTimeout(() =>
        doms.forEach(item => {
        if (item.getAttribute('data-remove')) {
            if (this.props.transClass) {
            item.classList.add(\`\${this.props.transClass}-leave\`);
            } else {
            item.style.transform = 'translate(0,20px)';
            item.style.webkitTransform = 'translate(0,20px)';
            item.style.opacity = 0;
            }
        } else {
            if (this.props.transClass) {
            item.classList.remove(\`\${this.props.transClass}-enter\`);
            }
            item.style.transform = '';
            item.style.webkitTransform = '';
            item.style.opacity = 1;
        }
        }),
    );
    }, 16); // 给了个16ms，0的话效果有点奇怪，最后1个元素的动画总是会被浏览器自动省略掉
};
\`\`\`

> 原理：设置 transition, 再将所有 DOM 的 opacity 和 transform 取消掉，这样 DOM 们就会自动运行 transition 动画

3. 疯狂的触发动画，在上一次动画还没结束时，就又改变数据，导致下一次动画

关键在于运用了\`getBoundingClientRect\` API，这个 API 可以获取元素当前的实时位置，包括元素在 transition 过程中的位置变化也能获取到，所以才能在动画之间保持流畅

4. “减少”DOM 的处理

这里绑定了 transitionend 事件，用了具名的函数表达式

\`\`\`
    el.addEventListener(
    'transitionend',
    (el.end = function cb() {
    el.removeEventListener('transitionend', cb);
    el.end = null;
    current.removeChild(el);
    }),
    false,
);
\`\`\`

> addEventListener 原来还能这么传参。因为 cb 是具名的函数表达式，所以 cb 内部的所有 cb 都指向它本身<br/>
> 才能做到在其内部调用 removeEventListener，而不至于内存泄漏。<br/>
> 这招是在看 vue 源码里抄来的<br/>
> 唉，这水平的差距一下就出来了，大佬的背影让人望尘莫及。<br/>
> 如果没人告诉我，我是万不可能知道还能这么用的。

`;
})();
