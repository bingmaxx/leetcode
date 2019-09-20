# 归并排序

## 思路  
将一组数据分为数目相同的左分区、右分区，对左分区、右分区重复执行此过程，直至分区数据完全有序（只有一个数据）。  
使用 mergr 函数，将完全有序的两个分区合并为完全有序的一个分区，重复此过程，直至递归结束，排序完成。

## javascript 实现 
```js
/**
 * desc: 递归，将list 数组最终分解为一个元素，即 min = max
 * input:
 * @param {Array} list 待排序的完整数组
 * @param {Number} min 分解后区间最小坐标
 * @param {Number} max 分解后区间最大坐标
 */
function merge_sort(list, min, max) {
  if (min >= max) return;

  // middle 为区间中间元素坐标（在分解后的第一个区间）
  let middle = parseInt((min + max) / 2);
  merge_sort(list, min, middle);
  merge_sort(list, middle + 1, max);
  return merge(list, min, max, middle);
}

/**
 * desc: 双指针法将两个有序数组合并为一个有序数组
 * input:
 * @param {Array} list 数组下标从 min 到 middle 有序，从 middle+1 到 max 有序
 * @param {Number} min 
 * @param {Number} max 
 * @param {Number} middle 
 */
function merge(list, min, max, middle) {
  let i_0 = min;
  let i_1 = middle + 1;
  let temp = [];

  for (let k = 0; k < max - min + 1; k++) {
    if (i_0 <= middle && i_1 <= max) {
      if (list[i_0] <= list[i_1]) {
        temp.push(list[i_0]);
        i_0++;
      } else {
        temp.push(list[i_1]);
        i_1++;
      }
    } else {
      break;
    }
  }

  if (i_0 > middle) {
    for (let k = i_1; k <= max; k++) {
      temp.push(list[k]);
    }
  }

  if (i_1 > max) {
    for (let k = i_0; k <= middle; k++) {
      temp.push(list[k]);
    }
  }

  for (let k = 0; k < temp.length; k++) {
    list[k + min] = temp[k];
  }
}

/**
 * 测试
 */
const testList = [
  [0, 12, 15, 18, -2, 3, 7, 10],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 6, 5, 4, 3, 2, 1],
];
testList.forEach(list => {
  merge_sort(list, 0, list.length - 1);
  console.log('打印list: ', list);
});
```

### 时间复杂度
不管数据是否有序，时间复杂度一致。
？

### 空间复杂度
取决于 merge 函数，需要使用新的数组，最大数组长度与数据量 n 一致，空间复杂度为 $O(n)$。

### 是否原地排序？
空间复杂度为 $O(n)$，不是原地排序。

### 是否稳定排序？
取决与 merge 函数，此代码中 merge 没有改变相同元素的位置，是稳定排序。

