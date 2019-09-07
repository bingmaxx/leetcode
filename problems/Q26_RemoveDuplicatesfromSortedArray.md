## [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/)

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


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
```
**执行结果**
- 用时：96 ms，94.26%
- 内存：36.4 MB，90.59%

**题解**
参考了别人题解中的快慢指针方法，慢指针记录了所有非重复数据，快指针遍历整个数组，同时在一遍循环的同时搬运数据，较第一个写法少了一次循环。
其实第一个写法中 pre 就相当于慢指针指向的数据，i 就相当于快指针，但思想不对。
时间复杂度：O(n)。
空间复杂度：O(1)。

