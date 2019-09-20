## [搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/submissions/)

`简单`

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
};
 ```
**执行结果**
- 用时：76 ms，76.36%
- 内存：34.3 MB，30.66%

**题解**
遍历法。
时间复杂度：O(n)。最好时间复杂度：O(1)、最坏时间复杂度：O(n)。
空间复杂度：O(1)。

