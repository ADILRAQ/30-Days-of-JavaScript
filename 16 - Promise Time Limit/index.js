/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    let data;
    return async function(...args) {
        const func = fn(...args);
        const timeOutFunc = new Promise((res, rej) => {
            setTimeout(() => rej("Time Limit Exceeded"), t);
        });

        const data = await Promise.race([func, timeOutFunc]);

        return data;
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */