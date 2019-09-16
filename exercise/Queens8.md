## 八皇后问题

**问题描述**  
在一个 8x8 的棋盘，放 8 个棋子（皇后），每个棋子所在的行、列、对角线都不能有另一个棋子。


```js
const NUM = 8;
let result = [];        // 下标表示行，值表示 QUEEN 所在列
/**
 * 第 row 行 QUEEN 的下法
 * input:
 * @param {Number} row
*/
function func(row) {
  // 所有行都放置了QUWEEN
  if (row >= NUM) {
    log(result);
    return;
  }

  // 遍历第 row 行的所有列
  for (let col = 0; col < NUM; col++) { 
    if (isOk(row, col, result)) {
      result[row] = col;
      func(row+1);
    }
  }
}

/**
 * 判断当前行中已放置的 QUEEN，是否满足条件
 * input:
 * @param {Number} row
 * @param {Number} col
 * @param {Array} result
 * output:
 * @param {Boolen} state
*/
function isOk(row, col, result) {
  let state = true;
  for (let i = 0; i < row; i++) {
    if (col === result[i]) return state = false;              // 在同列
    if (col === result[i] + row - i) return state = false;    // 在左对角线
    if (col === result[i] - row + i) return state = false;    // 在右对角线
  }
  return state;
}

/**
 * 将 result 中的数据展开成 8 行 8 列的形式，用于直观展示
 * input:
 * @param {Array} result
*/
let index = 0;
function log(result) {
  let str = '';
  for (let row = 0; row < NUM; row++) {
    str = ''
    for (let col = 0; col < NUM; col++) {
      if (result[row] === col) {
        str += 'Q  ';
      } else {
        str += '*  ';
      }
    }
    console.log(str);
  }
  console.log('----------------', ++index);
}

func(0);
```