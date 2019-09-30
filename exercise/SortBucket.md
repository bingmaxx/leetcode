# 桶排序

## 思路  
有 n 个数据，将它们均匀划分到 m 个桶中，然后对桶中的数据采用其它排序算法排序，最后再合并，时间复杂度接近 $O(n)$（见末尾分析）。  
典型的应用场景是 **外部排序**，即外部磁盘数据量太大无法一次性加载到内存中，可以将数据按大小分成多个小文件，排好序后将文件按大小编号命名存至磁盘。
注意事项：每个桶中的数据要尽量均匀，极端情况下数据都落在一个桶内，就退化成普通排序算法了（$ O(nlogn) $）。


## javascript 实现 
```js
/**
 * desc: 桶排序
 * input:
 * @param {Array} list
 */
function func(list) {
  const m = 10; // 桶的个数
  let min = list[0];
  let max = list[0];
  // 查找最大最小值
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    } else if (list[i] > max){
      max = list[i];
    }
  }

  const temp = new Array(m).fill(null);
  const interval = Math.ceil((max - min + 1) / m);
  // 将数据划分到桶中
  for (let i = 0; i < list.length; i++) {
    const j = parseInt((list[i] - min) / interval);
    temp[j] = temp[j] || [];   
    temp[j].push(list[i]);
  }

  let num = 0;
  // 将 temp 中数据拼接至 list
  for (let j = 0; j < m; j++) {
    if (temp[j]) {
      quick_sort(temp[j], 0, temp[j].length - 1);
      temp[j].forEach(item =>  list[num++] = item);
    }   
  }
}


/**
 * desc: 快排
 */
function quick_sort(list, min, max) {
  if (min >= max) return;
  const p = partition(list, min, max);
  quick_sort(list, min, p - 1);
  quick_sort(list, p + 1, max);
}
function partition(list, min, max) {
  const pivot = list[max];
  let i = min;
  for (let j = min; j <= max; j++) {
    if (list[j] <= pivot) {
      const temp = list[j];
      list[j] = list[i];
      list[i] = temp;
      i++;
    }
  }
  return i - 1;
}


/**
 * 测试
 */
(function test() {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push((Math.random()) * 100);
  }
  func(list);
  console.log('打印list: ', list);
})();
```

### 时间复杂度


### 空间复杂度


### 是否原地排序？


### 是否稳定排序？


