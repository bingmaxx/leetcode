```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map([
        ['{', 1],
        ['}', -1],
        ['[', 2],
        [']', -2],
        ['(', 3],
        [')', -3],
    ]);
    let list = [];
    let num = 0;
    let state = true;
    [...s].map(str => {
        num = map.get(str);
        if (num > 0) {
            list.push(num);
        } else if (list.pop() + num !== 0){
            return state = false;
        }
    });

    return state && list.length === 0 ? true : false;
};
```