## [杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

`简单`

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows <= 0) return [];

  let preRows = [1];
  let out = [[1]];
  // i 当前行的行号
  for (let i = 1; i < numRows; i++) {
    // 上一行行尾补 0
    preRows.push(0);
    let rows = [1];
    // j 上一行的列号
    for (let j = 0; j < preRows.length - 1; j++) {
      rows.push(preRows[j] + preRows[j+1]);
    }
    
    preRows = [...rows];
    out.push(rows);
  }

  return out;
};
```

### 执行结果
- 用时：72 ms，82.30%
- 内存：34.1 MB，7.36%

### 题解
纯逻辑，见代码。

最好、最坏情况相同，执行次数是个等差数列，时间复杂度：$O(numRows^2)$。  
最终生成了一个二维数组，占用空间也是一个等差数列，空间复杂度：$O(numRows^2)$。  
