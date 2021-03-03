(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.webgl1 = `
### 出现了几种变量类型
1. attribute 用于从外界获取类型化数组的数据，它将从缓冲区buffer中得到这些数据
2. uniforms 着色器中的全局变量，从外界设置一个值，在着色器程序中全局只读
3. textures 纹理类型的变量，从外界获取纹理
4. varyings 变量，在顶点着色器中读写它的值，在片元着色器中设置同名变量，可以只读这个值

### 着色器
\`\`\`glsl
<script type="x-shader/x-vertex">
  attribute vec4 a_position; // 属性变量 vec4 接受外部传入的顶点位置信息
  uniform vec2 u_resolution;  // 全局变量 vec2 接受外界传入的canvas画布信息

  void main() {
    // 下面这些方法转换canvas坐标到裁剪坐标
    vec2 zeroToOne = a_position.xy / u_resolution;
    vec2 clipSpace = zeroToOne * 2.0 - 1.0;
    // 这里垂直反转了一下坐标，因为webGL坐标原点在左下角，而canvas原点在左上角
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }
</script>

<script type="x-shader/x-fragment">
  precision mediump float; // 设置片元着色器数字精度， mediump是默认值
  uniform vec4 u_color; // 定义全局变量 vec4 从外界传入颜色

  void main(){
    gl_FragColor = u_color; // 设置当前像素的颜色
  }
</script>
\`\`\`

### 着色器内置变量
1. \`gl_Position\`, 决定当前顶点的最终位置
2. \`gl_FragColor\`, 决定当前像素的最终颜色

### 基本准备工作
\`\`\`js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

// 从html获取着色器代码
const vertexShaderSource = document.querySelector('script[type="x-shader/x-vertex"]').textContent;
const fragmentShaderSource = document.querySelector('script[type="x-shader/x-fragment"]').textContent;
\`\`\`

### 封装创建着色器的方法
\`\`\`js
/**
 * @param gl gl对象
 * @param type gl.VERTEX_SHADER 顶点着色器 / gl.FRAGMENT_SHADER 片元着色器
 * @param source 源代码
*/
function createShader(gl, type, source) {
  const shader = gl.createShader(type); // 创建着色器对象
  gl.shaderSource(shader, source); // 给shader提供数据源
  gl.compileShader(shader); // 编译shader
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS); // 返回shader的信息，gl.COMPILE_STATUS返回shader是否编译成功
  if (success) {
    return shader;
  }
 
  console.log(gl.getShaderInfoLog(shader)); // 输出shader的信息
  gl.deleteShader(shader); // 如果没编译成功，最后删除shader防止内存泄漏
}
\`\`\`

### 封装创建着色器程序（组装顶点着色器和片元着色器）的方法
\`\`\`js
/**
 * @param gl gl对象
 * @param vertexShader 顶点着色器
 * @param fragmentShader 片元着色器
*/
function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram(); // 创建一个新的着色器程序
  gl.attachShader(program, vertexShader); // 将顶点着色器装配进去
  gl.attachShader(program, fragmentShader); // 将片元着色器装配进去
  gl.linkProgram(program); // 链接着色器程序（将着色器链接到GPU中）
  const success = gl.getProgramParameter(program, gl.LINK_STATUS); // 返回program信息，gl.LINK_STATUS返回program时候链接成功
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program)); // 输出program的信息
  gl.deleteProgram(program);  // 如果没链接成功，则删除program防止内存泄漏
}
\`\`\`

### 画出三角形
\`\`\`js
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource); // 创建顶点着色器
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource); // 创建片元着色器

  const program = creaeProgram(gl, vertexShader, fragmentShader); // 将顶点着色器和片元着色器 组装成一个完整的着色器程序
  gl.useProgram(program); // 告诉GPU使用这一个着色器程序

  const positionBuffer = gl.createBuffer(); // 创建一个缓冲
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 将这个缓冲绑定到gl.ARRAY_BUFFER, 可以想象为缓冲区和GPU之间的一个链接点（驿站，中转站）
  const positions = new Float32Array([0,0,100,0,100]); // 准备放到缓冲中的顶点数据
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW); // 将顶点数据装配进缓冲中

  const positionAttributeLocation = gl.getAttribLocation(program, "a_position"); // 从program中查找'a_position'变量的句柄
  gl.enableVertexAttribArray(positionAttributeLocation);// attribute类型的变量需要先启用，启用后可以使用该属性的相关方法

  // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
  const size = 2; // 每次迭代运行提取两个单位数据
  const type = gl.FLOAT; // 每个单位的数据类型是32位浮点型
  const normalize = false; // 不需要归一化数据
  const stride = 0; // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）buffer中的步进偏移量
  const offset = 0; // 偏移量，从缓冲起始下标位置开始读取数组中的值
  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset); // 设置GPU读取a_position属性的方式

  const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution"); // 找到全局属性u_resolution的句柄
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height); // 给u_resolution属性传值

  const colorUniformLocation = gl.getUniformLocation(program, "u_color"); // 找到全局属性u_color的句柄
  gl.uniform4f(colorUniformLocation, 1,0,0,1); // 给u_color传值


  gl.viewport(0,0, gl.canvas.width, gl.canvas.height); // 重置webgl的渲染尺寸（分辨率）跟canvas的尺寸一致
  gl.clearColor(0, 0, 0, 0); // 清除颜色
  gl.clear(gl.COLOR_BUFFER_BIT); // 清除颜色缓冲区数据
  gl.drawArrays(gl.TRIANGLES, 0, 3);
\`\`\`

## 所有出现的API和值

#### gl.createShader(type)

**解释**<br/>
创建一个新的空的着色器<br/>
**参数**<br/>
type - 可选值：\`gl.VERTEX_SHADER\`顶点着色器 / \`gl.FRAGMENT_SHADER\`片元着色器<br/>
**返回值**<br/>
shader - WebGLShader对象

---

#### gl.shaderSource(shader, source)
**解释**<br/>
给shader装载着色器源代码<br/>
**参数**<br/>
shader - 着色器对象，通过gl.createShader()得到<br/>
source - 着色器源代码

---

#### gl.compileShader(shader)
**解释**<br/>
编译shader，一般跟在gl.shaderSource()之后<br/>
**参数**<br/>
shader - 着色器对象，通过gl.createShader()得到

---

#### gl.getShaderParameter(shader, pname)
**解释**<br/>
获取shader的相关信息，一般用于检测shader是否编译成功<br/>
**参数**<br/>
shader - 着色器<br/>
pname - \`gl.DELETE_STATUS\`查询着色器是否被标记为删除 / \`gl.COMPILE_STATUS\`查询着色器是否编译成功 / \`gl.SHADER_TYPE\`查询着色器是顶点(\`gl.VERTEX_SHADER\`)还是片元(\`gl.FRAGMENT_SHADER\`)<br/>
**返回值**<br/>
根据pname不同可能返回boolean值或着色器类型信息

---

#### gl.getShaderInfoLog(shader)
**解释**<br/>
输出着色器的信息日志，只有在编译错误或有警告时才有信息<br/>
**参数**<br/>
shader - 着色器<br/>
**返回值**<br/>
info - string类型的错误信息

---

#### gl.deleteShader(shader)
**解释**<br/>
删除着色器,释放内存。<br/>当该着色器正在使用或已链接到着色器程序时，只会标记为删除，当解除所有链接未被使用时，才会真正删除。<br/>
**参数**<br/>
shader - 着色器

---

#### gl.createProgram()
**解释**<br/>
创建一个新的空的着色器程序<br/>
**返回值**<br/>
program - WebGLProgram对象

---

#### gl.attachShader(program, shader)
**解释**<br/>
给program装载shader，一般需要调用两次，分别装配vertexShader和fragmentShader<br/>
**参数**<br/>
program - 着色器程序 WebGLProgram对象<br/>
shader - 着色器 WebGLShader对象<br/>

---

#### gl.linkProgram(program)
**解释**<br/>
将着色器程序链接到GPU上<br/>
**参数**<br/>
program - 着色器程序 WebGLProgram对象

---

#### gl.getProgramParameter(program, pname)
**解释**<br/>
检查program的状态信息<br/>
**参数**<br/>
program - 着色器程序 WebGLProgram对象<br/>
pname - <br/>
- \`gl.DELETE_STATUS\`：返回一个GLboolean, 指示程序是否已标记为删除。
- \`gl.LINK_STATUS\`：返回GLboolean, 指示上一次链接操作是否成功。
- \`gl.VALIDATE_STATUS\`：返回GLboolean, 指示上一次验证操作是否成功。
- \`gl.ATTACHED_SHADERS\`：返回一个GLint整数, 指示附加到program的着色器数量。
- \`gl.ACTIVE_ATTRIBUTES\`：返回GLint, 指示program中attribute类型变量的数量。
- \`gl.ACTIVE_UNIFORMS\`：返回GLint, 指示program中uniform全局变量的数量。
- \`gl.TRANSFORM_FEEDBACK_BUFFER_MODE\`: 仅WEBGL2.0, 返回缓冲模式, \`gl.SEPARATE_ATTRIBS\`或\`gl.INTERLEAVED_ATTRIBS\`
- \`gl.TRANSFORM_FEEDBACK_VARYINGS\`：仅WEBGL2.0，返回GLint, 指示在变换反馈模式下要捕获的varying类型变量的数量。
- \`gl.ACTIVE_UNIFORM_BLOCKS\`: 仅WEBGL2.0，返回GLint,指示uniform block的数量

**返回值**<br/>
根据pname返回对应信息

---

#### gl.getProgramInfoLog(program)
**解释**<br/>
输出program的报错和警告信息<br/>
**参数**<br/>
program - 着色器程序对象<br/>
**返回值**<br/>
info - string类型的错误信息

---

#### gl.deleteProgram(program)
**解释**<br/>
删除program，如果该program已链接或正在使用,则只会标记删除；待已解除和未使用时才会真正删除<br/>
**参数**<br/>
program - 着色器对象<br/>

---

#### gl.createBuffer()
**解释**<br/>
创建一个缓冲，一般用于把顶点信息传进着色器<br/>
**返回值**<br/>
buffer - WebGLBuffer对象

---

#### gl.bindBuffer(target, buffer);
**解释**<br/>
把buffer绑定到目标，这个目标可以理解为GPU和缓冲之间的中转站，buffer需要跟这个中转站绑定，才能传输数据<br/>
**参数**<br/>
target - <br/>
- \`gl.ARRAY_BUFFER\`: 包含顶点属性的缓冲区，例如顶点坐标，纹理坐标数据或顶点颜色数据,该中转站专门处理顶点相关数据
- \`gl.ELEMENT_ARRAY_BUFFER\`: 用于索引的中转站
- \`gl.COPY_READ_BUFFER\`: 仅WEBGL2.0, 用于从一个缓冲区复制数据到另一个缓冲区，只读。
- \`gl.COPY_WRITE_BUFFER\`: 仅WEBGL2.0, 用于从一个缓冲区复制数据到另一个缓冲区，只写。
- \`gl.TRANSFORM_FEEDBACK_BUFFER\`: 仅WEBGL2.0，用于转换反馈操作的缓冲区
- \`gl.UNIFORM_BUFFER\`: 仅WEBGL2.0，用于存储统一块的缓冲区。
- \`gl.PIXEL_PACK_BUFFER\`:仅WEBGL2.0，用于压缩像素传输操作的缓冲区。
- \`gl.PIXEL_UNPACK_BUFFER\`:仅WEBGL2.0，用于解压缩像素传输操作的缓冲区。

buffer - 缓冲

---

#### gl.useProgram(program)
**解释**<br/>
告诉GPU当前使用哪一个着色器程序。 GPU应该可以链接多个着色器程序，但在某一时刻需要具体指定使用哪一个<br/>
**参数**<br/>
program - 着色器程序

---

#### gl.getAttribLocation(program, name);
**解释**<br/>
获取着色器中某个变量的句柄，只有获取了句柄，外部才能调用相关方法给该句柄传值<br/>
**参数**<br/>
program - 着色器程序<br/>
name - 着色器中某自定义变量的变量名<br/>
**返回值**<br/>
一个整数，句柄值

---

#### gl.bufferData(target, typeArray, usage)
**解释**<br/>
将类型化数组数据传送给指定的中转站目标，该中转站再把数据装载进绑定的缓冲区<br/>
该方法有多个重载：<br/>
- \`void gl.bufferData(target, size, usage);\`
- \`void gl.bufferData(target, ArrayBuffer srcData, usage);\`
- \`void gl.bufferData(target, ArrayBufferView srcData, usage);\`
- \`void gl.bufferData(target, ArrayBufferView srcData, usage, srcOffset, length);\` 仅WEBGL2.0

**参数**<br/>
target - 目标<br/>
  - \`gl.ARRAY_BUFFER\`: 把数据传输给管顶点的中转站
  - \`gl.ELEMENT_ARRAY_BUFFER\`: 把数据传输给管索引的中转站
  - \`gl.COPY_READ_BUFFER\`:从一个缓冲区对象复制到另一个缓冲区对象的缓冲区。
  - \`gl.COPY_WRITE_BUFFER\`:从一个缓冲区对象复制到另一个缓冲区对象的缓冲区。
  - \`gl.TRANSFORM_FEEDBACK_BUFFER\`:转换反馈操作的缓冲区。
  - \`gl.UNIFORM_BUFFER\`:用于存储统一块的缓冲区。
  - \`gl.PIXEL_PACK_BUFFER\`:用于像素传输操作的缓冲区。
  - \`gl.PIXEL_UNPACK_BUFFER\`:用于像素传输操作的缓冲区。

size - 设置要传输给中转站的数据大小，单位bytes<br/>
srcData - 可选，ArrayBuffer或ArrayBufferView或SharedArrayBuffer类型的数据，不传则为空。一般为类型化数组，如: \`new Float32Array([1,2,3,4])\`<br/>
usage - 指定一种模式，为了优化性能<br/>
  - \`gl.STATIC_DRAW\`:内容被应用程序指定一次，并多次作为WebGL绘图和图像规范命令的源文件使用。用于不会更改的数据
  - \`gl.DYNAMIC_DRAW\`:内容被应用程序反复指定，并多次作为WebGL绘图和图像规范命令的源文件使用。用于经常改变的数据
  - \`gl.STREAM_DRAW\`:内容被应用程序指定一次，并且作为WebGL绘图和图像规范命令的源最多使用几次。流数据
  - \`gl.STATIC_READ\`:仅WEBGL2.0，通过从WebGL中读取数据指定一次内容，并由应用程序多次查询。
  - \`gl.DYNAMIC_READ\`:仅WEBGL2.0，通过从WebGL中读取数据来重复地重新指定内容，并由应用程序多次查询。
  - \`gl.STREAM_READ\`:仅WEBGL2.0，内容通过从WebGL读取数据来指定一次，应用程序最多查询几次
  - \`gl.STATIC_COPY\`:仅WEBGL2.0，通过从WebGL读取数据来指定内容，并多次作为WebGL绘图和图像规范命令的源文件使用。
  - \`gl.DYNAMIC_COPY\`:仅WEBGL2.0，通过从WebGL读取数据来重复指定内容，并多次作为WebGL绘图和图像规范命令的源文件使用。
  - \`gl.STREAM_COPY\`:仅WEBGL2.0，内容通过从WebGL读取数据来指定一次，最多使用几次作为WebGL绘图和图像规范命令的源。

srcOffset - GLuint, 偏移量，指定从srcData的哪一个下标开始读取数据<br/>
length - 可选，GLuint, 默认0

---

#### gl.enableVertexAttribArray(positionAttributeLocation)
**解释**<br/>
启动某个attribute类型的变量，attribute类型的变量需要先启用，启用后可以使用相关API<br/>
**参数**<br/>
positionAttributeLocation - 某个attribute变量的句柄，由\`gl.getAttribLocation()\`获取

---

#### gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
**解释**<br/>
设置attribute属性如何正确的获取缓冲区中转站的数据。<br/>
因为缓冲中的数据是一个类型化数组，有很多值，每一组值表示一个顶点，着色器需要运行很多次来分别处理每一个顶点，每一次运行时，attribute需要根据一定的设置来读取下一个顶点，有点像迭代器。<br/>
**参数**<br/>
positionAttributeLocation - attribute属性句柄，表示要设置这一个attribute变量<br/>
size - 整数，每次从数组中提取几个数据,只能是1,2,3,4其中之一，最大4<br/>
type - 数据的类型，比如缓冲区中是Float32Array的数据，通常就应该设置为\`gl.FLOAT\`<br/>
- \`gl.BYTE\`:带符号的8位整数，值为\`[-128,127]\`
- \`gl.SHORT\`: 16位有符号整数，值为\`[-32768,32767]\`
- \`gl.UNSIGNED_BYTE\`:无符号8位整数，值为\`[0,255]\`
- \`gl.UNSIGNED_SHORT\`:无符号16位整数，值为\`[0,65535]\`
- \`gl.FLOAT\`: 32位IEEE浮点数
- \`gl.HALF_FLOAT\`: 仅WEBGL2.0, 16位IEEE浮点数
  
normalized - GLboolean, 是否将值归一化，如果是\`gl.BYTE\`和\`gl.SHORT\`则归一化为\`[-1,1]\`, \`gl.UNSIGNED_BYTE\`和\`gl.UNSIGNED_SHORT\`归一化为\`[0,1]\`,\`gl.FLOAT\`和\`gl.HALF_FLOAT\`无影响。<br/>
stride - 步进值，默认0。当读取一组值后，下一次应该间隔多少个字节再继续读取，单位bytes，最大255<br/>
offset - 偏移量，首次读取时偏移多少个字节开始读数据，单位bytes，必须是该类型字节长度的整数倍

---

#### gl.getUniformLocation(program, name)
**解释**<br/>
获取某个uniform类型变量的句柄<br/>
**参数**<br/>
program - 着色器程序<br/>
name - 着色器中某个uniform变量的变量名<br/>
**返回值**<br/>
句柄值

---

#### gl.uniform2f(location, value1,value2)
**解释**<br/>
设置某个uniform变量的值，还有配套的方法，比如\`gl.uniform4f\`就需要传递4个值<br/>
**参数值**<br/>
location - uniform变量句柄<br/>
value1 - 值<br/>
value2 - 值

---

#### gl.viewport(x,y,width,height);
**解释**<br/>
设置视口分辨率，该方法指定x,y从标准化设备坐标到窗口坐标的映射。就是设置分辨率，一般设置成跟canvas实际大小一致。<br/>
canvas有个CSS大小，canvas自身还有个canvas.width/canvas.height属性，还有webgl的设置，这3者应该保持一致<br/>
这个方法可以用在改变浏览器窗口大小后调用<br/>
**参数**<br/>
x,y - webgl坐标系原点，默认是0，0 （左下角）<br/>
width,height - 非负数，默认值canvas的宽高<br/>
**例子**<br/>
\`gl.viewport(0,0,gl.canvas.widht, gl.canvas.height)\`

---

#### gl.clearColor(r,g,b,a)
**解释**<br/>
指定清除颜色缓冲区时使用的颜色，就是橡皮擦的颜色<br/>
**参数**<br/>
r,g,b,a - 4个通道值

---

#### gl.clearDepth(depth)
**解释**<br/>
设置清除深度缓冲区时的默认值<br/>
**参数**<br/>
depth - 深度值，默认1，可以使用\`gl.DEPTH_CLEAR_VALUE\`获取当前深度值

---

#### gl.clearStencil(s)
**解释**<br/>
设置清除深度缓冲区时的默认值<br/>
**参数**<br/>
s - 清除模板缓冲区时使用的索引，默认0，\`gl.STENCIL_CLEAR_VALUE\`获取当前模板索引值

---

#### gl.clear(mask);
**解释**<br/>
用预设值清除指定缓冲区的数据<br/>
**参数**<br/>
mask - <br/>
- gl.COLOR_BUFFER_BIT 颜色缓冲区
- gl.DEPTH_BUFFER_BIT 深度缓冲区
- gl.STENCIL_BUFFER_BIT 模板缓冲区
**例子**
可以一次清除多个缓冲区<br/>
\`gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)\`

---

#### gl.drawArrays(mode, first, count)
**解释**<br/>
设置好着色器，设置好缓冲区，设置好数据等等后，执行该方法根据缓冲区数组中的顶点数据绘制一帧到canvas上<br/>
**参数**<br/>
mode - 绘制的方式<br/>
  - \`gl.POINTS\`：绘制点,每个顶点被单独绘制出来
  - \`gl.LINE_STRIP\`：画一条直线到下一个顶点。所有的点将连起来形成一条折线
  - \`gl.LINE_LOOP\`：所有的点将连起来形成一条折线并且首尾相连。
  - \`gl.LINES\`：在一对顶点之间画一条线。每两个点连成一条线，像虚线。
  - \`gl.TRIANGLE_STRIP\`：三角形带，每3个点形成一个三角形，每一组的最后一个顶点点作为后一组的第1个顶点，最后形成连续的三角形
  - \`gl.TRIANGLE_FAN\`：三角形扇，第1个点作为公共顶点，和其他每两个顶点相连，像扇形。
  - \`gl.TRIANGLES\`：每三个顶点组成一个三角形

`;
})();
