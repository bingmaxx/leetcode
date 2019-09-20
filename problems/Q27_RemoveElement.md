## [移除元素](https://leetcode-cn.com/problems/remove-element/submissions/)

`简单`

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {  
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if(nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  
  return i;
};
 ```

### 执行结果
- 用时：68 ms，96.64%
- 内存：33.9 MB，16.20%

### 题解
类似 `Q26`，使用快慢指针，快指针自增遍历整个数组，慢指针在元素不为给定 `val` 时自增。

时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。  

