## [求众数](https://leetcode-cn.com/problems/majority-element/)

`简单`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) ? map.get(nums[i]) : 0
    map.set(nums[i], ++count);
    if (count > nums.length / 2) {
      return nums[i];
    }
  }

  return null;
};
```

### 执行结果
- 用时：72 ms，98.50%
- 内存：37.3 MB，63.25%

### 题解
创建一个 `Map`，遍历数组时在 Map 中记录当前元素出现的次数 count，当 count 大于数组长度的一半时，该元素即为众数。  

时间复杂度：$O(n)$。最好情况数组左半部全是众数，需要遍历 $ \frac 1 2 n + 1 $ 次；最坏情况数组右半部全是众数，且众数个数刚好大于数组长度的一半，需要遍历 $ n $ 次。   
空间复杂度：$O(1)$。  

### 其它
官方题解中提到的其它有趣解法：  
**排序**：如果存在众数，则排序之后，众数总会落在数组一半的位置（注意区分数组长度的奇偶）。可以想像成占数组长度一半的滑窗在数组中随机滑动。  
**Boyer-Moore 投票算法**：将假想的众数与非众数做 “消消乐”，具体见题解。




