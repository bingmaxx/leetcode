# [最小栈](https://leetcode-cn.com/problems/min-stack)

> 使用数组模拟栈，检索栈中最小元素：遍历栈中全部元素
```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.list = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.list.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(this.list.length > 0) {
    this.list.splice(this.list.length - 1, 1);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.list.length > 0 ? this.list[this.list.length - 1] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this.list[0];
  for(let i = 1; i < this.list.length; i++) {
    min = this.list[i] < min ? this.list[i] : min;
  }
  return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 ```