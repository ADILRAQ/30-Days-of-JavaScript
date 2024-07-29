/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {

    let nbSettled = 0;
    const settledValues = new Array(functions.length);

    return new Promise((res, rej) => {

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
            .then(value => {
                settledValues[i] = value;
                ++nbSettled;
                if (nbSettled === functions.length)
                    res(settledValues)
            })
            .catch(value => rej(value));
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */