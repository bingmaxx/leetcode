/**
 * desc: 插入排序
 * input:
 * @param {Array} list
 */
function func(list) {
  if (list.length <= 1) return;

  // i 在未排序区间从前往后移动
  for (i = 1; i < list.length; i++) {
    const value = list[i];
    // j 在已排序区间从后往前移动
    let j = i - 1;
    for (; j >= 0; j--) {
      if (list[j] > value) {
        // 将 j 位置的数据后移一位
        list[j + 1] = list[j];
      } else {
        break;
      }
    }
    // 将数据插入（写在循环外，因为有可能 value 比已排序区间所有数据都小）
    list[j + 1] = value;
  }
}

/**
 * 测试
 */
const testList = [
  [0, 12, 15, 18, -2, 3, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 6, 5, 4, 3, 2, 1],
];
testList.forEach(list => {
  func(list);
  console.log('打印list: ', list);
});