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

最好情况时间复杂度：$O(1)$。  
最坏情况时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。



```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binary_search(nums, 0, nums.length - 1, target);
};

function binary_search(list, min, max, num) {
  if (min > max) return min;

  let mid = parseInt(min + (max - min) / 2);
  if (list[mid] === num) return mid;

  if (list[mid] < num) {
    return binary_search(list, mid + 1, max, num);
  } else {
    return binary_search(list, min, mid - 1, num);
  }
}
```

**执行结果**
- 用时：56 ms，99.84%  
- 内存：34.2 MB，44.82%

**题解**
无重复元素下的二分查找法（`exercise/SearchBinary.md`），区别在于目标值不存在时返回它将会被按顺序插入的位置。  

最好情况时间复杂度：$O(1)$。  
最坏情况时间复杂度：$O(logn)$。  
空间复杂度：$O(1)$。