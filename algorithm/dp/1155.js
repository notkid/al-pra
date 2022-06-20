/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
 var numRollsToTarget = function(n, k, target) {
    const MOD = 1000000007
    const dp = new Array(n + 1).fill(0).map(a => new Array(target + 1).fill(0))
    const min = Math.min(k, target)
    for(let i = 1; i<=min; i++) {
        dp[1][i] = 1
    }
    for (let i =1;i<= n;i++) {
        for(let j =1; j <= target;j++) {
            for(let m = 1; m<= k && m <=j; m ++) {
                dp[i][j] = (dp[i][j] + dp[i-1][j-m]) % MOD
            }
        }
    }
    console.table(dp)
    return dp[n][target]
};

console.log(numRollsToTarget(2,6,7))