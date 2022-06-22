
/**
 * @param {number[][]} pairs
 * @return {number}
 */
 var findLongestChain = function(pairs) {
    let  x = 0
    let cur = -Infinity
    pairs.sort((a, b) => a[1] - b[1])
    for (let pair of pairs) {
        if (pair[0] > cur) {
            cur = pair[1]
            x++
        }
    }
    return x
};