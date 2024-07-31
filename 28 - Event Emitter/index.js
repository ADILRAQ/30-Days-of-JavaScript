

class EventEmitter {
    
    events;

    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
    
        !this.events.get(eventName) ? this.events.set(eventName, [callback]) : this.events.get(eventName).push(callback);

        return {
            unsubscribe: () => {
                const arr = this.events.get(eventName);

                arr.splice(arr.indexOf(callback), 1);

                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const cbs = this.events.get(eventName);
        let arr = [];

        if (cbs?.length) {
            for(let cb of cbs)
                arr.push(cb(...args));
        }

        return arr;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */