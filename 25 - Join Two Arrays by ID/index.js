/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    let orgArr = new Map();
    let newArr = new Array();

    for (const elem of arr1)
        orgArr.set(elem.id, elem);

    for (const elem of arr2) {
        const value = orgArr.get(elem.id);

        !value ? orgArr.set(elem.id, elem) : orgArr.set(elem.id, {...value, ...elem});
       // if (!value)
           // orgArr.set(elem.id, elem);
       // else
           // orgArr.set(elem.id, {...value, ...elem});
    }

    for (value of orgArr.values())
        newArr.push(value);

    return newArr.sort((a, b) => a.id - b.id);
};