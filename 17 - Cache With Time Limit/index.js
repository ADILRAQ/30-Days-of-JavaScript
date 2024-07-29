var TimeLimitedCache = function() {
    this.data = new Map();
    this.countExpired = 0;
};

// TimeLimitedCache.prototype.data = new Map();
// TimeLimitedCache.prototype.countExpired = 0;

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {

    const existed = this.data.get(key);

    !existed ? ++this.countExpired : clearTimeout(existed.timeId);

    this.data.set(key, {
        value,
        timeId: setTimeout(() => {
            this.countExpired--;
            this.data.delete(key);
        }, duration)
    });

    return !!existed;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const value = this.data.get(key)?.value;
    return value === undefined ? -1 : value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.countExpired;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */