/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n < 0)
        return [arr];

    let newArr = [];

    for (const elem of arr) {
        if (!Array.isArray(elem))
            newArr.push(elem);
        else
            newArr.push(...flat(elem, n - 1));
    }

    return newArr;
};