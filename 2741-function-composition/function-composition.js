/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    if (functions.length == 0) {
        return (x) => x;
    }

    return (x) => {
        let result = x;
        for (let a = 0; a < functions.length; a++) {
            result = functions[functions.length-1-a](result);
        }

        return result;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */