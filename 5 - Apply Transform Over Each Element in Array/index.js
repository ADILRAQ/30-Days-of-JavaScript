/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = new Array();
    for (const idx in arr) {
        newArr.push(fn(arr[idx], Number(idx)));
    }
    return newArr;
};