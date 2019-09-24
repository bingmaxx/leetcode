## [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

`简单`

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min_price = Number.MAX_VALUE;
  let max_benefit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min_price) {
      min_price = prices[i];
    } else if (prices[i] - min_price > max_benefit){
      max_benefit = prices[i] - min_price;
    }
  }
  return max_benefit;
};
```

### 执行结果
- 用时：76 ms，91.60%
- 内存：35.3 MB，49.91%

### 题解
参考了官方题解，思路如下：一遍遍历，维护一个最低价格 `min_price`。遍历过程中计算所有高于 min_price 的股票的收益，记录该收益的最大值。


最好、最坏情况相同，时间复杂度：$O(n)$。  
空间复杂度：$O(1)$。  
