/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newArr = [];

    while (arr.length)
        newArr.push(arr.splice(0, size))

    return newArr;
};