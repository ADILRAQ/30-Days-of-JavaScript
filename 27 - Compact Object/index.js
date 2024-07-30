/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const treatArray = (arr) => {
		let newArr = [];

		for (elem in arr) {

			if (arr[elem]) {
                if (Array.isArray(arr[elem]))
                    newArr.push(treatArray(arr[elem]));
                else if (typeof arr[elem] === 'object')
                    newArr.push(treatObject(arr[elem]));
                else
                    newArr.push(arr[elem]);
            }
		}

		return newArr;
	};

	const treatObject = (obj) => {
		let newObj = {};

		for (key in obj) {
			if (obj[key]) {

                if (Array.isArray(obj[key])) {
                    newObj[key] = treatArray(obj[key]);
                }
                else if (typeof obj[key] === 'object') {
                    newObj[key] = treatObject(obj[key]);
                }
                else {
                    newObj[key] = obj[key];
                }
            }
		}

		return newObj;
	}

	return Array.isArray(obj) ? treatArray(obj) : treatObject(obj);
};