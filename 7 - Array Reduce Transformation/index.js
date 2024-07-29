/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (!nums.length)
        return init;
    // let res = init;
    
    for(const elem of nums)
        init = fn(init, elem);

    return init;
};