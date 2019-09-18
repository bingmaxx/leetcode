# 冒泡排序

## 思路  
将相邻的数据两两比较，不满足条件则交换位置，一次冒泡可以完成一个数据的排序，最多 n 次冒泡完成全部数据排序。

## javascript 实现 1
```js
/**
 * desc: 冒泡排序
 * input:
 * @param {Array} list
 */
function func(list) {
  if (list.length <= 1) return;

  for (let i = 0; i < list.length - 1; i++) {
    // 完成冒泡的数据不再参与交换
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  // console.log(list);
}

/**
 * 测试
 */
const testList = [
  [0, 12, 15, 18, -2, 3, 7],
  [0, 0, 0, -1, -1, 12, 9, 9],
];
testList.forEach(list => {
  func(list);
});
```

### 时间复杂度
不管数据是否有序，循环的次数相同。数据有序，交换的次数减少，粗略认为最好、最坏时间复杂度相同。
总共进行 `n - 1` 次冒泡；
每次冒泡比较的次数：`n - 1`、`n - 2` ... `1`;

$ S = \frac {((n - 1) + 1) * (n - 1)} {2} = \frac 1 2 n^2 - \frac 1 2 n $

时间复杂度为：$O(n^2)$。

### 空间复杂度
采用交换，没有产生新数组，空间复杂度为：$O(1)$。

### 是否原地排序？
空间复杂度为 $O(1)$，是原地排序。

### 是否稳定排序？
相同的元素未做交换，是稳定排序。


## javascript 实现 2
```js
/**
 * desc: 冒泡排序，数据完全有序时提前退出
 * input:
 * @param {Array} list
 */
function func(list) {
  if (list.length <= 1) return;

  for (let i = 0; i < list.length - 1; i++) {
    let noSwap = true;
    // 完成冒泡的数据不再参与交换
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  // console.log(list);
}

/**
 * 测试
 */
const testList = [
  [0, 1, 2, 3, 4, 5, 6],
  [0, 0, 0, -1, -1, 12, 9, 9],
];
testList.forEach(list => {
  func(list);
});
```
### 描述
当某一次冒泡没有产生交换时，表示数据已经完全有序，排序完成，因此程序中加了一个 noSwap 参数，用以提前退出排序。

### 时间复杂度
最好情况：数据完全有序，只进行一次冒泡，`n - 1` 次比较，最好情况时间复杂度为：$O(n)$。  
最坏情况：数据完全无需，分析方法与 **实现 1** 中相同，最坏情况时间复杂度为：$O(n^2)$。  
平均情况时间复杂度：？  
其它特性同 **实现 1**。

