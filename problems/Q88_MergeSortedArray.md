## [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

`简单`

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  for (let p = m + n - 1; p >= 0; p--) {
    if (i < 0) {
      nums1[p] = nums2[j--];
      continue;
    }
    if (j < 0) break;

    if (nums1[i] >= nums2[j]) {
      nums1[p] = nums1[i--];
    } else {
      nums1[p] = nums2[j--];
    }
  }
};
```

### 执行结果
- 用时：64 ms，99.21%
- 内存：34.2 MB，53.19%

### 题解
合并两个有序数组，在归并排序中是个重要的操作，采用双指针法即可，但是需要额外的空间。  
参考了题解，本题可以使用从后往前的双指针，利用了 nums1 的闲置空间，降低了空间复杂度，细节见代码。

最好情况，nums2 的最小元素大于 nums1 的最大元素，只要 n 次循环即可提前退出；最坏情况，两个数组中的最小元素在 nums2 中，需要遍历完两个数组。  
最好情况时间复杂度：$O(n)$。  
最坏情况时间复杂度：$O(m + n)$。  
空间复杂度：$O(1)$。  
