## [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

`简单`

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let bottom_price = Number.MAX_VALUE;
  let max_benefit = 0;
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    // 价格下降过程
    if (prices[i] < bottom_price) {
      bottom_price = prices[i];
      // 峰值后的价格低于上次的 bottom_price，有 max_benefit 但未进入下个分支
      sum += max_benefit;
      max_benefit = 0;
    } else { // 此时 bottom_price 确实为谷点，价格上升过程
      if (prices[i] - bottom_price > max_benefit) {
        max_benefit = prices[i] - bottom_price;
      } else { // 价格上升翻过了峰值
        bottom_price = prices[i];
        sum += max_benefit;
        max_benefit = 0;
      }
    }
  }
  
  return sum + max_benefit;
};
```

### 执行结果
- 用时：64 ms，99.28%
- 内存：35.9 MB，9.84%

### 题解
计算所有价格上升过程的和即可，结合 `Q121` 理解。

时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。  
