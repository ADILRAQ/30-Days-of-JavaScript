/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let keepData = new Map();

    return function(...args) {
        const key = `${args[0]},${args[1]}`;
        if (keepData.has(key))
            return keepData.get(key);
        const calcData = fn(...args);
        keepData.set(key, calcData);
        return calcData;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */