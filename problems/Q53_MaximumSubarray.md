## [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

`简单`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    max = max > sum ? max : sum;
  }

  return max;
};
```

### 执行结果
- 用时：76 ms，93.21%
- 内存：35.4 MB，21.25%

### 题解
连续子数组和 sum 大于 0，则继续累加，否则 sum 取当前元素值。变量 max 用于保留历史过程中出现的最大和。

遍历整个数组，最好、最坏情况时间复杂度相同。  
时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。

