## [加一](https://leetcode-cn.com/problems/plus-one/)

`简单`

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let head = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (head > 0) {
      const temp = digits[i] + head;
      digits[i] = temp % 10;
      head = temp >= 10 ? 1 : 0;
    } else break;
  }
  
  return head > 0 ? [1, ...digits] : digits;
};
```

### 执行结果
- 用时：56 ms，99.94%
- 内存：34 MB，7.71%

### 题解
认为初始进位为 1。  
数字低位加上初始进位，新进位等于 0，则直接返回新数组；新进位大于 0，则高位重复此操作。   
倒序遍历完数组后如果进位大于 0，数组首插入该进位。

最好情况，没有产生任何进位，循环一次直接退出；最坏情况产生了 n 次进位，循环 n 次，数组长度加 1。   
最好情况时间复杂度：$O(1)$。  
最坏情况时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。

