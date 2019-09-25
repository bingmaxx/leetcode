## [两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

`简单`

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  for (let k = 1; k < numbers.length; k++) {
    const temp = numbers[i] + numbers[j];
    if (temp === target) {
      return [i + 1, j + 1];
    } else if (temp > target) {
      j--;
    } else {
      i++;
    }
  }

  return [];
};
```

### 执行结果
- 用时：68 ms，96.03%
- 内存：35 MB，40.32%

### 题解
参考了官方题解。因为是有序数组，使用首尾双指针，如果两数之和大于 target，较大指针自减；如果两数之和小于 target，较小指针自增。最坏情况下执行 `n - 1` 次比较操作即可得出结果，n 为数组长度。  
题目约束只有唯一解，所以可以提前退出，最多一次比较即可得出结果。  


时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。  
