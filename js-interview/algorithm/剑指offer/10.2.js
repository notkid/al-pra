/**
 * 剑指 Offer 10- II. 青蛙跳台阶问题
 */

/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    const MOD = 1000000007
    let p = 1, q= 1, sum 
    for(let i = 0; i< n; i++) {
        sum = (p + q) % MOD
        p = q
        q = sum
    }
    return p
};