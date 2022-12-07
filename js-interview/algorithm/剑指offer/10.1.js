/**
 * 剑指 Offer 10- I. 斐波那契数列
 */

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    const MOD = 1000000007;
    if (n < 2) return n
    let p = 0, q = 0,r =1
    for(let i=2; i<= n;i++) {
        p = q

        q = r
        r = (p  +q) % MOD
    }
    return r
};