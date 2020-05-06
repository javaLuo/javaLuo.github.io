(function () {
  if (!window.blogs) {
    window.blogs = {};
  }
  window.blogs.algorithm = `
##
* 时间复杂度：执行所耗费的时间
* 空间复杂度：执行所占用的内存大小
* 稳定性：如a=b，a在b的前面，排序后a仍然在b前面，则稳定

### 冒泡排序
* 平均时间复杂度O(n*n)
* 最好情况O(n)
* 最坏情况O(n*n)
* 空间复杂度O(1)
* 稳定性：稳定
\`\`\`javascript
function sort(arr){
	for(let i=0;i<arr.length;i++) {
		for(let j=0;j<arr.length-1-i;j++) {
			if(arr[j]>arr[j+1]) {
				arr[j] = arr[j]^arr[j+1];
				arr[j+1] = arr[j]^arr[j+1];
				arr[j] = arr[j]^arr[j+1];
			}
			
		}
	}
	return arr;
}
\`\`\`

### 快速排序 阮一峰版
\`\`\`javascript
function sort(arr){
		if(arr.length<=1){return arr};

		const center = arr.splice(Math.floor(arr.length/2),1)[0];
		let left = [];
		let right = [];
		for(let i=0;i<arr.length;i++){
			if(arr[i]<center){
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return sort(left).concat([center], sort(right));
	}

const arr1 = [4,3,2,1,5];
const arr2 = sort(arr1); // [1,2,3,4,5];
\`\`\`

### 快速排序 不创建临时数组版
\`\`\`javascript
function quickSort(arr, start = 0, end = arr.length - 1) {
    let i = start;
    let j = end;
    let key = arr[i]; //存放基准数
    while(i<j){
        while(j>i){
            if(arr[j]<key){
                arr[j] = arr[j]^arr[i];
                arr[i] = arr[j]^arr[i];
                arr[j] = arr[j]^arr[i];
                break;
            } else{
                j--;
            }
        }
        
        while(i<j){
            if(arr[i]>key){
                arr[j] = arr[j]^arr[i];
                arr[i] = arr[j]^arr[i];
                arr[j] = arr[j]^arr[i];
                break;
            } else{
                i++;
            }
        }
    }
    // 递归处理左边
    quickSort(arr, start, i - 1);
    // 递归处理右边
    quickSort(arr, i + 1, end);
}

const arr1 = [4,3,2,1,5];
quickSort(arr1); // [1,2,3,4,5]
\`\`\`

### 二分法查找
\`\`\`javascript
/**
 * \`param arr 数组
 * \`param res 要查找的数
**/
function find(arr, res, start = 0, end = arr.length - 1){
	const centerKey = Math.floor((end + start)/2);
	const centerValue = arr[centerKey];
	if(res<centerValue && start < centerKey){
		return find(arr, res, start, centerKey - 1);
	} else if (res>centerValue && end > centerKey){
		return find(arr, res, centerKey + 1 , end);
	} else if(res === centerValue){
		return centerKey;
	} else {
		return null;
	}
}
const arr = [1,2,3,4,5,6,7,8,9,10];
find(arr, 4); // 下标为3
\`\`\`

## 深拷贝
\`\`\`javascript
function clone(obj){
		if(typeof obj !== "object"){
			return obj;
		}
		const newobj = obj.constructor === Array ? [] : {};
		for(let p in obj){
			newobj[p] = typeof obj[p] === "object" ? clone(obj[p]) : obj[p];
		}
		return newobj;
	}

// 简单深拷贝，没处理原型链，没处理循环引用
\`\`\`

## 暴力深拷贝
\`\`\`javascript
JSON.parse(JSON.stringify(obj));
\`\`\`

## 手动实现parseInt
\`\`\`javascript
function _parseInt(str){
		const arr = str.split("");
		const temp = [];
		for(let i=0;i<arr.length;i++){
			const char = arr[i].charCodeAt();
			console.log(char);
			if(char <=57 && char >= 48){
				temp.push(arr[i]);
			} else{
				break;
			}
		}
		console.log("temp:", temp);
		let res = 0;
		for(let i=0; i<temp.length;i++){
			res += temp[i] * Math.pow(10, temp.length - 1 - i);
		}
		return res || NaN;
	}
// 只实现了一个十进制版本的
\`\`\`

## 判断字符串是否是回文（前后对称）
\`\`\`javascript
function isPalindrome1(str){
	return str === str.split("").reverse().join("");
}
\`\`\`

## 阶乘(循环)
\`\`\`javascript
function factorial(num){
	// 先自动转数字、转整数。再判断数字的正负，负数无阶乘、 0的阶乘=1
	let res = Number(num<<0) >= 0 ? 1 : NaN;
	for(let i=num;i>1;i--){
		res *= i;
	}
	return res;
}

factorial(4.123); // 24
factorial(0); // 1
factorial(-1); // NaN
\`\`\`

## 阶乘（递归）
\`\`\`javascript
function factorial(num, res=1){
	const n = Number(num<<0);
	if(Object.is(n, NaN) || n<0){
		return NaN;
	}
	if(n<=1){
		return res;
	}
	return factorial(n - 1, n * res);
}

factorial(4.123); // 24
factorial(0); // 1
factorial(-1); // NaN
\`\`\`

## 字符串中出现最多的字符
\`\`\`javascript
function maxNum(str){
	const obj = str.split("").reduce((res, item)=>{
		res[item] = res.hasOwnProperty(item) ? ++res[item] : 1;
		return res;
	}, {});
	return Object.entries(obj).sort((a,b)=>b[1]-a[1])[0];
}

maxNum("abbcccdddd"); // ["d", 4]
\`\`\`

## 数组扁平化（暴力方式）
\`\`\`javascript
var arr = [1,[2,3],[4,[5,6]]];
arr.toString().split(",");
// 但会把所有数组元素变成字符串
\`\`\`

## 数组扁平化
\`\`\`javascript
function flatten(k) {
	let t = [];
	if(k instanceof Array){
		k.forEach((item)=>{
			t = [...t, ...flatten(item)];
		})
	} else {
		t = [k];
	}
	return t;
}

flatten([1,[2,3],[4,[5,6,[7]]]]); // [1,2,3,4,5,6,7];
\`\`\`

## 防抖函数
\`\`\`javascript
function debounce(func, delay) {
	let timeout;
	return function(e) {
			clearTimeout(timeout)
			let args = arguments;
			timeout = setTimeout(() => {
				func.apply(this, args);
			},delay);
	}
}

// 使用

const validate = debounce(function(e) {
	console.log(e.target.value);
}, 380);

document.querySelector("input").addEventListener('input', validate);
\`\`\`
`;
})();
