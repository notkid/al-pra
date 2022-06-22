/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
    let min1= 0, min2 =0
    for(let i = 0; i< s.length; i++) {
        if (s[i] % 2 !== i %2) {
            min1 ++
        } else {
            min2 ++
        }
    }
    return Math.min(min1, min2)
};