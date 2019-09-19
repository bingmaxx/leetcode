# 快速排序

## 思路  


## javascript 实现 
```js
/**
 * desc: 快速排序
 * input:
 * @param {Array} list 完整的待排序数组
 * @param {Number} min 数组待分区部分下标最小值
 * @param {Number} max 数组待分区部分下标最大值
 */
function quick_sort(list, min, max) {
  if (min >= max) return;

  const p = partition(list, min, max);
  quick_sort(list, min, p - 1);
  quick_sort(list, p + 1, max);
}

/**
 * desc: 分区函数, 将数组从下标 min 到 max 之间的数据分区并返回 p
 * input:
 * @param {Array} list
 * @param {Number} min
 * @param {Number} max
 * output:
 * @param {Number} p 分区之后分区点数据所在下标
 */
function partition(list, min, max) {
  const pivot = list[max];

  // i 相当与慢指针，将小于 pivot 的数据交换至此
  let i = min;
  for (let j = min; j <= max; j++) {
    if (list[j] <= pivot) {
      const temp = list[j];
      list[j] = list[i];
      list[i] = temp;
      i++;
    }
  }

  return i - 1;
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
  quick_sort(list, 0, list.length - 1);
  console.log('打印list: ', list);
});
```

### 时间复杂度


### 空间复杂度


### 是否原地排序？


### 是否稳定排序？


