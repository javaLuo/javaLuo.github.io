(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.glsl = `
# 所有数据类型

#### 标量

| 类型  | 定义       |
| ----- | ---------- |
| float | 浮点数     |
| int   | 整数       |
| uint  | 无符号整数 |
| bool  | 布尔       |

### 矢量

| 类型  | 定义                      |
| ----- | ------------------------- |
| vec2  | [float,float]             |
| vec3  | [float,float,float]       |
| vec4  | [float,float,float,float] |
| ivec2 | [int,int]                 |
| ivec3 | [int,int,int]             |
| ivec4 | [int,int,int,int]         |
| uvec2 | [uint,uint]               |
| uvec3 | [uint,uint,uint]          |
| uvec4 | [uint,uint,uint,uint]     |
| bvec2 | [bool,bool]               |
| bvec3 | [bool,bool,bool]          |
| bvec4 | [bool,bool,bool,bool]     |

> 矢量的分量选择

\`\`\`js
v.xyzw; // 表示坐标
v.rgba; // 表示颜色
v.stpq; // 表示纹理坐标
\`\`\`

### 矩阵

| 类型 | 定义      |
| ---- | --------- |
| mat2 | 2\*2 矩阵 |
| mat3 | 3\*3 矩阵 |
| mat4 | 4\*4 矩阵 |

### 取样器

| 类型                 | 定义                         |
| -------------------- | ---------------------------- |
| sampler1D            | 访问一维纹理                 |
| sampler2D            | 访问二维纹理，常用           |
| sampler3D            | 访问三维纹理                 |
| samplerCube          | 访问立方贴图纹理             |
| sampler2DRect        | 访问二维矩形纹理             |
| sampler1DShadow      | 访问带对比的一维深度纹理     |
| sampler2DShadow      | 访问带对比的二维深度纹理     |
| sampler2DRectShadow  | 访问带对比的二维矩形深度纹理 |
| sampler1DArray       | 访问一维纹理数组             |
| sampler2DArray       | 访问二维纹理数组             |
| sampler1DArrayShadow | 访问一维深度纹理数组         |
| sampler2DArrayShadow | 访问二维深度纹理数组         |
| samplerBuffer        | 访问纹理缓存                 |
| isampler1D           | 访问整型一维纹理             |
| isampler2D           | 访问整型二维纹理             |
| isampler3D           | 访问整型三维纹理             |
| isamplerCube         | 访问整型立方体贴图纹理       |
| isampler2DRect       | 访问整型二维矩形纹理         |
| isampler1DArray      | 访问整型一维纹理数组         |
| isampler2DArray      | 访问整型二维纹理数组         |
| isamplerBuffer       | 访问整型纹理缓存             |
| usampler1D           | 访问无符号整型一维纹理       |
| usampler2D           | 访问无符号整型二维纹理       |
| usampler3D           | 访问无符号整型三维纹理       |
| usamplerCube         | 访问无符号整型立方贴图纹理   |
| usampler2DRect       | 访问无符号整型二维矩形纹理   |
| usampler1DArray      | 访问无符号整型一维纹理数组   |
| usampler2DArray      | 访问无符号整型二维纹理数组   |
| usamplerBuffer       | 访问无符号整型纹理缓存       |

### 精度限定符

| 关键字  | 浮点数范围        | 定义                         |
| ------- | ----------------- | ---------------------------- |
| highp   | 正负 2 的 62 次幂 | 高精度，顶点用高精度         |
| mediump | 正负 2 的 14 次幂 | 一般精度，纹理坐标用一般精度 |
| lowp    | 正负 2 的 1 次幂  | 低精度，颜色用低精度         |

### 结构体

\`\`\`c++
// 声明自定义结构体
struct name{
    vec3 position;
    vec3 color;
}
// 使用
name n; // 定义了一个n变量，其类型为name
\`\`\`

### 数组

\`\`\`c++
// 声明数组
vec4 arrName[10]; // arrName是一个长度10的数组，类型为vec4
\`\`\`

### void

表示函数没有返回值，无其他用途

---

## 限定符

| 关键字     | 定义     | 说明                                                                                                       |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| attribute  | 属性     | 存放经常修改的数据，仅支持浮点数标量、浮点数矢量和矩阵。不支持整数、布尔、结构体、数组。只能用于顶点着色器 |
| uniform    | 全局变量 | 存放不经常修改的数据，全局共享，着色器中不能修改其值                                                       |
| varying    | 变量     | 顶点着色器向片段着色器传值的唯一方式，只能在顶点着色器里设置值，在片段着色器里只读                         |
| const      | 常量     | 不可更改，仅在其声明的着色器内有效                                                                         |
| 不写限定符 | 缺省     | 在当前着色器中可读可写，跟同类型的其他变量可交互                                                           |

\`\`\`c++
// 例子：完整声明一个变量
varying lowp vec4 color = vec4(0.0,0.0,0.0,1.0);
// 限定符 精度 类型 变量名 = 值
\`\`\`

---

## 指令（预处理）

| 指令        | 说明                                                                                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \#define    | 自定义一个宏：\#define PI 3.14; 宏可以跟一个公式：\#define add(x) ((x)+(x))                                                                                                 |
| \#undef     | 取消一个宏定义：\#undef PI                                                                                                                                                  |
| \#if        | 条件判断：\#if(A > 1) , 当满足条件时就编译下面的代码,否则下面的代码根本不会被编译到二进制里                                                                                 |
| \#elif      | 与\#if 配合使用，等于 else if                                                                                                                                               |
| \#else      | 与\#if 配合使用                                                                                                                                                             |
| \#endif     | 与\#if 配合使用，必须用此结束\#if                                                                                                                                           |
| \#ifdef     | 判断某个宏是否存在：\#ifdef PI                                                                                                                                              |
| \#ifndef    | 与\#ifdef 配合使用，必须用此结束\#ifndef                                                                                                                                    |
| \#error     | 抛出错误信息，写到当前着色器的日志里：\#error 报错了                                                                                                                        |
| \#pragma    | 控制某些内置功能：\#pragma debug(on) 开启调试模式， \#pragma optimize(off) 关闭优化                                                                                         |
| \#extension | 是否启用某些扩展功能：\#extension 扩展名 启用方式； require 若不支持则报错；enable 若不支持则警告；warn：检查所有使用到该扩展到地方并警告；disable 禁用扩展，若不支持则警告 |
| \#version   | 指定要使用的 GLSL 版本，必须写在最前面 \#version 100                                                                                                                        |

### 内置宏

| 宏名称          | 说明                                                                                    |
| --------------- | --------------------------------------------------------------------------------------- |
| \_\_LINE\_\_    | 表示当前代码中的行号                                                                    |
| \_\_FILE\_\_    | OpenGL ES 2.0 中始终为 0                                                                |
| \_\_VERSION\_\_ | 一个整数,指示当前的 glsl 版本. 比如 100 ps: 100 = v1.00                                 |
| GL_ES           | 如果当前是在 OPGL ES 环境中运行则 GL_ES 被设置成 1,一般用来检查当前环境是不是 OPENGL ES |

---

## 顶点着色器内置变量

| 变量名       | 类型          | 说明                                 |
| ------------ | ------------- | ------------------------------------ |
| gl_Position  | highp vec4    | 用于写入裁剪空间平面顶点坐标         |
| gl_PointSize | mediump float | 用于设置顶点栅格化后的大小，默认 1.0 |

## 片段着色器内置变量

| 变量名         | 类型   | 说明                                                              |
| -------------- | ------ | ----------------------------------------------------------------- |
| gl_FragColor   | vec4   | 用于写入当前像素的颜色,如果设置此值就不需要 gl_FragData           |
| gl_FragData    | vec4[] | 用于写入一组像素颜色,如果设置此值就不需要 gl_FragColor            |
| gl_FragCoord   | vec4   | 只读，存储了当前处理的像素窗口相对坐标 x,y,z,1/w ,z 是深度值      |
| gl_FrontFacing | bool   | 只读，当前处理的片段是正面还是背面，正面返回 true，背面返回 false |
| gl_PointCoord  | vec2   | 只读，当前片段所在点图元的二维坐标                                |

## uniform 状态变量

| 变量名        | 类型   | 说明                            |
| ------------- | ------ | ------------------------------- |
| gl_DepthRange | 结构体 | 表明全局深度范围{near,far,diff} |

## 全局内置常量

| 变量名                          | 类型 | 默认值 | 说明                                               |
| ------------------------------- | ---- | ------ | -------------------------------------------------- |
| gl_MaxVertexAttribs             | int  | 8      | 顶点着色器中能使用的 attributes 最大数量，不低于 8 |
| gl_MaxVertexUniformVectors      | int  | 128    | 顶点着色器中能使用的 uniform 数量，不低于 128      |
| gl_MaxVaryingVectors            | int  | 8      | 顶点着色器中能使用的 varying 数量，不低于 128      |
| gl_MaxVertexTextureImageUnits   | int  | 0      | 顶点着色器中能使用的纹理单元数，取决于设备         |
| gl_MaxCombinedTextureImageUnits | int  | 8      | 在整个着色器程序中能使用的纹理数，不低于 8         |
| gl_MaxTextureImageUnits         | int  | 8      | 片段着色器中能使用的纹理数，不低于 8               |
| gl_MaxFragmentUniformVectors    | int  | 8      | 片段着色器中能使用的 uniform 数量，不低于 8        |
| gl_MaxDrawBuffers               | int  | 1      | 可用的 buffer 数量                                 |

# 内置函数

### 三角函数

| 函数名       | 参数 | 返回值     | 说明             |
| ------------ | ---- | ---------- | ---------------- |
| radians(deg) | 度   | 弧度 float | 将度数转为弧度值 |
| degrees(rad) | 弧度 | 度 float   | 将弧度转为度     |
| sin(rad)     | 弧度 | float      | 求正弦值         |
| cos(rad)     | 弧度 | float      | 求余弦值         |
| tan(rad)     | 弧度 | float      | 求正切值         |
| asin(rad)    | 弧度 | float      | 求反正弦值       |
| acos(rad)    | 弧度 | float      | 求反余弦值       |
| atan(rad)    | 弧度 | float      | 求反正切值       |

### 指数函数

| 函数名         | 参数   | 返回值 | 说明                              |
| -------------- | ------ | ------ | --------------------------------- |
| pow(x,y)       | 值，幂 | float  | 求 x 的 y 次幂                    |
| exp(x)         | 幂     | float  | 求 e 的 x 次幂                    |
| log(x)         | 值     | float  | 求以 e 为底的对数 x               |
| exp2(x)        | 幂     | float  | 求 2 的 x 次幂                    |
| log2(x)        | 值     | float  | 求以 2 为底的对数 x               |
| sqrt(x)        | 值     | float  | 求 x 的平方根                     |
| inversesqrt(x) | 值     | float  | 求 x 的平方根的倒数，即 1/sqrt(x) |

### 通用函数

| 函数名                    | 说明                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------- |
| abs(x)                    | 求绝对值                                                                               |
| sign(x)                   | 符号函数，若 x 为负，返回-1.0, 为正返回 1.0, x===0 时，返回 0.0                        |
| floor(x)                  | 向下取整                                                                               |
| ceil(x)                   | 向上取整                                                                               |
| fract(x)                  | x - floor(x),即返回 x 的小数部分                                                       |
| mod(x,y)                  | x-y\*floor(x/y); 即求模运算                                                            |
| min(x,y)                  | 取较小值                                                                               |
| max(x,y)                  | 取较大值                                                                               |
| clamp(x,min,max)          | 若 x 比 min 小，就返回 min；若 x 比 max 大就返回 max，否则返回 x                       |
| mix(x,y,a)                | x(1-a)+ya;即 x 和 y 的线性混合                                                         |
| step(edge,x)              | 若 x 小于 edge，则返回 0,否则返回 1                                                    |
| smoothstep(edge0,edge1,x) | 若 x<=edge0 则返回 0，若>=edge1 返回 1，在这两个数之间时，采用平滑插值得到一个值并返回 |

### 几何函数

| 函数名                          | 说明                                                                |
| ------------------------------- | ------------------------------------------------------------------- |
| float length(T x)               | 返回向量 x 的长度                                                   |
| float distance(T p0,T p1)       | 返回 p0 和 p1 之间的距离                                            |
| float dot(T x,T y)              | 返回 x 和 y 的点积，点积就是两个向量每个分量分别相乘再全部求和      |
| vec3 cross(vec3 x,vec3 y)       | 返回 x 和 y 的叉积                                                  |
| T normalize(T x)                | 归一化，即返回一个方向与 x 相同，但长度为 1 的向量                  |
| T faceforward(T N, T I, T Nref) | 如果 dot(Nref,I)小于 0 则返回 N，否则返回-N                         |
| T reflect(T I, T N)             | 入射向量 I 表面法线 N，返回反射方向：I-2*dot(N,I)*N。N 必须归一化 |
| T refract(T I, T N, float eta)  | 入射向量 I，表面法线 N，折射率 eta, 返回折射向量                    |

### 矩阵函数

| 函数名                          | 说明                                               |
| ------------------------------- | -------------------------------------------------- |
| mat matrixCompMult(mat x,mat y) | 矩阵逐个相乘，即[i][j] = x[i][j]和 y[i][j]的标量积 |

### 矢量比较函数

| 函数名                            | 说明                                                |
| --------------------------------- | --------------------------------------------------- |
| bvec lessThan(vec x,vec y)        | x 是否比 y 小                                       |
| bvec lessThanEqual(vec x,vec y)   | x 是否小于等于 y                                    |
| bvec greaterThan(vec x,vec y)     | x 是否比 y 大                                       |
| bvec greateThanEqual(vec x,vec y) | x 是否大于等于 y                                    |
| bvec equal(vec x, vecy)           | x 是否等于 y                                        |
| bvec notEqual(vec x, vec y)       | x 是否不等于 y                                      |
| bool any(bvec x)                  | 如果 x 中任意分量为 true 则返回 true,否则 false     |
| bool all(bvec x)                  | 若 x 中所有分量都为 true 则返回 true,否则返回 false |
| bvec not(bvec x)                  | 返回 x 每个分量的补码                               |

## 纹理查找函数

### 只能在顶点着色器中使用的

\`\`\`c++
vec4 texture2DLod(sampler2D sampler, vec2 coord, float lod);
vec4 texture2DProjLod(sampler2D sampler, vec3 coord, float lod);
vec4 texture2DProjLod(sampler2D sampler, vec4 coord, float lod);
vec4 textureCubeLod(samplerCube sampler, vec3 coord, float lod);
\`\`\`

### 只能在片段着色器中使用的

\`\`\`c++
vec4 texture2D(sampler2D sampler, vec2 coord, float bias);
vec4 texture2DProj(sampler2D sampler, vec3 coord, float bias);
vec4 texture2DProj(sampler2D sampler, vec4 coord, float bias);
vec4 textureCube(samplerCube sampler, vec3 coord, float bias);
\`\`\`

### 顶点片段都能用的

\`\`\`c++
vec4 texture2D(sampler2D sampler, vec2 coord); // 常用
vec4 texture2DProj(sampler2D sampler, vec3 coord);
vec4 texture2DProj(sampler2D sampler, vec4 coord);
vec4 textureCube(samplerCube sampler, vec3 coord);
\`\`\`

### 相关资料

权威官方文档：https://www.opengl.org/documentation/glsl/
<br/>
权威民间金典新手教程：http://blog.csdn.net/racehorse
<br/>
一个具体完整的ＧＬＳＬ代码:http://www.ituring.com.cn/article/851
<br/>
GLSL简单介绍和全部内置变量：http://www.linuxgraphics.cn/opengl/shader_overview.html
<br/>
http://blog.csdn.net/kaixinbingju/article/details/14518387
<br/>
http://www.cnblogs.com/mazhenyu/p/3804518.html
<br/>
百度文库完整PPT：http://wenku.baidu.com/link?url=KUUhkIFpxtJOptnaFccKEWqOJw-yvnLoYGdkiwmYW0mnRpoSENQrk6TVst1_rHZJM_2sBh61H5tKX8pbNFyImM_ObOSrMDnp9LD2bqYjjCi
<br/>
百度文库入门WORLD教程：http://wenku.baidu.com/link?url=wokPChPUUK9nuFTefB0WgxOK7ZGsfLMSRZ8JjXrB7mHR063L61GUkpWrNe7I58peo5dt6fdLVIfLoEvh5nNHRdedcKZl0qMZzwLSzD6Nj5e
<br/>
http://wenku.baidu.com/view/be62e6bcf121dd36a32d824c.html?re=view
<br/>
http://wenku.baidu.com/view/518048d528ea81c758f57800.html
<br/>
GLSL语言语法基础：http://my.oschina.net/sweetdark/blog/208024#OSC_h3_12
  `;
})();
