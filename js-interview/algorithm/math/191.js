/**
 * 191. 位1的个数
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let count = 0
    while(n) {
        count++
        n = n & (n-1)
    }
    return count
};