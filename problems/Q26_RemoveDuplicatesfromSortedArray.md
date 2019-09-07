## [删除排序数组中的重复项 - Remove Duplicates from Sorted Array](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/)

`简单`

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let sum = 1;
  let pre = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (pre === nums[i]) {
      nums[i] = 'del';
    } else {
      pre = nums[i];
      sum++;
    }
  }

  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 'del') {
      nums[index] = nums[i];
      index ++;
    }
  }

  return sum;
};
 ```
**执行结果**
- 用时：104 ms，81.75%
- 内存：36.9 MB，59.38%

**题解**
两遍循环，第一遍将重复数据置为 `del`，并计算非重复数据个数 `sum`；第二遍移动非重复数据，将其填充在数组前 sum 位。
时间复杂度：O(n)。最好、最坏执行次数恒定。
空间复杂度：O(1)。为原地排序。
