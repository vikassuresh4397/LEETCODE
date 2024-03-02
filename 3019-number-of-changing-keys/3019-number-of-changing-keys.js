/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count = 0;
    for(let a = 0; a <= s.length - 2; a++) {
        let x = s[a].toLowerCase();
        let y = s[a].toUpperCase();
        
        if(x === s[a+1] || y === s[a+1]) {
            continue;
        } else {
            count++;
        }
    }
    return count;
};