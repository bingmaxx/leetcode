# 选择排序

## 思路  
与插入排序类似，分为 **已排序区间** 和 **未排序区间**，遍历未排序区间，将其中最小的数据交换至未排序区间开头，每次遍历结束，未排序区间长度减 1，直至未排序区间长度为 0，排序完成。

## javascript 实现 
```js
/**
 * desc: 选择排序
 * input:
 * @param {Array} list
 */
function func(list) {
  if (list.length <= 1) return;

  for (i = 0; i < list.length - 1; i++) {
    let value = list[i];
    // 未排序区间最小值的下标
    let index = i;

    // j 在未排序区间从前往后移动
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[index]) {
        index = j;
      }
    }
    
    list[i] = list[index];
    list[index] = value;
  }
}

/**
 * 测试
 */
const testList = [
  [0, 12, 15, 18, -2, 3, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 6, 5, 4, 3, 2, 1],
];
testList.forEach(list => {
  func(list);
  console.log('打印list: ', list);
});
```

### 时间复杂度
一共进行 `n - 1` 次选取最小值的操作，选出最小值后做一次数据交换即可。每次从未排序区间选取最小值的时间复杂度是 $O(n)$，由于未排序区间长度递减，因此总的操作次数为等差数列，最终时间复杂度为 $O(n^2)$。

选取最小值的操作不受数据有序度影响，因此最好、最坏、平均情况复杂度相同，皆为  $O(n^2)$。

### 空间复杂度
没有产生新数组，空间复杂度为：$O(1)$。

### 是否原地排序？
空间复杂度为 $O(1)$，是原地排序。

### 是否稳定排序？
数据交换操作会改变元素位置，不是稳定排序。

