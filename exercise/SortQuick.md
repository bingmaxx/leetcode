# 快速排序

## 思路  
快排用到了分治的思想，使用递归来实现，**分治是一种解决问题的处理思想，递归是一种编程技巧**。  
在一组数据中选择一个分区点 `pivot`，将数据分为小于 pivot 的左分区、pivot 自身、大于 pivot 的右分区（此过程由分区函数完成）。  
对左分区、右分区重复执行上述过程，直到所有分区区间长度为 1，排序完成。


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
？

### 空间复杂度
取决于分区函数，此代码中，分区的过程没有使用新的数组，空间复杂度为 $O(1)$。

### 是否原地排序？
空间复杂度为 $O(1)$，是原地排序。

### 是否稳定排序？
取决与分区函数，此代码中，相同的元素，靠前的交换之后依旧靠前，是稳定排序。

