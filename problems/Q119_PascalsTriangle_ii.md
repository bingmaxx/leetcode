## [杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/)

`简单`

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let rows = [1];
  for (let i = 1; i <= rowIndex; i++) {
    // 上一行行尾补 0
    rows.push(0);
    for (let j = rows.length - 1; j > 0; j--) {
      // 从后往前相邻元素相加，可复用 rows
      rows[j] = rows[j] + rows[j - 1];
    }
  }

  return rows;
};
```

### 执行结果
- 用时：64 ms，97.20%
- 内存：34.3 MB，45.75%

### 题解
与 `Q118` 类似，优化项：复用了 `rows`，节省了一个保存相邻行的数组。

最好、最坏情况相同，执行次数是个等差数列，时间复杂度：$O(rowIndex^2)$。  
使用了一个一维数组，空间复杂度：$O(rowIndex)$。  
