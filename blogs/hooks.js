(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.hooks = `
### 一、函数式组件格式

\`\`\`
    export default function 组件名字(props, ref){
        return <div>...</div>;
    }
\`\`\`
> 第1个参数是父级传来的props<br/>
> 第2个参数是父级传来的ref对象，用于把自身的dom对象传递给父级使用(forwardRef),用得不多<br/>
> 必须要有函数名，不能是匿名函数

### 二、3个基本Hook

**1. useState**

\`\`\`
const [count, setCount] = useState(0);
\`\`\`
> 定义了count变量<br/>
> 定义了setCount方法，用于设置count的值<br/>
> useState可接受一个参数或函数用于设置count的初始值

例子：
\`\`\`
export default function Container(props){
    const [count, setCount] = useState(0);

    return {
        <>
            <button onClick={() => setCount(count+1)}>count加1</button>
            <button onClick={() => setCount(prev => prev+1)}>也可以这样，prev就是count的当前值</button>
        </>
    }
}
\`\`\`

* 当useState的参数是一个函数时，表示惰性延迟设置初始值
\`\`\`
const [count, setCount] = useState(()=>{
    const initValue = someExpensiveComputation(props); // 经过一些耗时的计算
    return initValue;
});
\`\`\`

**2. useEffect**
\`\`\`
useEffect(()=>{},[]);
\`\`\`
> 用于捕获状态的更新，相当于componentDidMount/componentDidUpdate,在render完毕**之后**才会触发

例子：
\`\`\`
export default function Container(props){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = \`count = \${count}\`;
    });

    return <button onClick={() => setCount(count+1)}>count加1</button>;
}
\`\`\`

> 当组件首次加载完毕就会直接执行一次，相当于componentDidMount<br/>
> 每次组件重新render，都会执行一次，相当于componentDidUpdate<br/>

* useEffect第2个参数接受一个数组
\`\`\`
useEffect(()=>{
    document.title = \`count = \${count}\`;
},[count]);
\`\`\`
> 表示只有在count改变时才会触发<br/>
> 如果传一个空数组，那就表示不监听任何值的变化，只有在组件首次加载和组件卸载时才会触发，相当于componentDidMount和componentWillUnmount<br/>
> 但若什么都不传，则每次render都会触发

* useEffect还能设置一个return返回值
\`\`\`
useEffect(()=>{
    document.title = \`count = \${count}\`;
    return () => {
        document.title = '首页';
    }
},[count]);
\`\`\`
> 即组件卸载时会执行return的方法
> **操蛋的地方：**，实际上每次count改变，return的方法都会被触发一次
> 正确做法是分开写：

\`\`\`
useEffect(()=>{
    document.title = \`count = \${count}\`;
},[count]);

useEffect(()=>{
    return () => document.title = '首页';
},[]); // 传一个空数组

\`\`\`

**3. useContext**

\`\`\`
const context = useContext(FatherContext);
\`\`\`

> 接受Context对象,得到的context里面就包含了所有父辈级传来的context值
> 并且父辈的值改变了也会保持同步

例子：
\`\`\`
// 定义公共ThemeContext.js
const ThemeContext = React.createContext({
    theme: "dark",    // 初始皮肤：黑色
});

// 父级.js
import ThemeContext from "./ThemeContext.js";
export default function Father(){
    return (
        <ThemeContext.Provider value={...}>
            ...
        </ThemeContext.Provider>
    )
}

// 孙子级.js
import ThemeContext from "../../ThemeContext.js";
export default function Grandchildren(){
    const context = useContext(ThemeContext);
    context.theme; // "dark"
}
\`\`\`

### 三、额外的内置Hook

**1. useReducer**
\`\`\`
const [state, dispatch] = useReducer(reducer, initialArg, init);
\`\`\`
> 简单的实现redux功能，不过要想代替redux我觉得还得好好研究研究

例子：
\`\`\`
// 定义初始值对象
const initState = {
    count: 0,
    userinfo: null,
    
}

// 定义一个方法作为reducer:
function reducer(state, action){
    switch(action.type){
        case 'add':
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case 'setUserInfo':
            return Object.assign({}, state, action.userInfo);
        default: return state;
    }
}

// 在组件中使用, 第1个参数接受reducer方法，第2个参数接受初始值
export default function Container(){
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            <button onClick={() => dispatch({type: 'add'})}>count增加</button>
            <button onClick={() => dispatch({type: 'add', payload: {id: 1, username: '小明'}})}>设置用户信息</button>
        </>
    )
}
\`\`\`

* useReducer还接受第3个参数，表示延迟初始化state的初始值
\`\`\`
const [state, dispatch] = useReducer(reducer, params, init);

// 上面的第2个参数会自动传递给init
function init(params){
    return ...
}
\`\`\`

**2. useCallback**
\`\`\`
const callback = useCallback(
    () => a+b,
    [a, b]
);
\`\`\`
> 这已经很像vue的计算属性了，只不过返回值是一个函数，你需要自行调用<br/>
> 当a或b有任何变化时才会触发一次

**3. useMemo**
\`\`\`
const value = useMemo(
    () => a+b,
    [a, b]
);
\`\`\`
> 这就是vue的计算属性，只有当a或b有变化时才会重新计算<br/>
> 否则value值是直接取缓存的值

**4. useRef**
\`\`\`
    const ref = useRef(initDom);
\`\`\`
> 用来设置ref的
> initDom可选，可以指定某个dom元素（ref.current属性会初始化为这个dom元素）或不填

例子：
\`\`\`
export default function Contanier(){
    const ref = useRef();

    return <div ref={ref}></div>
}
\`\`\`

***5. useImperativeHandle**
\`\`\`
useImperativeHandle(ref, createHandle, [inputs])
\`\`\`
> 这是用来配合传递ref的，就是父级可以获取到子级的ref

例子：
\`\`\`
// 父级组件 father.js
export default function Father(){
    const Ref = useRef();

    return (
        <div>
            <Son ref={Ref} />
        </div>
    )
}
    
// 子级组件 son.js
function Son(props, ref){ // 这里的ref就是父级传进来的ref
    const SonRef = useRef();
    useImperativeHandle(ref, ()=>{ // 向父级ref中绑定各种对子级的操作
        focus: ()=> SonRef.current.focus();
    });
    return <input ref={SonRef} />
}

export default React.forwardRef(Son); // 注意此处必须用forardRef包装为可传递的组件
\`\`\`

**6. useLayoutEffect**

> 跟useEffect一样，只不过这个是同步的，会阻塞渲染<br/>
> 使得可以让我们在dom更新后立即获得dom的最新数据，不然就得等nextTick
> 但通常useEffect用得更多

**7. useDebugValue**

\`\`\`
useDebugValue('Hello World');
\`\`\`
> 用于 react devtools 插件，会在devtools中的对应位置加上label
> 但我试了一下，没找到加在哪了... 算了，估计我也不怎么用这个


### 参考：

<a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">官方hooks文档</a>

以上就是React16.8正式上线的所有hooks<br/>
目前我也在着手研究跟redux的配合，或许是否能替换掉redux
  `;
})();
