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


const nums1 = [1,2,5,0,0,0];
const nums2 = [2,3,4];
merge(nums1, 3, nums2, 3);
console.log(nums1);