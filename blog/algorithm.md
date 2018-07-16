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
```
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
```

### 快速排序 阮一峰版
```
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
```

### 快速排序 不创建临时数组版
```
function quickSort(arr, start, end) {
	    if (start > end) {
	        return;
	    }
	    let i = start,
	        j = end,
	        pivot = arr[start]; //存放基准数
	    while (i !== j) {
	        // 从右边开始，找第一个小于基准的位置
	        while (arr[j] >= pivot && i < j) {
	            j--;
	        }
	        // 从左边开始，找第一个大于基准的位置
	        while (arr[i] <= pivot && i < j) {
	            i++
	        }
	        // 交换两个数
	        if (i < j) {
	            let tmp = arr[i];
	            arr[i] = arr[j];
	            arr[j] = tmp;
	        }
	    }
	    // 最后把基准数归位
	    arr[start] = arr[i];
	    arr[i] = pivot;
	    // 递归处理左边
	    quickSort(arr, start, i - 1);
	    // 递归处理右边
	    quickSort(arr, i + 1, end);
	}

const arr1 = [4,3,2,1,5];
quickSort(arr1); // [1,2,3,4,5]
```

### 二分法查找
```
function find(arr, res, start, end){
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
find(arr, 4, 0 ,arr.length - 1); // 下标为3
```

## 深拷贝
```
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
```

## 手动实现parseInt
```
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
```