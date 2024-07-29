/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = new Array();

    for (const idx in arr)
        if (fn(arr[idx], Number(idx)))
            newArr.push(arr[idx]);
    return newArr;
};