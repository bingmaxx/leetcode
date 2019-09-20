# 二分查找

## 思路  
在一组完全有序的数据中，查找给定数据的位置。将数据分成左分区、分区点、右分区（左右分区长度一致），如果分区点不是给定数据，则在剩下的分区其中之一重复此操作。直到找到给定数据或者分区长度小于 0。

```js
/**
 * 查找有序数组 list 中值为 num 的元素下标
 */
function func(list, num) {
  return binary_search(list, 0, list.length - 1, num);
}

/**
 * desc: 二分查找
 * input:
 * @param {Array} list 完全有序的数组
 * @param {Number} min 待查找分区下标最小值
 * @param {Number} max 待查找分区下标最大值
 * @param {Number} num 待查找的数据
 * output:
 * @param {Number} mid 待查找数据的下标，不存在返回 -1
 */
function binary_search(list, min, max, num) {
  if (min > max) return -1;

  // 小技巧: 等价于(max + min)/2, 可以防止 max + min 过大
  let mid = parseInt(min + (max - min) / 2);
  if (list[mid] === num) return mid;
  
  if (list[mid] < num) {
    return binary_search(list, mid + 1, max, num);
  } else {
    return binary_search(list, min, mid - 1, num);
  }
}

/**
 * 测试
 */
const testList = [
  [-8, -2, 0, 1, 6, 19, 22, 77, 99, 100, 120],
  [1, 2, 3, 4, 5, 6, 7],
];
testList.forEach(list => {
  const index = func(list, 6);
  console.log('打印 index: ', index);
});
```

### 时间复杂度
最好情况时间复杂度为：$O(1)$。
最坏情况时间复杂度为：$O(logn)$。


### 注意
- 数据必须有序，否则需要先对数据排序。
- 需要按照下标随机访问元素，因此数据结构需要是数组。


